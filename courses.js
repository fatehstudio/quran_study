// Course records and study sessions share one source of progress.
function localStudyDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
function nextRecordId(records) { return Math.max(0, ...records.map(r => Number(r.id) || 0)) + 1; }
function calculateMonthlyStudyMinutes(date = new Date()) {
  const month = localStudyDate(date).slice(0, 7);
  return store.sessions.filter(session => session.date?.slice(0, 7) === month)
    .reduce((sum, session) => sum + session.minutes, 0);
}
// Refresh a page left open overnight, including when a tablet wakes from sleep.
let lastStudyDisplayDate = localStudyDate();
function refreshStudyDate() {
  const today = localStudyDate();
  if (today !== lastStudyDisplayDate) {
    lastStudyDisplayDate = today;
    renderAllViews();
  }
}
setInterval(refreshStudyDate, 30000);
window.addEventListener('focus', refreshStudyDate);
document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshStudyDate(); });
let editingStudyId = null;
function saveStudySession(session) {
  const previous = store.sessions.find(s => s.id === editingStudyId);
  if (previous) {
    session.id = previous.id;
    store.sessions[store.sessions.indexOf(previous)] = session;
  } else store.sessions.push(session);
  for (const date of new Set([previous?.date, session.date].filter(Boolean))) {
    const log = store.dailyLogs[date] || { target: store.goals.daily, mood: '😐 Focused', reflection: '', notes: '', actionItem: '' };
    log.actual = store.sessions.filter(s => s.date === date).reduce((sum,s) => sum + s.minutes, 0);
    log.achievement = Math.round(log.actual / log.target * 100);
    log.status = log.actual >= log.target ? 'Green' : log.actual >= log.target * .7 ? 'Yellow' : 'Orange';
    store.dailyLogs[date] = log;
  }
  updateCourseCompletion(previous?.courseId);
  updateCourseCompletion(session.courseId);
  const course = store.courses.find(c => c.id === session.courseId);
  if (course && course.status === 'planned') course.status = 'active';
  if (course && (!course.start || session.date < course.start)) course.start = session.date;
  cancelStudyEdit();
}
function cancelStudyEdit() {
  editingStudyId = null;
  document.getElementById('cancel-study-edit').hidden = true;
  document.querySelector('#log-session-form button[type="submit"]').textContent = 'Save study session';
  document.getElementById('session-form-title').textContent = '📝 Log Study Session';
}
function editStudySession(id) {
  const session = store.sessions.find(s => s.id === id);
  if (!session) return;
  const dialog = document.getElementById('course-dialog');
  if (dialog.open) dialog.close();
  cancelStudyEdit();
  const form = document.getElementById('log-session-form');
  form.reset();
  refreshCourseSelect();
  document.querySelector('[data-tab="logs"]').click();
  editingStudyId = id;

  for (const [field, key] of Object.entries({source:'source',category:'category'})) {
    const select = document.getElementById(`sess-${field}`);
    const value = session[key] || '';
    if (value && ![...select.options].some(option => option.value === value)) select.add(new Option(value, value));
  }
  for (const [field, key] of Object.entries({date:'date',time:'time',minutes:'minutes',source:'source',category:'category',course:'courseId',lesson:'lesson',surah:'surah',topic:'topic',difficulty:'difficulty',rating:'rating',notes:'notes','lesson-number':'lessonNumber','study-status':'studyStatus'})) {
    document.getElementById(`sess-${field}`).value = session[key] ?? (field === 'study-status' ? 'in-progress' : '');
  }
  document.getElementById('cancel-study-edit').hidden = false;
  document.querySelector('#log-session-form button[type="submit"]').textContent = 'Save changes';
  document.getElementById('session-form-title').textContent = '✏️ View / Edit Daily Log';
  form.scrollIntoView({behavior:'smooth', block:'start'});
  showToast('Daily Log opened for editing.');
}
function editCourseStudy(id) { editStudySession(id); }
function escapeCourseText(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function prepareCourses() {
  store.courses.forEach(c => {
    if (c.legacyCompleted === undefined) c.legacyCompleted = Number(c.completed) || 0;
    if (c.status === 'queued') c.status = 'planned';
  });
  store.sessions.forEach(s => {
    if (!s.courseId && s.course) {
      const matches = store.courses.filter(c => c.name.trim().toLowerCase() === s.course.trim().toLowerCase());
      if (matches.length === 1) s.courseId = matches[0].id;
    }
  });
}
function refreshCourseSelect() {
  prepareCourses();
  const select = document.getElementById('sess-course');
  const previous = select.value;
  select.innerHTML = '<option value="">Independent study</option>' + store.courses.map(c => `<option value="${c.id}">${escapeCourseText(c.name)}</option>`).join('');
  select.value = previous;
}
function validateStudy(s) {
  const c = store.courses.find(c => c.id === s.courseId);
  if (!s.date || s.date > localStudyDate() || !Number.isFinite(s.minutes) || s.minutes <= 0) {
    showToast('Enter a valid study date (today or earlier) and minutes.', 'error'); return false;
  }
  if (s.studyStatus === 'completed' && (!c || !Number.isInteger(s.lessonNumber) || s.lessonNumber < 1 || s.lessonNumber > c.total)) {
    showToast('Choose a course and a lesson number within its total to mark completion.', 'error'); return false;
  }
  return true;
}
function updateCourseCompletion(id) {
  const c = store.courses.find(c => c.id === id);
  if (!c) return;
  const done = new Set(store.sessions.filter(s => s.courseId === id && s.studyStatus === 'completed' && s.lessonNumber > c.legacyCompleted).map(s => s.lessonNumber));
  c.completed = Math.min(c.total, c.legacyCompleted + done.size);
  if (c.completed >= c.total) { c.status = 'completed'; c.end = localStudyDate(); }
  else if (c.status === 'completed') { c.status = 'active'; c.end = ''; }
}
function continueCourse(id) {
  cancelStudyEdit();
  document.getElementById('log-session-form').reset();
  refreshCourseSelect();
  const c = store.courses.find(c => c.id === id);
  document.querySelector('[data-tab="logs"]').click();
  document.getElementById('sess-course').value = String(id);
  selectStudyCourse();
  document.getElementById('sess-date').value = localStudyDate();
  document.getElementById('sess-time').value = new Date().toTimeString().slice(0,5);
  document.getElementById('sess-study-status').value = c.completed === c.total ? 'revision' : 'in-progress';
  document.getElementById('log-session-form').scrollIntoView({behavior:'smooth', block:'start'});
}
function selectStudyCourse() {
  const c = store.courses.find(c => c.id === Number(document.getElementById('sess-course').value));
  if (!c) return;
  for (const [id, value] of [['sess-source', c.platform], ['sess-category', c.category]]) {
    const select = document.getElementById(id);
    if (![...select.options].some(o => o.value === value)) select.add(new Option(value, value));
    select.value = value;
  }
  const completed = new Set(store.sessions.filter(s => s.courseId === c.id && s.studyStatus === 'completed').map(s => s.lessonNumber));
  let next = c.legacyCompleted + 1;
  while (completed.has(next)) next++;
  document.getElementById('sess-lesson-number').value = Math.min(next, c.total);
  document.getElementById('sess-lesson').value = `Lesson ${Math.min(next, c.total)}`;
}
renderTrackersTab = function() {
  prepareCourses();
  const filter = document.getElementById('course-filter').value;
  const courses = store.courses.filter(c => filter === 'all' || c.status === filter);
  document.getElementById('courses-list-container').innerHTML = courses.map(c => {
    const sessions = store.sessions.filter(s => s.courseId === c.id);
    const minutes = sessions.reduce((sum,s) => sum + s.minutes, 0);
    const last = sessions.map(s => s.date).sort().at(-1);
    return `<article class="course-tracker-card"><div class="course-header"><div class="course-title"><h4>${escapeCourseText(c.name)}</h4><span>${escapeCourseText(c.platform)} · ${escapeCourseText(c.category)}</span></div><span class="course-status-badge">${escapeCourseText(c.status)}</span></div><p>${c.completed} / ${c.total} lessons · ${Math.round(c.completed / c.total * 100)}%</p><progress value="${c.completed}" max="${c.total}" aria-label="Course completion"></progress><p class="course-meta">${minutes} minutes studied · Last studied: ${last || 'Not yet'}</p><div class="course-actions-row"><button class="btn btn-primary" onclick="continueCourse(${c.id})">${c.status === 'completed' ? 'Log revision' : 'Continue'}</button><button class="btn btn-secondary" onclick="openCourseDetails(${c.id})">Details & edit</button></div></article>`;
  }).join('') || '<p class="course-meta">No courses here yet. Add a course to begin.</p>';
  renderSurahGrid();
};
function openCourseDetails(id) {
  const c = store.courses.find(c => c.id === id);
  const dialog = document.getElementById('course-dialog');
  const sessions = store.sessions.filter(s => s.courseId === id).sort((a,b) => b.date.localeCompare(a.date));
  dialog.innerHTML = `<form id="edit-course-form"><h3>Course details</h3><label>Course title<input class="form-control" name="name" value="${escapeCourseText(c.name)}" required></label><label>Platform<input class="form-control" name="platform" value="${escapeCourseText(c.platform)}" required></label><label>Category<input class="form-control" name="category" value="${escapeCourseText(c.category)}" required></label><label>Total lessons<input class="form-control" name="total" type="number" min="${Math.max(1,c.completed,...sessions.map(s=>s.lessonNumber || 0))}" value="${c.total}" required></label><label>Status<select class="form-control" name="status">${['planned','active','paused','completed','archived'].map(s=>`<option ${s===c.status?'selected':''}>${s}</option>`).join('')}</select></label><p class="course-meta">${c.legacyCompleted} completed lessons carried over from your previous tracker. New completions are linked to study logs.</p><div class="course-actions-row"><button class="btn btn-primary">Save details</button><button type="button" class="btn btn-secondary" onclick="this.closest('dialog').close()">Close</button></div></form><h4>Study history</h4><div class="course-history">${sessions.map(s=>`<article><strong>${escapeCourseText(s.date)} · ${s.minutes} min</strong><p>${escapeCourseText(s.lesson || s.topic || 'Study')} · ${escapeCourseText(s.studyStatus || 'Study')}</p><p>${escapeCourseText(s.notes)}</p><button class="btn btn-secondary" onclick="editCourseStudy(${s.id})">Edit entry</button> <button class="btn btn-secondary" onclick="removeCourseStudy(${s.id},${id})">Delete study entry</button></article>`).join('') || '<p>No study sessions recorded.</p>'}</div>`;
  dialog.querySelector('form').onsubmit = e => {
    e.preventDefault();
    const values = new FormData(e.target);
    if (values.get('status') === 'completed' && c.completed < Number(values.get('total'))) { showToast('Complete the remaining lessons through study updates first.', 'error'); return; }
    c.name = values.get('name').trim(); c.platform = values.get('platform').trim(); c.category = values.get('category').trim(); c.total = Number(values.get('total')); c.status = values.get('status');
    updateCourseCompletion(id);
    saveToLocalStorage(); refreshCourseSelect(); renderAllViews(); dialog.close(); showToast('Course details updated.');
  };
  if (!dialog.open) dialog.showModal();
}
function removeCourseStudy(sessionId, courseId) { deleteStudySession(sessionId); openCourseDetails(courseId); renderAllViews(); }

// Install form controls synchronously, before the application's load handler runs.
document.getElementById('sess-course').addEventListener('change', selectStudyCourse);
document.getElementById('sess-lesson').closest('.form-group').insertAdjacentHTML('afterend', '<div class="form-group row-2"><label>Lesson number<input id="sess-lesson-number" class="form-control" type="number" min="1" step="1" placeholder="For completion tracking"></label><label>Study progress<select id="sess-study-status" class="form-control"><option value="in-progress">In progress</option><option value="completed">Lesson completed</option><option value="revision">Revision</option></select></label></div>');
document.querySelector('#add-course-form button').insertAdjacentHTML('beforebegin','<label class="form-group">Status<select id="add-course-status" class="form-control"><option value="active">Active</option><option value="planned">Planned</option><option value="paused">Paused</option></select></label>');
document.body.insertAdjacentHTML('beforeend','<dialog id="course-dialog" aria-label="Course details"></dialog>');
document.getElementById('log-session-form').insertAdjacentHTML('beforeend','<button id="cancel-study-edit" type="button" class="btn btn-secondary" hidden onclick="cancelStudyEdit(); this.form.reset()">Cancel editing</button>');
const originalRenderAllViews = renderAllViews;
renderAllViews = function() { refreshCourseSelect(); originalRenderAllViews(); };
