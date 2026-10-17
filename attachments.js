// Compressed pictures travel with notes in the existing backup and sync payload.
const pictureEditors = new Map();
function validPictures(items) {
  return (Array.isArray(items) ? items : []).filter(p => (typeof p?.data === 'string' && /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(p.data)) || (typeof p?.thumb === 'string' && /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(p.thumb) && !!p.driveId));
}
function pictureGallery(items) {
  return `<div class="note-pictures">${validPictures(items).map(p => `<button type="button" class="picture-preview" ${p.driveUrl ? `onclick="window.open('${escapeCourseText(p.driveUrl)}','_blank','noopener')" title="Open original picture in Google Drive"` : 'onclick="viewNotePicture(this)"'}><img src="${p.thumb || p.data}" alt="${escapeCourseText(p.name || 'Attached picture')}" loading="lazy"></button>${p.driveUrl ? '<span class="picture-help">Saved in Google Drive</span>' : ''}`).join('')}</div>`;
}
function viewNotePicture(button) {
  const dialog = document.createElement('dialog');
  dialog.className = 'picture-dialog';
  const close = document.createElement('button');
  close.type = 'button'; close.className = 'btn btn-secondary'; close.textContent = 'Close picture';
  close.onclick = () => dialog.close();
  dialog.append(close, button.querySelector('img').cloneNode());
  dialog.addEventListener('close', () => dialog.remove());
  document.body.append(dialog); dialog.showModal();
}
function setPictures(key, items = []) {
  const editor = pictureEditors.get(key);
  if (!editor) return;
  editor.items = [...validPictures(items)]; editor.version++;
  editor.draw();
}
function getPictures(key) { return [...(pictureEditors.get(key)?.items || [])]; }
function picturesReady(key) {
  if (pictureEditors.get(key)?.busy) { showToast('Please wait for the pictures to finish loading.'); return false; }
  // Leave room for other browser preferences and study records.
  const previous = key === 'session' ? store.sessions.find(s => s.id === editingStudyId)?.pictures
    : key === 'daily' ? store.dailyLogs[activeDailyDate]?.pictures
    : key === 'board' ? store.reflections?.pictures : store.reflections?.duaPictures;
  if (JSON.stringify(store).length - JSON.stringify(previous || []).length + JSON.stringify(getPictures(key)).length > 3800000) {
    showToast('Picture storage is full. Remove some saved pictures and try again.'); return false;
  }
  return true;
}
async function compressNotePicture(file) {
  if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)) throw Error('Choose a JPG, PNG, WebP, or GIF picture.');
  if (file.size > 20 * 1024 * 1024) throw Error('Choose a picture smaller than 20 MB.');
  const url = URL.createObjectURL(file);
  try {
    const img = new Image(); img.src = url; await img.decode();
    const scale = Math.min(1, 1400 / Math.max(img.width, img.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(img.width * scale)); canvas.height = Math.max(1, Math.round(img.height * scale));
    const ctx = canvas.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL('image/jpeg', .82);
    if (data.length > 600000) throw Error('This picture is too detailed. Choose a smaller picture.');
    const thumbCanvas = document.createElement('canvas');
    const thumbScale = Math.min(1, 320 / Math.max(img.width, img.height));
    thumbCanvas.width = Math.max(1, Math.round(img.width * thumbScale)); thumbCanvas.height = Math.max(1, Math.round(img.height * thumbScale));
    thumbCanvas.getContext('2d').drawImage(img, 0, 0, thumbCanvas.width, thumbCanvas.height);
    return {id: crypto.randomUUID(), name: file.name, mimeType: 'image/jpeg', data, thumb: thumbCanvas.toDataURL('image/jpeg', .62)};
  } finally { URL.revokeObjectURL(url); }
}
function mountPictureEditor(key, anchorId) {
  const anchor = document.getElementById(anchorId);
  if (!anchor) return;
  const host = document.createElement('div'); host.className = 'picture-editor';
  host.innerHTML = `<label class="form-label" for="${key}-pictures">Attach pictures</label><input id="${key}-pictures" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple><p class="picture-help">Up to 4 pictures. Pictures are compressed; save your notes to keep them.</p><p class="picture-status" role="status"></p><div class="picture-drafts"></div>`;
  anchor.after(host);
  const input = host.querySelector('input'), status = host.querySelector('.picture-status');
  const editor = {items: [], busy: false, version: 0, draw() {
    const grid = host.querySelector('.picture-drafts'); grid.innerHTML = pictureGallery(editor.items);
    grid.querySelectorAll('.picture-preview').forEach((button, index) => {
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'picture-remove'; remove.textContent = `Remove picture ${index + 1}`;
      remove.onclick = () => { editor.items.splice(index, 1); editor.draw(); input.dispatchEvent(new Event('input', {bubbles:true})); };
      button.after(remove);
    });
  }};
  pictureEditors.set(key, editor);
  input.addEventListener('change', async () => {
    const files = [...input.files], version = editor.version;
    editor.busy = true; input.disabled = true; status.textContent = 'Preparing pictures…';
    try {
      if (editor.items.length + files.length > 4) throw Error('You can attach up to 4 pictures per note.');
      const added = [];
      for (const file of files) added.push(await compressNotePicture(file));
      if (version === editor.version) { editor.items.push(...added); editor.draw(); status.textContent = 'Pictures ready. Save your notes to keep them.'; }
    } catch (error) { status.textContent = error.message || 'Could not read this picture.'; }
    finally { editor.busy = false; input.disabled = false; input.value = ''; }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  mountPictureEditor('session', 'sess-notes');
  mountPictureEditor('daily', 'daily-notes');
  mountPictureEditor('board', 'refl-lesson-text');
  mountPictureEditor('dua', 'refl-dua-translation');
  setPictures('board', store.reflections?.pictures);
  setPictures('dua', store.reflections?.duaPictures);
  document.getElementById('log-session-form').addEventListener('reset', () => setPictures('session'));
});
