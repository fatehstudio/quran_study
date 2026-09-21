let journeyCourseId = null;
let journeyPage = 0;
let journeyLesson = null;
const JOURNEY_PAGE_SIZE = 12;

function courseJourney(course) {
  const sessions = store.sessions.filter(s => s.courseId === course.id);
  const completed = new Set(sessions.filter(s => s.studyStatus === 'completed').map(s => s.lessonNumber));
  const done = number => number <= course.legacyCompleted || completed.has(number);
  let next = 1;
  while (next <= course.total && done(next)) next++;
  return { sessions, done, next };
}
function chooseJourneyCourse(value) {
  journeyCourseId = Number(value);
  journeyLesson = null;
  const course = store.courses.find(c => c.id === journeyCourseId);
  journeyPage = course ? Math.floor((Math.min(courseJourney(course).next, course.total) - 1) / JOURNEY_PAGE_SIZE) : 0;
  renderProgressTab();
}
function changeJourneyPage(delta) {
  journeyPage += delta;
  journeyLesson = null;
  renderProgressTab();
}
function selectJourneyLesson(number) { journeyLesson = number; renderProgressTab(); }
function studyJourneyLesson() {
  const course = store.courses.find(c => c.id === journeyCourseId);
  if (!course) return;
  const number = journeyLesson;
  const data = courseJourney(course);
  continueCourse(course.id);
  document.getElementById('sess-lesson-number').value = number;
  document.getElementById('sess-lesson').value = data.sessions.filter(s => s.lessonNumber === number).at(-1)?.lesson || `Lesson ${number}`;
  document.getElementById('sess-study-status').value = data.done(number) ? 'revision' : 'in-progress';
}
function renderProgressTab() {
  prepareCourses();
  const select = document.getElementById('journey-course');
  const content = document.getElementById('journey-content');
  let course = store.courses.find(c => c.id === journeyCourseId);
  if (!course) {
    course = store.courses.find(c => c.status === 'active') || store.courses[0];
    journeyCourseId = course?.id ?? null;
    journeyPage = course ? Math.floor((Math.min(courseJourney(course).next, course.total) - 1) / JOURNEY_PAGE_SIZE) : 0;
    journeyLesson = null;
  }
  select.innerHTML = store.courses.map(c => `<option value="${c.id}">${escapeCourseText(c.name)}</option>`).join('');
  select.disabled = !course;
  if (!course) {
    content.innerHTML = '<div class="section-card journey-empty"><h3>Your journey starts here</h3><p>Add your first course to see its lesson path.</p><button class="btn btn-primary" onclick="document.querySelector(\'[data-tab=trackers]\').click()">Add a course</button></div>';
    return;
  }
  select.value = String(course.id);
  const { sessions, done, next } = courseJourney(course);
  const pages = Math.ceil(course.total / JOURNEY_PAGE_SIZE);
  journeyPage = Math.max(0, Math.min(journeyPage, pages - 1));
  const start = journeyPage * JOURNEY_PAGE_SIZE + 1;
  const end = Math.min(start + JOURNEY_PAGE_SIZE - 1, course.total);
  if (!journeyLesson || journeyLesson < start || journeyLesson > end) journeyLesson = next >= start && next <= end ? next : start;
  const nodes = Array.from({ length: end - start + 1 }, (_, i) => {
    const row = Math.floor(i / 3), col = i % 3;
    return { number: start + i, x: row % 2 ? 500 - col * 200 : 100 + col * 200, y: 65 + row * 175 };
  });
  const height = Math.ceil(nodes.length / 3) * 175;
  const paths = nodes.slice(1).map((node, i) => {
    const previous = nodes[i];
    const outside = previous.x === 500 ? 605 : -5;
    const d = previous.y === node.y ? `M ${previous.x} ${previous.y} H ${node.x}` : `M ${previous.x} ${previous.y} C ${outside} ${previous.y}, ${outside} ${node.y}, ${node.x} ${node.y}`;
    return `<path d="${d}" class="journey-road ${done(previous.number) && done(node.number) ? 'travelled' : ''}"/><path d="${d}" class="journey-road-center"/>`;
  }).join('');
  const lessonSessions = sessions.filter(s => s.lessonNumber === journeyLesson);
  const minutes = lessonSessions.reduce((sum,s) => sum + s.minutes, 0);
  const latest = [...lessonSessions].sort((a,b) => (b.date + b.time).localeCompare(a.date + a.time))[0];
  const selectedStatus = done(journeyLesson) ? 'Completed' : lessonSessions.length ? 'In progress' : journeyLesson === next ? 'Up next' : 'Upcoming';
  content.innerHTML = `<div class="journey-summary section-card"><div><span class="journey-eyebrow">${escapeCourseText(course.platform)} · ${escapeCourseText(course.status)}</span><h3>${escapeCourseText(course.name)}</h3><p>${course.completed} of ${course.total} lessons completed</p></div><strong>${Math.round(course.completed / course.total * 100)}<small>%</small></strong><progress aria-label="Course completion" value="${course.completed}" max="${course.total}"></progress></div>
    <div class="journey-layout"><div class="section-card journey-map-card"><div class="journey-map-heading"><h3>${next > course.total ? 'Every step counts. You did it!' : 'Your next chapter awaits'}</h3><p>Tap a stop to view or update a lesson.</p></div><div class="journey-legend"><span><i class="done"></i>Completed</span><span><i class="next"></i>Up next</span><span><i></i>Upcoming</span></div>
    <div class="journey-map" style="aspect-ratio:600/${height};--journey-rows:${Math.ceil(nodes.length / 3)}"><svg viewBox="0 0 600 ${height}" preserveAspectRatio="none" aria-hidden="true">${paths}</svg>${nodes.map(node => {
      const state = done(node.number) ? 'done' : node.number === next ? 'next' : 'upcoming';
      return `<div class="journey-stop ${state}" style="left:${node.x/6}%;top:${node.y/height*100}%"><button aria-label="Lesson ${node.number}, ${state === 'done' ? 'completed' : state === 'next' ? 'up next' : 'upcoming'}" aria-pressed="${node.number === journeyLesson}" onclick="selectJourneyLesson(${node.number})">${state === 'done' ? '✓' : node.number}</button><span>Lesson ${node.number}</span>${node.number === next ? '<small>UP NEXT</small>' : ''}</div>`;
    }).join('')}</div><div class="journey-pagination"><button class="btn btn-secondary" onclick="changeJourneyPage(-1)" ${journeyPage === 0 ? 'disabled' : ''}>← Previous</button><span>${start}–${end} of ${course.total}</span><button class="btn btn-secondary" onclick="changeJourneyPage(1)" ${journeyPage === pages-1 ? 'disabled' : ''}>Next →</button></div>${course.legacyCompleted ? '<p class="journey-note">Earlier progress is shown as the first ' + course.legacyCompleted + ' lessons completed. Individual lesson details were not recorded in the old tracker.</p>' : ''}</div>
    <aside class="section-card journey-detail" aria-live="polite"><span class="journey-eyebrow">${selectedStatus}</span><h3>Lesson ${journeyLesson}</h3><p class="journey-topic">${escapeCourseText(latest?.lesson || 'One more step in your learning journey.')}</p><div class="journey-detail-stats"><div><strong>${minutes}</strong><span>minutes studied</span></div><div><strong>${lessonSessions.length}</strong><span>study sessions</span></div></div><p>${latest ? 'Last studied: ' + escapeCourseText(latest.date) : done(journeyLesson) ? 'Completed in your earlier tracker.' : 'No study recorded for this lesson yet.'}</p>${latest?.notes ? `<blockquote>${escapeCourseText(latest.notes)}</blockquote>` : ''}<button class="btn btn-primary btn-full" onclick="studyJourneyLesson()">${done(journeyLesson) ? 'Revise this lesson' : 'Study this lesson'} →</button><p class="journey-note">Save your study time to update your calendar and streak. Choose “Lesson completed” when you finish.</p></aside></div>`;
}
