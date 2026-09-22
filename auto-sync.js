// Device-local connection details are deliberately excluded from cloud data.
const AUTO_SYNC_KEY = 'quran_dashboard_sync_state';
let autoSync = { ready: false, busy: false, dirty: false, baseline: null, url: '', conflict: false, cloudFirst: false, message: 'Connect cloud sync in Settings.', timer: null };
function sharedStudyData(value) {
  const data = JSON.parse(JSON.stringify(value));
  delete data.googleSheetsUrl; delete data.fileLinked; delete data.theme;
  (data.courses || []).forEach(c => {
    if (c.legacyCompleted === undefined) c.legacyCompleted = Number(c.completed) || 0;
    if (c.status === 'queued') c.status = 'planned';
  });
  (data.sessions || []).forEach(s => {
    if (!s.courseId && s.course) {
      const matches = (data.courses || []).filter(c => c.name.trim().toLowerCase() === s.course.trim().toLowerCase());
      if (matches.length === 1) s.courseId = matches[0].id;
    }
  });
  return data;
}
function stableSyncText(value) {
  if (Array.isArray(value)) return '[' + value.map(stableSyncText).join(',') + ']';
  if (value && typeof value === 'object') return '{' + Object.keys(value).sort().map(k => JSON.stringify(k) + ':' + stableSyncText(value[k])).join(',') + '}';
  return JSON.stringify(value);
}
function studyFingerprint(value) { return stableSyncText(sharedStudyData(value)); }
function persistSyncState() {
  localStorage.setItem(AUTO_SYNC_KEY, JSON.stringify({url:autoSync.url, baseline:autoSync.baseline, dirty:autoSync.dirty, cloudFirst:autoSync.cloudFirst}));
}
function setSyncStatus(message) { autoSync.message = message; displayAutoSyncStatus(); }
function displayAutoSyncStatus() {
  const status = document.getElementById('google-sync-status');
  if (status) status.textContent = autoSync.message;
  const badge = document.getElementById('cloud-sync-indicator');
  if (badge) { badge.textContent = autoSync.conflict ? 'Cloud sync: choose a version' : autoSync.message; badge.title = autoSync.message; }
  const resolve = document.getElementById('sync-resolve-button');
  if (resolve) resolve.hidden = !autoSync.conflict;
}
function queueAutoSync() {
  if (!autoSync.ready) return;
  if ((store.googleSheetsUrl || '') !== autoSync.url) {
    autoSync.url = store.googleSheetsUrl || ''; autoSync.baseline = null; autoSync.conflict = false;
  }
  autoSync.dirty = studyFingerprint(store) !== autoSync.baseline;
  persistSyncState();
  if (!autoSync.url) return;
  setSyncStatus(navigator.onLine ? 'Changes saved on this device. Sync pending…' : 'Offline — saved on this device. Will retry online.');
  clearTimeout(autoSync.timer);
  autoSync.timer = setTimeout(() => runAutoSync(), 800);
}
function hasStudyRecords(data) {
  return ['courses','sessions','vocab','hafazan','journal','library','readingQueue'].some(key => data[key]?.length) || Object.keys(data.dailyLogs || {}).length > 0 || data.surahs?.some(s => s.completion || s.notes);
}
function saveSafetyCopy() {
  // Preserve the latest displaced local copy without deleting the user's history.
  localStorage.setItem('quran_dashboard_before_cloud_sync', JSON.stringify(store));
}
function validSyncUrl(url) { return /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url); }
async function readCloudData(url) {
  // Apps Script ContentService responses do not expose CORS headers. JSONP
  // lets the public web app read the same response without a proxy.
  return new Promise((resolve, reject) => {
    const callback = '__quranCloudSync_' + Date.now() + '_' + Math.random().toString(36).slice(2);
    const script = document.createElement('script');
    const timeout = setTimeout(() => finish(new Error('Cloud response timed out')), 20000);
    function finish(error, value) {
      clearTimeout(timeout);
      script.remove();
      delete window[callback];
      if (error) reject(error); else resolve(value);
    }
    window[callback] = value => {
      if (!value || (typeof value === 'object' && !Object.keys(value).length)) return finish(null, null);
      if (!value.version || !Array.isArray(value.sessions) || !Array.isArray(value.courses) || !value.dailyLogs || !Array.isArray(value.surahs)) {
        return finish(new Error('Cloud response is not a dashboard backup'));
      }
      finish(null, value);
    };
    script.onerror = () => finish(new Error('Cloud response could not be loaded'));
    script.src = url + (url.includes('?') ? '&' : '?') + 'callback=' + encodeURIComponent(callback) + '&_t=' + Date.now();
    document.head.appendChild(script);
  });
}
function applyCloudData(data) {
  saveSafetyCopy();
  store = {...store, ...sharedStudyData(data), googleSheetsUrl:autoSync.url, theme:store.theme, fileLinked:store.fileLinked};
  prepareCourses();
  localStorage.setItem('quran_dashboard_store', JSON.stringify(store));
  document.getElementById('sidebar-username').textContent = store.profile.name;
  document.getElementById('sidebar-userlevel').textContent = store.profile.level;
  renderAllViews();
}
function syncFormIsActive() {
  return document.activeElement?.matches('input,textarea,select') || !!document.querySelector('dialog[open],.modal-overlay.active') || editingStudyId !== null || autoSync.formDirty;
}
function markSyncConflict() {
  autoSync.conflict = true;
  setSyncStatus('Both copies contain changes. Choose a version in Settings.');
  persistSyncState();
}
async function runAutoSync() {
  if (!autoSync.ready || autoSync.busy || !autoSync.url || autoSync.conflict) return;
  if (!validSyncUrl(autoSync.url)) { setSyncStatus('Enter a valid Apps Script Web App URL in Settings.'); return; }
  if (!navigator.onLine) { setSyncStatus('Offline — saved on this device. Will retry online.'); return; }
  if (syncFormIsActive()) { setSyncStatus('Waiting for you to finish this form before syncing.'); return; }
  autoSync.busy = true;
  const url = autoSync.url;
  try {
    setSyncStatus('Checking cloud progress…');
    const remote = await readCloudData(url);
    if (url !== autoSync.url) return;
    const localText = studyFingerprint(store);
    const remoteText = remote ? studyFingerprint(remote) : null;
    if (autoSync.cloudFirst) {
      if (remote) {
        if (syncFormIsActive()) return;
        applyCloudData(remote); autoSync.baseline = remoteText; autoSync.dirty = false;
      } else { await uploadStudyData(url, localText); }
      autoSync.cloudFirst = false;
    } else if (remoteText === localText) {
      autoSync.baseline = remoteText; autoSync.dirty = false;
    } else if (autoSync.baseline === null) {
      if (!remote) { await uploadStudyData(url, localText); }
      else if (!hasStudyRecords(store)) {
        if (syncFormIsActive()) return;
        applyCloudData(remote); autoSync.baseline = remoteText; autoSync.dirty = false;
      } else { markSyncConflict(); return; }
    } else if (localText === autoSync.baseline) {
      if (!remote) { setSyncStatus('Cloud data is missing. Local progress kept; check your connection.'); return; }
      if (syncFormIsActive()) return;
      applyCloudData(remote); autoSync.baseline = remoteText; autoSync.dirty = false;
    } else if (remoteText === autoSync.baseline) {
      await uploadStudyData(url, localText);
    } else { markSyncConflict(); return; }
    persistSyncState();
    if (!autoSync.conflict) setSyncStatus(autoSync.dirty ? 'New changes pending sync…' : 'Synced at ' + new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}));
  } catch (error) {
    setSyncStatus('Sync unavailable — local progress kept. Retrying automatically.');
    console.warn('Cloud sync:', error.message);
  } finally { autoSync.busy = false; }
}
async function uploadStudyData(url, localText) {
  // The write request is intentionally opaque; the following JSONP readback
  // verifies that Apps Script stored the exact dashboard data.
  await fetch(url, {method:'POST', mode:'no-cors', headers:{'Content-Type':'text/plain'}, body:localText});
  const verified = await readCloudData(url);
  if (url !== autoSync.url) return;
  if (!verified || studyFingerprint(verified) !== localText) { markSyncConflict(); return; }
  autoSync.baseline = localText;
  autoSync.dirty = studyFingerprint(store) !== localText;
}
async function connectAutoSync() {
  if (autoSync.busy) { showToast('Please wait for the current sync to finish.', 'error'); return; }
  const url = document.getElementById('set-google-url').value.trim();
  if (!validSyncUrl(url)) { showToast('Enter your Apps Script URL ending in /exec.', 'error'); return; }
  if (url !== autoSync.url) { autoSync.baseline = null; autoSync.conflict = false; }
  store.googleSheetsUrl = autoSync.url = url;
  autoSync.formDirty = false;
  document.activeElement?.blur();
  localStorage.setItem('quran_dashboard_store', JSON.stringify(store));
  persistSyncState();
  await runAutoSync();
}
function openSyncSettings() {
  document.querySelector('[data-tab="settings"]').click();
  document.getElementById('set-google-url').scrollIntoView({block:'center'});
  displayAutoSyncStatus();
}
function showSyncConflict() {
  const dialog = document.getElementById('sync-conflict-dialog');
  dialog.showModal();
}
async function useCloudVersion() {
  if (autoSync.busy) return;
  autoSync.busy = true;
  try {
    const remote = await readCloudData(autoSync.url);
    if (!remote) throw Error('Cloud is empty');
    applyCloudData(remote); autoSync.baseline = studyFingerprint(remote); autoSync.dirty = false; autoSync.conflict = false; autoSync.formDirty = false;
    persistSyncState(); document.getElementById('sync-conflict-dialog').close(); setSyncStatus('Synced — using the cloud version.');
  } catch (error) { setSyncStatus('Could not load cloud data. Your local copy is unchanged.'); }
  finally { autoSync.busy = false; }
}
function downloadSyncBackup() { exportBackupData(); }
async function useDeviceVersion() {
  if (autoSync.busy || !confirm('Replace the cloud records with this device’s records? Other devices will receive this version.')) return;
  autoSync.busy = true;
  try {
    const previous = await readCloudData(autoSync.url);
    if (previous) localStorage.setItem('quran_dashboard_previous_cloud', JSON.stringify(previous));
    autoSync.conflict = false;
    await uploadStudyData(autoSync.url, studyFingerprint(store));
    persistSyncState();
    document.getElementById('sync-conflict-dialog').close();
    if (!autoSync.conflict) setSyncStatus('Synced — cloud updated from this device.');
  } catch (_) { autoSync.conflict = true; setSyncStatus('Cloud update could not be verified. Local records kept.'); }
  finally { autoSync.busy = false; }
}
async function copySyncSetupLink() {
  if (!validSyncUrl(autoSync.url)) { showToast('Connect to cloud sync first.', 'error'); return; }
  const link = location.origin + location.pathname + '?v=20260922-open-tadabbur#connect=' + encodeURIComponent(autoSync.url);
  try { await navigator.clipboard.writeText(link); showToast('Setup link copied. Open it on your other device; keep it private.'); }
  catch (_) { prompt('Copy this private setup link to your other device:', link); }
}
async function startAutoSync(skipInitialSync = false) {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(AUTO_SYNC_KEY) || '{}'); } catch (_) { /* Recover from invalid device metadata. */ }
  const fragment = new URLSearchParams(location.hash.slice(1));
  const linkUrl = fragment.get('connect');
  if (linkUrl && validSyncUrl(linkUrl)) {
    store.googleSheetsUrl = linkUrl;
    autoSync.cloudFirst = true;
    history.replaceState(null, '', location.pathname + location.search);
    localStorage.setItem('quran_dashboard_store', JSON.stringify(store));
  }
  autoSync.url = store.googleSheetsUrl || saved.url || '';
  store.googleSheetsUrl = autoSync.url;
  autoSync.baseline = saved.url === autoSync.url ? saved.baseline ?? null : null;
  autoSync.dirty = !!saved.dirty;
  autoSync.cloudFirst = autoSync.cloudFirst || (saved.url === autoSync.url && !!saved.cloudFirst);
  autoSync.ready = true;
  if (skipInitialSync) { autoSync.conflict = true; setSyncStatus('Local data reset. Cloud sync paused; choose a version in Settings.'); }
  else { setSyncStatus(autoSync.url ? 'Connecting to cloud…' : 'Connect cloud sync in Settings.'); await runAutoSync(); }
}
setInterval(() => { if (!document.hidden) runAutoSync(); }, 30000);
window.addEventListener('online', () => runAutoSync());
window.addEventListener('focus', () => runAutoSync());
document.addEventListener('visibilitychange', () => { if (!document.hidden) runAutoSync(); });
document.addEventListener('input', event => { if (event.target.closest('form') || event.target.closest('#settings')) autoSync.formDirty = true; });
document.addEventListener('submit', () => { autoSync.formDirty = false; setTimeout(() => runAutoSync(), 1000); });
document.addEventListener('reset', () => { autoSync.formDirty = false; });
document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => { autoSync.formDirty = false; setTimeout(() => runAutoSync(), 100); }));
