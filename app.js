/**
 * Quran Learning Management System (QLMS) Dashboard - App Engine
 * Version: 2.0
 */

// ==========================================
// 114 SURAHS METADATA
// ==========================================
const SURAHS_DATA = [
  { id: 1, name: "Al-Fatihah", arabic: "الفاتحة", verses: 7, type: "Makki" },
  { id: 2, name: "Al-Baqarah", arabic: "البقرة", verses: 286, type: "Madani" },
  { id: 3, name: "Ali 'Imran", arabic: "آل عمران", verses: 200, type: "Madani" },
  { id: 4, name: "An-Nisa'", arabic: "النساء", verses: 176, type: "Madani" },
  { id: 5, name: "Al-Ma'idah", arabic: "المائدة", verses: 120, type: "Madani" },
  { id: 6, name: "Al-An'am", arabic: "الأنعام", verses: 165, type: "Makki" },
  { id: 7, name: "Al-A'raf", arabic: "الأعراف", verses: 206, type: "Makki" },
  { id: 8, name: "Al-Anfal", arabic: "الأنفال", verses: 75, type: "Madani" },
  { id: 9, name: "At-Tawbah", arabic: "التوبة", verses: 129, type: "Madani" },
  { id: 10, name: "Yunus", arabic: "يونس", verses: 109, type: "Makki" },
  { id: 11, name: "Hud", arabic: "هود", verses: 123, type: "Makki" },
  { id: 12, name: "Yusuf", arabic: "يوسف", verses: 111, type: "Makki" },
  { id: 13, name: "Ar-Ra'd", arabic: "الرعد", verses: 43, type: "Madani" },
  { id: 14, name: "Ibrahim", arabic: "إبراهيم", verses: 52, type: "Makki" },
  { id: 15, name: "Al-Hijr", arabic: "الحجر", verses: 99, type: "Makki" },
  { id: 16, name: "An-Nahl", arabic: "النحل", verses: 128, type: "Makki" },
  { id: 17, name: "Al-Isra'", arabic: "الإسراء", verses: 111, type: "Makki" },
  { id: 18, name: "Al-Kahf", arabic: "الكهف", verses: 110, type: "Makki" },
  { id: 19, name: "Maryam", arabic: "مريم", verses: 98, type: "Makki" },
  { id: 20, name: "Ta-Ha", arabic: "طه", verses: 135, type: "Makki" },
  { id: 21, name: "Al-Anbiya'", arabic: "الأنبياء", verses: 112, type: "Makki" },
  { id: 22, name: "Al-Hajj", arabic: "الحج", verses: 78, type: "Madani" },
  { id: 23, name: "Al-Mu'minun", arabic: "المؤمنون", verses: 118, type: "Makki" },
  { id: 24, name: "An-Nur", arabic: "النور", verses: 64, type: "Madani" },
  { id: 25, name: "Al-Furqan", arabic: "الفرقان", verses: 77, type: "Makki" },
  { id: 26, name: "Ash-Shu'ara'", arabic: "الشعراء", verses: 227, type: "Makki" },
  { id: 27, name: "An-Naml", arabic: "النمل", verses: 93, type: "Makki" },
  { id: 28, name: "Al-Qasas", arabic: "القصص", verses: 88, type: "Makki" },
  { id: 29, name: "Al-'Ankabut", arabic: "العنكبوت", verses: 69, type: "Makki" },
  { id: 30, name: "Ar-Rum", arabic: "الروم", verses: 60, type: "Makki" },
  { id: 31, name: "Luqman", arabic: "لقمان", verses: 34, type: "Makki" },
  { id: 32, name: "As-Sajdah", arabic: "السجدة", verses: 30, type: "Makki" },
  { id: 33, name: "Al-Ahzab", arabic: "الأحزاب", verses: 73, type: "Madani" },
  { id: 34, name: "Saba'", arabic: "سبأ", verses: 54, type: "Makki" },
  { id: 35, name: "Fatir", arabic: "فاطر", verses: 45, type: "Makki" },
  { id: 36, name: "Ya-Sin", arabic: "يس", verses: 83, type: "Makki" },
  { id: 37, name: "As-Saffat", arabic: "الصافات", verses: 182, type: "Makki" },
  { id: 38, name: "Sad", arabic: "ص", verses: 88, type: "Makki" },
  { id: 39, name: "Az-Zumar", arabic: "الزمر", verses: 75, type: "Makki" },
  { id: 40, name: "Ghafir", arabic: "غافر", verses: 85, type: "Makki" },
  { id: 41, name: "Fussilat", arabic: "فصلت", verses: 54, type: "Makki" },
  { id: 42, name: "Ash-Shura", arabic: "الشورى", verses: 53, type: "Makki" },
  { id: 43, name: "Az-Zukhruf", arabic: "الزخرف", verses: 89, type: "Makki" },
  { id: 44, name: "Ad-Dukhan", arabic: "الدخان", verses: 59, type: "Makki" },
  { id: 45, name: "Al-Jathiyah", arabic: "الجاثية", verses: 37, type: "Makki" },
  { id: 46, name: "Al-Ahqaf", arabic: "الأحقاف", verses: 35, type: "Makki" },
  { id: 47, name: "Muhammad", arabic: "محمد", verses: 38, type: "Madani" },
  { id: 48, name: "Al-Fath", arabic: "الفتح", verses: 29, type: "Madani" },
  { id: 49, name: "Al-Hujurat", arabic: "الحجرات", verses: 18, type: "Madani" },
  { id: 50, name: "Qaf", arabic: "ق", verses: 45, type: "Makki" },
  { id: 51, name: "Adh-Dhariyat", arabic: "الذاريات", verses: 60, type: "Makki" },
  { id: 52, name: "At-Tur", arabic: "الطور", verses: 49, type: "Makki" },
  { id: 53, name: "An-Najm", arabic: "النجم", verses: 62, type: "Makki" },
  { id: 54, name: "Al-Qamar", arabic: "القمر", verses: 55, type: "Makki" },
  { id: 55, name: "Ar-Rahman", arabic: "الرحمن", verses: 78, type: "Madani" },
  { id: 56, name: "Al-Waqi'ah", arabic: "الواقعة", verses: 96, type: "Makki" },
  { id: 57, name: "Al-Hadid", arabic: "الحديد", verses: 29, type: "Madani" },
  { id: 58, name: "Al-Mujadilah", arabic: "المجادلة", verses: 22, type: "Madani" },
  { id: 59, name: "Al-Hashr", arabic: "الحشر", verses: 24, type: "Madani" },
  { id: 60, name: "Al-Mumtahanah", arabic: "الممتحنة", verses: 13, type: "Madani" },
  { id: 61, name: "As-Saff", arabic: "الصف", verses: 14, type: "Madani" },
  { id: 62, name: "Al-Jumu'ah", arabic: "الجمعة", verses: 11, type: "Madani" },
  { id: 63, name: "Al-Munafiqun", arabic: "المنافقون", verses: 11, type: "Madani" },
  { id: 64, name: "At-Taghabun", arabic: "التغابن", verses: 18, type: "Madani" },
  { id: 65, name: "At-Talaq", arabic: "الطلاق", verses: 12, type: "Madani" },
  { id: 66, name: "At-Tahrim", arabic: "التحريم", verses: 12, type: "Madani" },
  { id: 67, name: "Al-Mulk", arabic: "الملك", verses: 30, type: "Makki" },
  { id: 68, name: "Al-Qalam", arabic: "القلم", verses: 52, type: "Makki" },
  { id: 69, name: "Al-Haqqah", arabic: "الحاقة", verses: 52, type: "Makki" },
  { id: 70, name: "Al-Ma'arij", arabic: "المعارج", verses: 44, type: "Makki" },
  { id: 71, name: "Nuh", arabic: "نوح", verses: 28, type: "Makki" },
  { id: 72, name: "Al-Jinn", arabic: "الجن", verses: 28, type: "Makki" },
  { id: 73, name: "Al-Muzzammil", arabic: "المزمل", verses: 20, type: "Makki" },
  { id: 74, name: "Al-Muddaththir", arabic: "المدثر", verses: 56, type: "Makki" },
  { id: 75, name: "Al-Qiyamah", arabic: "القيامة", verses: 40, type: "Makki" },
  { id: 76, name: "Al-Insan", arabic: "الإنسان", verses: 31, type: "Madani" },
  { id: 77, name: "Al-Mursalat", arabic: "المرسلات", verses: 50, type: "Makki" },
  { id: 78, name: "An-Naba'", arabic: "النبأ", verses: 40, type: "Makki" },
  { id: 79, name: "An-Nazi'at", arabic: "النازعات", verses: 46, type: "Makki" },
  { id: 80, name: "'Abasa", arabic: "عبس", verses: 42, type: "Makki" },
  { id: 81, name: "At-Takwir", arabic: "التكوير", verses: 29, type: "Makki" },
  { id: 82, name: "Al-Infitar", arabic: "الانفطار", verses: 19, type: "Makki" },
  { id: 83, name: "Al-Mutaffifin", arabic: "المطففين", verses: 36, type: "Makki" },
  { id: 84, name: "Al-Inshiqaq", arabic: "الانشقاق", verses: 25, type: "Makki" },
  { id: 85, name: "Al-Buruj", arabic: "البروج", verses: 22, type: "Makki" },
  { id: 86, name: "At-Tariq", arabic: "الطارق", verses: 17, type: "Makki" },
  { id: 87, name: "Al-A'la", arabic: "الأعلى", verses: 19, type: "Makki" },
  { id: 88, name: "Al-Ghashiyah", arabic: "الغاشية", verses: 26, type: "Makki" },
  { id: 89, name: "Al-Fajr", arabic: "الفجر", verses: 30, type: "Makki" },
  { id: 90, name: "Al-Balad", arabic: "البلد", verses: 20, type: "Makki" },
  { id: 91, name: "Ash-Shams", arabic: "الشمس", verses: 15, type: "Makki" },
  { id: 92, name: "Al-Layl", arabic: "الليل", verses: 21, type: "Makki" },
  { id: 93, name: "Ad-Duha", arabic: "الضحى", verses: 11, type: "Makki" },
  { id: 94, name: "Ash-Sharh", arabic: "الشرح", verses: 8, type: "Makki" },
  { id: 95, name: "At-Tin", arabic: "التين", verses: 8, type: "Makki" },
  { id: 96, name: "Al-'Alaq", arabic: "العلق", verses: 19, type: "Makki" },
  { id: 97, name: "Al-Qadr", arabic: "القدر", verses: 5, type: "Makki" },
  { id: 98, name: "Al-Bayyinah", arabic: "البينة", verses: 8, type: "Madani" },
  { id: 99, name: "Az-Zalzalah", arabic: "الزلزلة", verses: 8, type: "Madani" },
  { id: 100, name: "Al-'Adiyat", arabic: "العاديات", verses: 11, type: "Makki" },
  { id: 101, name: "Al-Qari'ah", arabic: "القارعة", verses: 11, type: "Makki" },
  { id: 102, name: "At-Takathur", arabic: "التكاثر", verses: 8, type: "Makki" },
  { id: 103, name: "Al-'Asr", arabic: "العصر", verses: 3, type: "Makki" },
  { id: 104, name: "Al-Humazah", arabic: "الهمزة", verses: 9, type: "Makki" },
  { id: 105, name: "Al-Fil", arabic: "الفيل", verses: 5, type: "Makki" },
  { id: 106, name: "Quraysh", arabic: "قريش", verses: 4, type: "Makki" },
  { id: 107, name: "Al-Ma'un", arabic: "الماعون", verses: 7, type: "Makki" },
  { id: 108, name: "Al-Kawthar", arabic: "الكوثر", verses: 3, type: "Makki" },
  { id: 109, name: "Al-Kafirun", arabic: "الكافرون", verses: 6, type: "Makki" },
  { id: 110, name: "An-Nasr", arabic: "النصر", verses: 3, type: "Madani" },
  { id: 111, name: "Al-Masad", arabic: "المسد", verses: 5, type: "Makki" },
  { id: 112, name: "Al-Ikhlas", arabic: "الإخلاص", verses: 4, type: "Makki" },
  { id: 113, name: "Al-Falaq", arabic: "الفلق", verses: 5, type: "Makki" },
  { id: 114, name: "An-Nas", arabic: "الناس", verses: 6, type: "Makki" }
];

// ==========================================
// 2. CENTRAL DATA STORE & SAMPLE DATA
// ==========================================
let store = {
  version: "2.0",
  goals: {
    daily: 60, // minutes
    weekly: 420,
    monthly: 1800,
    yearly: 21900 // 365 hours
  },
  theme: "light",
  fileLinked: false,
  googleSheetsUrl: "",
  
  // Trackers & Lists
  courses: [],
  surahs: [], // 114 entries
  vocab: [],
  hafazan: [],
  journal: [],
  library: [],
  readingQueue: [],
  
  // Daily and Detailed Session Logs
  dailyLogs: {}, // Keyed by YYYY-MM-DD
  sessions: [], // Array of individual session logs
  
  // User Profile
  profile: {
    name: "Hamba Allah",
    level: "Intermediate Learner",
    firstDay: "2026-06-01"
  },
  
  // Reflection Highlights
  reflections: {
    favoriteAyah: "إن مع العسر يسراً",
    favoriteAyahRef: "Ash-Sharh [94:6]",
    favoriteAyahTranslation: "Indeed, with hardship, there is ease.",
    currentFocus: "Mastering Bayyinah Dream Program Syntax (Nahu)",
    biggestLesson: "Consistency (istiqamah) in small amounts is better than large, interrupted efforts.",
    dua: "اللهم علّمني ما ينفعني وانفعني بما علّمتني وزدني علماً"
  }
};

// Generates Mock Data for beautiful layout on load
function generateMockData() {
  // Set up 114 Surahs
  store.surahs = SURAHS_DATA.map(s => ({
    ...s,
    tilawah: s.id >= 100, // Juz Amma surahs done
    tafsir: s.id === 1 || s.id >= 108,
    tadabbur: s.id === 1 || s.id === 112 || s.id === 113 || s.id === 114,
    hafazan: s.id >= 105,
    murajaah: s.id >= 105,
    notes: s.id === 1 ? "Surah Pembuka. Kunci utama Tadabbur Al-Fatihah." : "",
    completion: s.id >= 108 ? 100 : (s.id === 1 ? 80 : (s.id >= 100 ? 40 : 0))
  }));

  // Mock Courses
  store.courses = [
    { id: 1, name: "Dream Program (Arabic)", platform: "Bayyinah TV", category: "Arabic Language", total: 120, completed: 48, start: "2026-06-01", end: "", status: "active" },
    { id: 2, name: "Tafsir Juz 'Amma", platform: "Bayyinah TV", category: "Tafsir", total: 37, completed: 15, start: "2026-06-15", end: "", status: "active" },
    { id: 3, name: "Balaghah & Quranic Literary Gem", platform: "Masjid Class", category: "Ulum al-Quran", total: 10, completed: 10, start: "2026-05-01", end: "2026-05-30", status: "completed" },
    { id: 4, name: "Introduction to Quran History", platform: "YouTube / Al-Muqaddimah", category: "Quran History", total: 8, completed: 0, start: "", end: "", status: "queued" }
  ];

  // Mock Vocabulary
  store.vocab = [
    { id: 1, word: "كِتَاب", meaning: "Book / Writing", root: "ك - ت - ب", freq: 261, verse: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ", lesson: "Dream Unit 1", memorized: true, notes: "Very frequent noun" },
    { id: 2, word: "عِلْم", meaning: "Knowledge", root: "ع - ل - م", freq: 105, verse: "وَقُلْ رَبِّ زِدْنِي عِلْمًا", lesson: "Dream Unit 2", memorized: true, notes: "Nouns of meaning" },
    { id: 3, word: "صَبْر", meaning: "Patience / Constancy", root: "ص - ب - ر", freq: 103, verse: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", lesson: "Dream Unit 3", memorized: false, notes: "Key character trait mentioned in Quran" },
    { id: 4, word: "هُدًى", meaning: "Guidance", root: "ه - د - ى", freq: 79, verse: "هُدًى لِلْمُتَّقِينَ", lesson: "Tafsir Fatihah", memorized: true, notes: "Source of light" },
    { id: 5, word: "يَوْم", meaning: "Day", root: "ي - و - م", freq: 405, verse: "مَالِكِ يَوْمِ الدِّينِ", lesson: "Dream Unit 1", memorized: false, notes: "Time adverb" }
  ];

  // Mock Tadabbur Journal
  store.journal = [
    { id: 1, date: "2026-07-10", surah: "Al-Fatihah", ayah: "5", reflection: "We say 'You alone we worship, and You alone we ask for help'. Worship comes before seeking help. This teaches that effort and devotion must precede expecting ease and divine intervention. Seeking help itself is a form of worship.", lesson: "Put in the work first, then place full trust in Allah.", action: "Dedicate morning sessions purely to worship and focus before study.", dua: "اللهم أعني على ذكرك وشكرك وحسن عبادتك", tags: ["Ibadah", "Tawakkul"] },
    { id: 2, date: "2026-07-15", surah: "Ash-Sharh", ayah: "6", reflection: "The repetition of 'Indeed, with hardship there is ease'. Notice the word 'with' (ma'a) not 'after' (ba'da). This means ease is packaged inside the hardship itself. We must search for the opportunities and ease within the trials.", lesson: "No trial is empty of blessings.", action: "Write down 3 things to be grateful for when facing a difficult study topic.", dua: "رب اشرح لي صدري ويسر لي أمري", tags: ["Gratitude", "Hope"] }
  ];

  // Mock Library & Reading Queue
  store.library = [
    { id: 1, title: "Coherence in the Quran", category: "Books", source: "Mustansir Mir", link: "#", notes: "Excellent read on Surah structures" },
    { id: 2, title: "Bayyinah TV - Quranic Arabic", category: "Videos", source: "Nouman Ali Khan", link: "https://bayyinahtv.com", notes: "Primary resource" },
    { id: 3, title: "Tafsir Ibn Kathir (Juz 'Amma)", category: "Books", source: "Ibn Kathir", link: "#", notes: "Classical reference material" }
  ];
  store.readingQueue = [
    { id: 1, title: "Introduction to the Sciences of the Quran", category: "Books", priority: "High", estTime: "10 hours", status: "in-progress", source: "Yasir Qadhi", notes: "Broad survey" },
    { id: 2, title: "Way to the Quran", category: "Books", priority: "Medium", estTime: "4 hours", status: "queued", source: "Khurram Murad", notes: "Focus on spiritual study methods" }
  ];

  // Mock Hafazan Planner
  store.hafazan = [
    { id: 1, surah: "Al-Mulk", ayah: "1-5", memorized: "2026-07-05", lastRevision: "2026-07-16", schedule: "Weekly", fluency: 4, weakAreas: "Ayah 3 transition", notes: "Need to review tajwid rules on raw/mufakhkhamah" },
    { id: 2, surah: "An-Naba'", ayah: "1-10", memorized: "2026-07-12", lastRevision: "2026-07-17", schedule: "Daily", fluency: 5, weakAreas: "None", notes: "Solid memorization" }
  ];

  // Generate Daily Logs and detailed Study Sessions for the past 14 days
  const today = new Date();
  const categories = ["Tafsir", "Arabic Language", "Tilawah", "Tajwid", "Hafazan", "Tadabbur", "Ulum al-Quran", "Murajaah"];
  const platforms = ["Bayyinah TV", "Quran.com", "Books", "YouTube", "Masjid Class"];

  for (let i = 14; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    
    // Skip occasional day to make streaks realistic (let's say study 11 out of 15 days)
    if (i === 12 || i === 8 || i === 3) continue;

    // Study minutes: random between 30 and 120
    const mins = Math.floor(Math.random() * 90) + 30;
    
    // Create 1 or 2 sessions for that day
    const sessionCount = mins > 70 ? 2 : 1;
    let loggedMins = 0;
    
    for (let s = 0; s < sessionCount; s++) {
      const sMins = s === 0 && sessionCount === 2 ? Math.floor(mins / 2) : mins - loggedMins;
      loggedMins += sMins;

      const category = categories[Math.floor(Math.random() * (s === 0 ? 3 : categories.length))];
      const platform = platforms[Math.floor(Math.random() * platforms.length)];
      
      store.sessions.push({
        id: store.sessions.length + 1,
        date: dateStr,
        time: s === 0 ? "08:30" : "20:00",
        minutes: sMins,
        source: platform,
        category: category,
        course: category === "Arabic Language" ? "Dream Program (Arabic)" : (category === "Tafsir" ? "Tafsir Juz 'Amma" : ""),
        lesson: "Lesson " + (Math.floor(Math.random() * 10) + 1),
        surah: category === "Tafsir" || category === "Hafazan" ? "Al-Mulk" : "",
        topic: category === "Arabic Language" ? "Harf of Jarr" : "Overview of Verses",
        difficulty: ["Easy", "Medium", "Hard"][Math.floor(Math.random() * 3)],
        rating: Math.floor(Math.random() * 3) + 3, // 3 to 5
        notes: "Automated test sync study session."
      });
    }

    // Daily Log summary
    store.dailyLogs[dateStr] = {
      target: store.goals.daily,
      actual: mins,
      achievement: Math.round((mins / store.goals.daily) * 100),
      status: mins >= store.goals.daily ? "Green" : (mins >= store.goals.daily * 0.7 ? "Yellow" : "Orange"),
      mood: ["😊 Enthusiastic", "😐 Focused", "😴 Tired", "😇 Peaceful"][Math.floor(Math.random() * 4)],
      reflection: "Good progress studying " + dateStr + ". Focused mainly on " + categories[0] + ".",
      notes: "Daily review session.",
      actionItem: "Continue with next lesson tomorrow."
    };
  }
}

// ==========================================
// 3. STATS & STREAKS CALCULATIONS
// ==========================================
function calculateStats() {
  const activeLogs = Object.keys(store.dailyLogs).sort();
  if (activeLogs.length === 0) return { streak: 0, longest: 0, hours: 0, minAvg: 0, qcs: 0 };

  // Calculate Streaks
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  
  const todayStr = new Date().toISOString().split('T')[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];
  
  // Find all dates from first study day to today
  const firstDay = new Date(store.profile.firstDay);
  const curDay = new Date();
  const allDates = [];
  for (let d = new Date(firstDay); d <= curDay; d.setDate(d.getDate() + 1)) {
    allDates.push(d.toISOString().split('T')[0]);
  }

  allDates.forEach(date => {
    if (store.dailyLogs[date] && store.dailyLogs[date].actual > 0) {
      tempStreak++;
      if (tempStreak > longestStreak) longestStreak = tempStreak;
    } else {
      tempStreak = 0;
    }
  });

  // Current streak calculation (checking backwards from today/yesterday)
  let checkDate = new Date();
  while (true) {
    const dStr = checkDate.toISOString().split('T')[0];
    if (store.dailyLogs[dStr] && store.dailyLogs[dStr].actual > 0) {
      currentStreak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      // If today is not studied, check yesterday. If yesterday was studied, streak is still alive.
      if (dStr === todayStr) {
        checkDate.setDate(checkDate.getDate() - 1);
        continue;
      }
      break;
    }
  }

  // Study Days and Minutes
  const totalMinutes = store.sessions.reduce((acc, s) => acc + s.minutes, 0);
  const studyDays = Object.values(store.dailyLogs).filter(l => l.actual > 0).length;
  const avgMinutes = studyDays > 0 ? Math.round(totalMinutes / studyDays) : 0;
  
  // Quran Consistency Score (QCS)
  // 40% Consistency (Frequency of study in past 14 days)
  const last14Days = [];
  const startDay = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(startDay);
    d.setDate(startDay.getDate() - i);
    last14Days.push(d.toISOString().split('T')[0]);
  }
  const studyDaysLast14 = last14Days.filter(d => store.dailyLogs[d] && store.dailyLogs[d].actual > 0).length;
  const consistencyScore = (studyDaysLast14 / 14) * 100;

  // 30% Target Achievement
  const avgAchievement = Object.values(store.dailyLogs).reduce((acc, l) => acc + Math.min(l.achievement, 100), 0) / (Object.keys(store.dailyLogs).length || 1);
  
  // 20% Category Balance
  const catDistribution = getCategoryDistribution();
  const activeCats = Object.values(catDistribution).filter(c => c > 0).length;
  const balanceScore = Math.min((activeCats / 5) * 100, 100); // Want at least 5 different categories studied

  // 10% Murajaah (Revision frequency)
  const revisedSurahs = store.surahs.filter(s => s.murajaah).length;
  const revisionScore = Math.min((revisedSurahs / 10) * 100, 100); // target at least 10 surahs in murajaah

  const qcs = Math.round(
    (consistencyScore * 0.4) +
    (avgAchievement * 0.3) +
    (balanceScore * 0.2) +
    (revisionScore * 0.1)
  );

  return {
    currentStreak,
    longestStreak,
    studyDays,
    totalMinutes,
    avgMinutes,
    qcs: Math.max(0, Math.min(qcs, 100))
  };
}

function getCategoryDistribution() {
  const totals = {};
  store.sessions.forEach(s => {
    totals[s.category] = (totals[s.category] || 0) + s.minutes;
  });
  return totals;
}

// ==========================================
// 4. COMBINED LOCAL SYNC (IndexedDB + File System Access API)
// ==========================================
const DB_NAME = "QuranDashboardDB";
const STORE_NAME = "FileSystemHandles";

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e) => {
      e.target.result.createObjectStore(STORE_NAME);
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

async function saveFileHandle(handle) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(handle, "data_file_handle");
    request.onsuccess = () => resolve();
    request.onerror = (e) => reject(e.target.error);
  });
}

async function getSavedFileHandle() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get("data_file_handle");
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

async function removeFileHandle() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete("data_file_handle");
    request.onsuccess = () => resolve();
    request.onerror = (e) => reject(e.target.error);
  });
}

// Write current state to the linked file
async function writeToLinkedFile() {
  if (!store.fileLinked) return;
  try {
    const handle = await getSavedFileHandle();
    if (!handle) {
      store.fileLinked = false;
      updateSyncUI();
      return;
    }
    
    // Check permission
    const options = { mode: "readwrite" };
    if ((await handle.queryPermission(options)) !== "granted") {
      // Permission prompt needs a user gesture. We will notify the user they need to click sync.
      return;
    }
    
    const writable = await handle.createWritable();
    // Don't save fileLinked state in the file itself to avoid circular link status
    const dataToSave = { ...store, fileLinked: false };
    await writable.write(JSON.stringify(dataToSave, null, 2));
    await writable.close();
    console.log("Auto-save complete.");
  } catch (err) {
    console.error("Failed to write to linked file", err);
    // If the file handle is no longer valid, unlink
    store.fileLinked = false;
    updateSyncUI();
  }
}

// Read from the linked file and merge state
async function readFromLinkedFile(handle) {
  try {
    const file = await handle.getFile();
    const text = await file.text();
    if (text.trim() === "") return;
    
    const loadedData = JSON.parse(text);
    if (loadedData.version) {
      store = { ...store, ...loadedData, fileLinked: true };
      saveToLocalStorage();
      renderAllViews();
      showToast("🔄 Data synced from OneDrive file successfully.");
    }
  } catch (err) {
    console.error("Failed to read from linked file", err);
    showToast("⚠️ Could not read data file. Please verify OneDrive sync.", "error");
  }
}

// ==========================================
// 5. LOCAL STORAGE SYNC & GOOGLE SHEETS
// ==========================================
function saveToLocalStorage() {
  localStorage.setItem("quran_dashboard_store", JSON.stringify(store));
  writeToLinkedFile();
  if (store.googleSheetsUrl) {
    syncWithGoogleSheets('push');
  }
}

async function syncWithGoogleSheets(mode = 'push') {
  if (!store.googleSheetsUrl) return;
  const statusEl = document.getElementById("google-sync-status");
  
  if (statusEl) {
    statusEl.innerText = mode === 'pull' ? "🔄 Pulling data from Google Sheets..." : "🔄 Saving data to Google Sheets...";
    statusEl.style.color = "var(--accent)";
  }
  
  try {
    if (mode === 'pull') {
      const response = await fetch(store.googleSheetsUrl);
      if (!response.ok) throw new Error("HTTP error " + response.status);
      const text = await response.text();
      
      if (text.trim() === "" || text.trim() === "{}") {
        if (statusEl) {
          statusEl.innerText = "Connected. Cloud is empty. Pushing local progress...";
          statusEl.style.color = "var(--primary)";
        }
        await syncWithGoogleSheets('push');
        return;
      }
      
      const loadedData = JSON.parse(text);
      if (loadedData.version) {
        store = { ...store, ...loadedData };
        // Save locally without triggering a push to avoid recursion loops
        localStorage.setItem("quran_dashboard_store", JSON.stringify(store));
        renderAllViews();
        
        if (statusEl) {
          statusEl.innerText = "✓ Sync successful. Data loaded at " + new Date().toLocaleTimeString("ms-MY");
          statusEl.style.color = "var(--success)";
        }
      } else {
        throw new Error("Invalid backup format");
      }
    } else {
      // mode === 'push'
      // Send as text/plain to bypass CORS preflight check on Google Apps Script
      const response = await fetch(store.googleSheetsUrl, {
        method: "POST",
        body: JSON.stringify(store),
        headers: {
          "Content-Type": "text/plain"
        }
      });
      if (!response.ok) throw new Error("HTTP error " + response.status);
      
      if (statusEl) {
        statusEl.innerText = "✓ Changes auto-saved to Google Sheets at " + new Date().toLocaleTimeString("ms-MY");
        statusEl.style.color = "var(--success)";
      }
    }
  } catch (err) {
    console.error("Google Sheets sync failed", err);
    if (statusEl) {
      statusEl.innerText = "⚠️ Sync failed: " + err.message;
      statusEl.style.color = "var(--danger)";
    }
  }
}

async function testGoogleSync(mode) {
  const urlInput = document.getElementById("set-google-url");
  if (urlInput) {
    store.googleSheetsUrl = urlInput.value.trim();
    saveToLocalStorage();
  }
  await syncWithGoogleSheets(mode);
}

async function loadFromLocalStorage() {
  const local = localStorage.getItem("quran_dashboard_store");
  if (local) {
    try {
      store = JSON.parse(local);
    } catch (e) {
      console.error("Error parsing localstorage data, generating mock data instead", e);
      generateMockData();
    }
  } else {
    generateMockData();
    saveToLocalStorage();
  }

  // Check if we have a saved file handle from IndexedDB
  try {
    const handle = await getSavedFileHandle();
    if (handle) {
      // Request permission quietly or wait for interaction
      const perm = await handle.queryPermission({ mode: "readwrite" });
      if (perm === "granted") {
        store.fileLinked = true;
        await readFromLinkedFile(handle);
      } else {
        // Show status as linked but needing approval
        store.fileLinked = "needs-approval";
      }
    }
  } catch (err) {
    console.error("Failed to load saved file handle", err);
  }
}

// ==========================================
// 6. ROUTER & TAB SWITCHING
// ==========================================
function setupRouter() {
  const navItems = document.querySelectorAll(".nav-item");
  const views = document.querySelectorAll(".tab-view");

  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetViewId = item.getAttribute("data-tab");
      
      navItems.forEach(nav => nav.classList.remove("active"));
      views.forEach(view => view.classList.remove("active"));
      
      item.classList.add("active");
      const targetView = document.getElementById(targetViewId);
      if (targetView) targetView.classList.add("active");
      
      // Hook to load specific tab views
      if (targetViewId === "dashboard") {
        renderDashboardHome();
      } else if (targetViewId === "trackers") {
        renderTrackersTab();
      } else if (targetViewId === "logs") {
        renderLogsTab();
      } else if (targetViewId === "vocab") {
        renderVocabTab();
      } else if (targetViewId === "journal") {
        renderJournalTab();
      } else if (targetViewId === "reflections") {
        renderReflectionsTab();
      } else if (targetViewId === "settings") {
        renderSettingsTab();
      } else if (targetViewId === "resources") {
        renderResourcesTab();
      }
    });
  });
}

// ==========================================
// 7. VIEW RENDERERS
// ==========================================

// Global state for calendar navigation
let currentCalendarMonth = new Date().getMonth();
let currentCalendarYear = new Date().getFullYear();

function renderAllViews() {
  updateSidebarStats();
  const activeTab = document.querySelector(".nav-item.active");
  if (activeTab) {
    const tabId = activeTab.getAttribute("data-tab");
    if (tabId === "dashboard") renderDashboardHome();
    else if (tabId === "trackers") renderTrackersTab();
    else if (tabId === "logs") renderLogsTab();
    else if (tabId === "vocab") renderVocabTab();
    else if (tabId === "journal") renderJournalTab();
    else if (tabId === "reflections") renderReflectionsTab();
    else if (tabId === "settings") renderSettingsTab();
    else if (tabId === "resources") renderResourcesTab();
  }
}

function updateSidebarStats() {
  const stats = calculateStats();
  
  const streakValEl = document.getElementById("sidebar-streak-val");
  const qcsValEl = document.getElementById("sidebar-qcs-val");
  
  if (streakValEl) streakValEl.innerText = stats.currentStreak + " Days";
  if (qcsValEl) qcsValEl.innerText = stats.qcs + "%";
  
  // Update Sync Badge
  updateSyncUI();
}

function updateSyncUI() {
  const syncBadge = document.getElementById("sync-status-badge");
  if (!syncBadge) return;
  
  if (store.fileLinked === true) {
    syncBadge.classList.add("linked");
    syncBadge.innerHTML = `<span>🔄 OneDrive Linked</span>`;
  } else if (store.fileLinked === "needs-approval") {
    syncBadge.classList.remove("linked");
    syncBadge.innerHTML = `<span>⚠️ Re-link File</span>`;
  } else {
    syncBadge.classList.remove("linked");
    syncBadge.innerHTML = `<span>🔗 Link OneDrive</span>`;
  }
}

// Render Dashboard View
function renderDashboardHome() {
  const stats = calculateStats();
  
  // Today's circle progress
  const todayStr = new Date().toISOString().split('T')[0];
  const todayLog = store.dailyLogs[todayStr] || { target: store.goals.daily, actual: 0 };
  const percentVal = Math.min(Math.round((todayLog.actual / todayLog.target) * 100), 200);
  
  const circleEl = document.getElementById("today-circle-progress");
  const percentTextEl = document.getElementById("today-percent-text");
  const todayActualEl = document.getElementById("today-actual-mins");
  
  if (circleEl) {
    // Circumference of r=52 circle is 2 * pi * 52 = 326.7
    const circumference = 326.7;
    const offset = circumference - (Math.min(percentVal, 100) / 100) * circumference;
    circleEl.setAttribute("stroke-dasharray", circumference);
    circleEl.setAttribute("stroke-dashoffset", offset);
  }
  if (percentTextEl) percentTextEl.innerText = percentVal + "%";
  if (todayActualEl) todayActualEl.innerText = todayLog.actual + " / " + todayLog.target + " min";
  
  // Stat Box Grid
  const statsMapping = {
    "stat-streak-curr": stats.currentStreak + " Days",
    "stat-streak-longest": stats.longestStreak + " Days",
    "stat-hours-total": Math.round(stats.totalMinutes / 60) + "h " + (stats.totalMinutes % 60) + "m",
    "stat-study-days": stats.studyDays + " Days",
    "stat-vocab-count": store.vocab.length + " Words",
    "stat-completion-est": calculateEstimatedCompletion()
  };
  
  Object.keys(statsMapping).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = statsMapping[id];
  });
  
  // QCS meter
  const qcsValEl = document.getElementById("qcs-val-big");
  const qcsDescEl = document.getElementById("qcs-desc-lbl");
  const qcsBarEl = document.getElementById("qcs-bar-fill");
  
  if (qcsValEl) qcsValEl.innerText = stats.qcs;
  if (qcsBarEl) qcsBarEl.style.width = stats.qcs + "%";
  if (qcsDescEl) {
    let lvl = "Needs Improvement";
    if (stats.qcs >= 95) lvl = "Outstanding (Istiqamah)";
    else if (stats.qcs >= 85) lvl = "Excellent Progress";
    else if (stats.qcs >= 70) lvl = "Very Good Practice";
    else if (stats.qcs >= 50) lvl = "Good Consistency";
    qcsDescEl.innerText = lvl;
  }
  
  // Weekly Bar Chart
  renderWeeklyChart();
  
  // Monthly Heatmap Calendar
  renderHeatmapCalendar();
  
  // Category Distribution Progress Bar
  renderCategoryList();
}

function calculateEstimatedCompletion() {
  // Let's do a simple calculation: how many hours are left on the 365 hour yearly target?
  const totalMinutes = store.sessions.reduce((acc, s) => acc + s.minutes, 0);
  const totalHours = totalMinutes / 60;
  const yearlyTarget = store.goals.yearly / 60;
  
  if (totalHours >= yearlyTarget) return "Yearly Goal Met! 🎉";
  
  const remainingHours = yearlyTarget - totalHours;
  // Calculate average hours per week from past 14 days
  const past14Days = [];
  const startDay = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(startDay);
    d.setDate(startDay.getDate() - i);
    past14Days.push(d.toISOString().split('T')[0]);
  }
  const totalMinutes14 = store.sessions
    .filter(s => past14Days.includes(s.date))
    .reduce((acc, s) => acc + s.minutes, 0);
  
  const dailyAvgHours = (totalMinutes14 / 14) / 60;
  
  if (dailyAvgHours === 0) return "No active study rates";
  
  const remainingDays = Math.ceil(remainingHours / dailyAvgHours);
  const completionDate = new Date();
  completionDate.setDate(completionDate.getDate() + remainingDays);
  
  return completionDate.toLocaleDateString("ms-MY", { day: "numeric", month: "short", year: "numeric" });
}

function renderWeeklyChart() {
  const chartWrapper = document.getElementById("weekly-chart-wrapper");
  if (!chartWrapper) return;
  
  // Get start of current week (Sunday)
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 is Sunday
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - dayOfWeek);
  
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let maxVal = 60; // minimum scale
  
  const weekData = weekdays.map((name, index) => {
    const checkDate = new Date(startOfWeek);
    checkDate.setDate(startOfWeek.getDate() + index);
    const dateStr = checkDate.toISOString().split('T')[0];
    const log = store.dailyLogs[dateStr] || { target: store.goals.daily, actual: 0 };
    
    if (log.actual > maxVal) maxVal = log.actual;
    if (log.target > maxVal) maxVal = log.target;
    
    return {
      name,
      date: dateStr,
      target: log.target || store.goals.daily,
      actual: log.actual || 0,
      achievement: log.achievement || 0
    };
  });
  
  // Draw custom SVG
  const width = chartWrapper.clientWidth || 400;
  const height = 200;
  const paddingLeft = 35;
  const paddingRight = 10;
  const paddingTop = 20;
  const paddingBottom = 30;
  
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;
  
  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" class="weekly-bar-chart">`;
  
  // Draw Y-Axis lines and labels (0, target, max)
  const gridLines = [0, Math.round(maxVal / 2), Math.round(maxVal)];
  gridLines.forEach(val => {
    const y = height - paddingBottom - (val / maxVal) * chartHeight;
    svgContent += `
      <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="var(--border-color)" stroke-dasharray="4,4" />
      <text x="${paddingLeft - 8}" y="${y + 4}" fill="var(--text-light)" font-size="10" font-weight="600" text-anchor="end">${val}m</text>
    `;
  });
  
  // Draw columns for days
  const colWidth = chartWidth / 7;
  weekData.forEach((d, idx) => {
    const x = paddingLeft + idx * colWidth;
    
    // Bar dimensions
    const targetHeight = (d.target / maxVal) * chartHeight;
    const actualHeight = (d.actual / maxVal) * chartHeight;
    
    const targetY = height - paddingBottom - targetHeight;
    const actualY = height - paddingBottom - actualHeight;
    
    const barWidth = colWidth * 0.3;
    const space = colWidth * 0.1;
    
    // Status emoji / indicator
    let statusMarker = "";
    if (d.actual >= d.target && d.actual > 0) statusMarker = "🟢";
    else if (d.actual >= d.target * 0.7 && d.actual > 0) statusMarker = "🟡";
    else if (d.actual > 0) statusMarker = "🟠";
    else if (d.date <= new Date().toISOString().split('T')[0]) statusMarker = "🔴";
    
    svgContent += `
      <!-- Target Bar (Gray Outline/Pattern) -->
      <rect x="${x + space}" y="${targetY}" width="${barWidth}" height="${targetHeight}" fill="var(--bg-secondary)" stroke="var(--border-color)" rx="3" />
      
      <!-- Actual Bar (Emerald/Gold Gradient representation) -->
      <rect x="${x + space + barWidth + space}" y="${actualY}" width="${barWidth}" height="${actualHeight}" fill="${d.actual >= d.target ? "var(--primary)" : "var(--accent)"}" rx="3" />
      
      <!-- Label -->
      <text x="${x + colWidth / 2}" y="${height - 12}" class="weekly-bar-label">${d.name}</text>
      
      <!-- Status Badge inside chart -->
      <text x="${x + colWidth / 2}" y="${Math.min(targetY, actualY) - 6}" font-size="10" text-anchor="middle">${statusMarker}</text>
    `;
  });
  
  // Close SVG
  svgContent += `</svg>`;
  chartWrapper.innerHTML = svgContent;
}

function renderHeatmapCalendar() {
  const container = document.getElementById("calendar-grid-container");
  const monthNameEl = document.getElementById("calendar-month-name");
  
  if (!container || !monthNameEl) return;
  
  // Set month title
  const tempDate = new Date(currentCalendarYear, currentCalendarMonth, 1);
  monthNameEl.innerText = tempDate.toLocaleDateString("ms-MY", { month: "long", year: "numeric" });
  
  // Days in month
  const firstDayIndex = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay(); // Sunday=0
  const totalDays = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();
  
  container.innerHTML = "";
  
  // 1. Fill empty days before 1st of month
  for (let i = 0; i < firstDayIndex; i++) {
    container.innerHTML += `<div class="calendar-day-cell empty"></div>`;
  }
  
  // 2. Fill actual month days
  for (let day = 1; day <= totalDays; day++) {
    const dStr = `${currentCalendarYear}-${String(currentCalendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const log = store.dailyLogs[dStr] || { target: store.goals.daily, actual: 0 };
    
    let colorClass = "day-none";
    if (log.actual >= log.target * 1.5) colorClass = "day-star";
    else if (log.actual >= log.target) colorClass = "day-high";
    else if (log.actual >= log.target * 0.6) colorClass = "day-mid";
    else if (log.actual > 0) colorClass = "day-low";
    
    const dayCell = document.createElement("div");
    dayCell.className = `calendar-day-cell ${colorClass}`;
    dayCell.innerHTML = `
      <span class="day-cell-num">${day}</span>
      <span class="day-cell-min">${log.actual > 0 ? log.actual + "m" : ""}</span>
    `;
    
    // Clicking opens daily summary dialog
    dayCell.addEventListener("click", () => {
      openDailySummaryModal(dStr);
    });
    
    container.appendChild(dayCell);
  }
}

function changeCalendarMonth(offset) {
  currentCalendarMonth += offset;
  if (currentCalendarMonth > 11) {
    currentCalendarMonth = 0;
    currentCalendarYear++;
  } else if (currentCalendarMonth < 0) {
    currentCalendarMonth = 11;
    currentCalendarYear--;
  }
  renderHeatmapCalendar();
}

function renderCategoryList() {
  const container = document.getElementById("category-distribution-list");
  if (!container) return;
  
  const distribution = getCategoryDistribution();
  const totalMins = Object.values(distribution).reduce((a, b) => a + b, 0) || 1;
  
  container.innerHTML = "";
  
  const colors = {
    "Tafsir": "#0f766e",        // Emerald
    "Arabic Language": "#d97706", // Amber
    "Tilawah": "#16a34a",        // Green
    "Tajwid": "#0284c7",         // Blue
    "Hafazan": "#8b5cf6",        // Purple
    "Tadabbur": "#ec4899",       // Pink
    "Ulum al-Quran": "#f97316",  // Orange
    "Murajaah": "#3b82f6"        // Indigo
  };
  
  const fallbackColors = ["#ef4444", "#06b6d4", "#a855f7", "#eab308"];
  
  Object.keys(distribution).sort((a,b) => distribution[b] - distribution[a]).forEach((cat, idx) => {
    const mins = distribution[cat];
    const pct = Math.round((mins / totalMins) * 100);
    const color = colors[cat] || fallbackColors[idx % fallbackColors.length];
    
    container.innerHTML += `
      <div class="category-list-item">
        <div class="category-list-header">
          <div class="category-name-badge">
            <span class="category-dot" style="background-color: ${color}"></span>
            <span>${cat}</span>
          </div>
          <span>${mins} mins (${pct}%)</span>
        </div>
        <div class="category-bar-bg">
          <div class="category-bar-fill" style="width: ${pct}%; background-color: ${color}"></div>
        </div>
      </div>
    `;
  });
}

// Render Trackers Tab
function renderTrackersTab() {
  const coursesContainer = document.getElementById("courses-list-container");
  if (coursesContainer) {
    coursesContainer.innerHTML = "";
    
    store.courses.forEach(c => {
      const pct = Math.round((c.completed / (c.total || 1)) * 100);
      const card = document.createElement("div");
      card.className = "course-tracker-card";
      card.innerHTML = `
        <div class="course-header">
          <div class="course-title">
            <h4>${c.name}</h4>
            <span>${c.platform} • ${c.category}</span>
          </div>
          <span class="course-status-badge ${c.status}">${c.status}</span>
        </div>
        <div class="course-progress-container">
          <div class="course-progress-lbl">
            <span>Progress</span>
            <span>${c.completed}/${c.total} Lessons (${pct}%)</span>
          </div>
          <div class="course-progress-bar-bg">
            <div class="course-progress-bar-fill" style="width: ${pct}%"></div>
          </div>
        </div>
        <div class="course-actions-row">
          <span>Start: ${c.start || "-"}</span>
          ${c.status === "active" ? `<button class="course-increment-btn" onclick="incrementCourse(${c.id})">+</button>` : ""}
        </div>
      `;
      coursesContainer.appendChild(card);
    });
  }
  
  // Render Surah Grid Checklist
  renderSurahGrid();
}

function incrementCourse(courseId) {
  const course = store.courses.find(c => c.id === courseId);
  if (course && course.completed < course.total) {
    course.completed++;
    if (course.completed === course.total) {
      course.status = "completed";
      course.end = new Date().toISOString().split('T')[0];
      showToast(`🏆 Congratulations! You have completed course: ${course.name}!`);
    }
    saveToLocalStorage();
    renderTrackersTab();
  }
}

let surahFilter = "all";
let surahSearchQuery = "";

function renderSurahGrid() {
  const container = document.getElementById("surah-checklist-grid");
  if (!container) return;
  
  container.innerHTML = "";
  
  const filtered = store.surahs.filter(s => {
    // Search filter
    const matchesSearch = s.name.toLowerCase().includes(surahSearchQuery.toLowerCase()) || 
                          s.id.toString() === surahSearchQuery;
    
    // Dropdown filter
    if (surahFilter === "completed") return matchesSearch && s.completion === 100;
    if (surahFilter === "active") return matchesSearch && s.completion > 0 && s.completion < 100;
    if (surahFilter === "unstarted") return matchesSearch && s.completion === 0;
    
    return matchesSearch;
  });
  
  filtered.forEach(s => {
    const card = document.createElement("div");
    card.className = `surah-card-cell ${s.completion === 100 ? "completed" : ""}`;
    card.innerHTML = `
      <div class="surah-card-meta">
        <span class="surah-number">${s.id}</span>
        <span class="surah-arabic-name">${s.arabic}</span>
      </div>
      <div class="surah-title-info">
        <h4>${s.name}</h4>
        <span>${s.verses} Ayat • ${s.type}</span>
      </div>
      <div class="surah-mini-progress">
        <div class="surah-mini-progress-fill ${s.completion === 100 ? "done" : ""}" style="width: ${s.completion}%"></div>
      </div>
    `;
    
    // Clicking opens detailed surah study tracker modal
    card.addEventListener("click", () => {
      openSurahDetailModal(s.id);
    });
    
    container.appendChild(card);
  });
}

// Render Logs Tab
function renderLogsTab() {
  const tableBody = document.getElementById("sessions-table-body");
  if (!tableBody) return;
  
  tableBody.innerHTML = "";
  
  // Sort sessions: newest first
  const sortedSessions = [...store.sessions].sort((a,b) => new Date(b.date + "T" + b.time) - new Date(a.date + "T" + a.time));
  
  sortedSessions.forEach(s => {
    const tr = document.createElement("tr");
    tr.className = "log-item-row";
    tr.innerHTML = `
      <div class="log-item-meta">
        <div class="log-item-category-icon">
          ${getCategoryEmoji(s.category)}
        </div>
        <div class="log-item-details">
          <h4>${s.category}</h4>
          <span>${s.date} ${s.time} • Source: ${s.source}</span>
        </div>
      </div>
      <div class="log-item-stats">
        ${s.course ? `<span class="tag-badge" style="background-color: var(--accent-light); color: var(--accent); font-size:10px">${s.course}</span>` : ""}
        <span class="log-item-time">${s.minutes} min</span>
        <span class="log-item-rating">${"★".repeat(s.rating || 5)}</span>
        <button class="log-delete-btn" onclick="deleteStudySession(${s.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;
    tableBody.appendChild(tr);
  });
}

function getCategoryEmoji(category) {
  const emojis = {
    "Tafsir": "📖",
    "Tadabbur": "🌱",
    "Ulum al-Quran": "📚",
    "Arabic Language": "🇸🇦",
    "Tilawah": "🗣️",
    "Tajwid": "🎙️",
    "Hafazan": "🧠",
    "Murajaah": "🔄"
  };
  return emojis[category] || "🕌";
}

function deleteStudySession(sessionId) {
  if (confirm("Are you sure you want to delete this study session? All summaries will adjust automatically.")) {
    const session = store.sessions.find(s => s.id === sessionId);
    if (!session) return;
    
    // Filter session array
    store.sessions = store.sessions.filter(s => s.id !== sessionId);
    
    // Adjust daily summary minutes
    const dayStr = session.date;
    if (store.dailyLogs[dayStr]) {
      store.dailyLogs[dayStr].actual -= session.minutes;
      if (store.dailyLogs[dayStr].actual <= 0) {
        delete store.dailyLogs[dayStr];
      } else {
        const target = store.dailyLogs[dayStr].target || store.goals.daily;
        store.dailyLogs[dayStr].achievement = Math.round((store.dailyLogs[dayStr].actual / target) * 100);
        store.dailyLogs[dayStr].status = store.dailyLogs[dayStr].actual >= target ? "Green" : (store.dailyLogs[dayStr].actual >= target * 0.7 ? "Yellow" : "Orange");
      }
    }
    
    saveToLocalStorage();
    renderLogsTab();
    updateSidebarStats();
    showToast("❌ Session log deleted.");
  }
}

// Render Vocabulary Tab
let vocabFilter = "all";
let vocabSearchQuery = "";

function renderVocabTab() {
  const vocabBody = document.getElementById("vocab-table-body");
  if (!vocabBody) return;
  
  vocabBody.innerHTML = "";
  
  const filtered = store.vocab.filter(v => {
    const matchesSearch = v.word.includes(vocabSearchQuery) || 
                          v.meaning.toLowerCase().includes(vocabSearchQuery.toLowerCase()) || 
                          v.root.includes(vocabSearchQuery);
    
    if (vocabFilter === "memorized") return matchesSearch && v.memorized;
    if (vocabFilter === "unmemorized") return matchesSearch && !v.memorized;
    return matchesSearch;
  });
  
  filtered.forEach(v => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="vocab-arabic-col">${v.word}</td>
      <td><strong>${v.meaning}</strong></td>
      <td class="vocab-root-col">${v.root}</td>
      <td>${v.freq}</td>
      <td style="font-style: italic">${v.verse || "-"}</td>
      <td>
        <input type="checkbox" class="vocab-status-checkbox" ${v.memorized ? "checked" : ""} onclick="toggleVocabStatus(${v.id})">
      </td>
      <td>
        <button class="log-delete-btn" onclick="deleteVocabWord(${v.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </td>
    `;
    vocabBody.appendChild(tr);
  });
  
  // Flashcard updates
  renderFlashcardQuiz();
}

function toggleVocabStatus(id) {
  const item = store.vocab.find(v => v.id === id);
  if (item) {
    item.memorized = !item.memorized;
    saveToLocalStorage();
    showToast(item.memorized ? "🇸🇦 Word marked as memorized! Keep it up." : "Word marked for review.");
    renderVocabTab();
  }
}

function deleteVocabWord(id) {
  if (confirm("Delete this vocabulary word?")) {
    store.vocab = store.vocab.filter(v => v.id !== id);
    saveToLocalStorage();
    renderVocabTab();
    showToast("Word deleted.");
  }
}

// Flashcard Game Mechanics
let currentQuizCard = null;

function renderFlashcardQuiz() {
  const unmemorized = store.vocab.filter(v => !v.memorized);
  const quizPool = unmemorized.length > 0 ? unmemorized : store.vocab;
  
  const scoreTotalEl = document.getElementById("quiz-score-total");
  const scoreMemoEl = document.getElementById("quiz-score-memo");
  
  if (scoreTotalEl) scoreTotalEl.innerText = store.vocab.length;
  if (scoreMemoEl) scoreMemoEl.innerText = store.vocab.filter(v => v.memorized).length;
  
  if (quizPool.length === 0) {
    document.getElementById("flashcard-interactive-wrapper").innerHTML = `
      <div style="text-align: center; padding: 20px; color: var(--text-secondary)">
        <h3>🎉 All words memorized!</h3>
        <p style="margin-top: 8px; font-size:12px">Add new words in Vocabulary List to continue quizzes.</p>
      </div>
    `;
    return;
  }
  
  // Pick random word if we don't have current, or if current was deleted
  if (!currentQuizCard || !store.vocab.some(v => v.id === currentQuizCard.id)) {
    const randIdx = Math.floor(Math.random() * quizPool.length);
    currentQuizCard = quizPool[randIdx];
  }
  
  const cardBox = document.getElementById("quiz-card-box");
  const frontArabic = document.getElementById("quiz-front-arabic");
  const frontRoot = document.getElementById("quiz-front-root");
  const backMeaning = document.getElementById("quiz-back-meaning");
  const backVerse = document.getElementById("quiz-back-verse");
  
  if (cardBox) cardBox.classList.remove("flipped");
  if (frontArabic) frontArabic.innerText = currentQuizCard.word;
  if (frontRoot) frontRoot.innerText = "Root: " + currentQuizCard.root;
  if (backMeaning) backMeaning.innerText = currentQuizCard.meaning;
  if (backVerse) backVerse.innerText = currentQuizCard.verse ? `"${currentQuizCard.verse}"` : "";
}

function handleQuizAnswer(isCorrect) {
  if (!currentQuizCard) return;
  
  if (isCorrect) {
    currentQuizCard.memorized = true;
    showToast("Correct! Added to memorized vocabulary.");
  } else {
    showToast("Saved to review queue.");
  }
  
  saveToLocalStorage();
  currentQuizCard = null; // Forces pick next card
  renderVocabTab();
}

// Render Journal Tab
let journalSearchQuery = "";

function renderJournalTab() {
  const container = document.getElementById("journal-cards-grid");
  if (!container) return;
  
  container.innerHTML = "";
  
  const filtered = store.journal.filter(j => {
    return j.surah.toLowerCase().includes(journalSearchQuery.toLowerCase()) || 
           j.reflection.toLowerCase().includes(journalSearchQuery.toLowerCase()) || 
           j.tags.some(t => t.toLowerCase().includes(journalSearchQuery.toLowerCase()));
  });
  
  filtered.forEach(j => {
    const card = document.createElement("div");
    card.className = "journal-card";
    card.innerHTML = `
      <div class="journal-card-header">
        <span class="journal-surah-ref">${j.surah} • Ayah ${j.ayah}</span>
        <span class="journal-date">${j.date}</span>
      </div>
      <p class="journal-reflection">"${j.reflection}"</p>
      <div class="journal-lessons-section">
        <div class="lesson-row">
          <span class="lesson-lbl">Life Lesson:</span>
          <span>${j.lesson}</span>
        </div>
        ${j.action ? `
        <div class="lesson-row">
          <span class="lesson-lbl" style="color: var(--primary)">Action Item:</span>
          <span>${j.action}</span>
        </div>` : ""}
        ${j.dua ? `
        <div class="lesson-row">
          <span class="lesson-lbl" style="color: var(--info)">Dua:</span>
          <span style="font-family: sans-serif; font-weight: 500">${j.dua}</span>
        </div>` : ""}
      </div>
      <div class="journal-tags">
        ${j.tags.map(t => `<span class="tag-badge">#${t}</span>`).join("")}
      </div>
    `;
    container.appendChild(card);
  });
  
  // Preload UI editor for Ulum al-Quran
  renderUlumSection();
  
  // Render Hafazan schedule list
  renderHafazanList();
}

function renderUlumSection() {
  // Handle editor values in store
  const textarea = document.getElementById("ulum-notes-textarea");
  if (textarea && !textarea.dataset.hooked) {
    textarea.value = store.ulumNotes || `# Ulum al-Quran Research Notes

Write down summaries about historical compilations, Makki & Madani contexts, Balaghah (eloquence), and Asbab al-Nuzul here.

Example:
- **Makki Surahs**: Reveal theological cores, patience, character building.
- **Madani Surahs**: Lay legal frameworks, community setup, social contracts.`;
    
    textarea.addEventListener("input", (e) => {
      store.ulumNotes = e.target.value;
      saveToLocalStorage();
    });
    textarea.dataset.hooked = "true";
  }
}

function renderHafazanList() {
  const list = document.getElementById("hafazan-plan-list");
  if (!list) return;
  
  list.innerHTML = "";
  
  store.hafazan.forEach(h => {
    const item = document.createElement("div");
    item.className = "log-item-row";
    item.style.marginBottom = "8px";
    item.innerHTML = `
      <div class="log-item-meta">
        <div class="log-item-category-icon" style="background-color: var(--accent-light); color: var(--accent)">🧠</div>
        <div class="log-item-details">
          <h4>${h.surah} [Ayah ${h.ayah}]</h4>
          <span>Schedule: ${h.schedule} • Memorized: ${h.memorized}</span>
        </div>
      </div>
      <div class="log-item-stats">
        <span class="tag-badge" style="background-color: var(--primary-light); color: var(--primary)">Fluency: ${h.fluency}/5</span>
        <span style="font-size: 11px; color: var(--text-light)">Rev: ${h.lastRevision}</span>
        <button class="log-delete-btn" onclick="deleteHafazanPlanner(${h.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;
    list.appendChild(item);
  });
}

function deleteHafazanPlanner(id) {
  if (confirm("Delete this memorization revision entry?")) {
    store.hafazan = store.hafazan.filter(h => h.id !== id);
    saveToLocalStorage();
    renderHafazanList();
    showToast("Entry removed.");
  }
}

// Render Reflections Tab
function renderReflectionsTab() {
  const fields = {
    "refl-ayah-arabic": store.reflections.favoriteAyah,
    "refl-ayah-ref": store.reflections.favoriteAyahRef,
    "refl-ayah-trans": store.reflections.favoriteAyahTranslation,
    "refl-focus-text": store.reflections.currentFocus,
    "refl-lesson-text": store.reflections.biggestLesson,
    "refl-dua-arabic": store.reflections.dua
  };
  
  Object.keys(fields).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = fields[id];
  });
  
  // Setup timeline
  renderJourneyTimeline();
}

function renderJourneyTimeline() {
  const container = document.getElementById("journey-timeline-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  // Calculate milestones dynamically
  const stats = calculateStats();
  const totalHours = Math.round(stats.totalMinutes / 60);
  
  const milestones = [
    { label: "Quran Journey Started", date: store.profile.firstDay, completed: true },
    { label: "10 Hours of Quran Study", date: totalHours >= 10 ? "Achieved" : "Locked", completed: totalHours >= 10 },
    { label: "Juz 'Amma Tracker Completed", date: "Locked", completed: false },
    { label: "50 Hours of Study", date: totalHours >= 50 ? "Achieved" : "Locked", completed: totalHours >= 50 },
    { label: "100 Vocabulary Words Learned", date: store.vocab.filter(v => v.memorized).length >= 100 ? "Achieved" : "Locked", completed: store.vocab.filter(v => v.memorized).length >= 100 }
  ];
  
  milestones.forEach(m => {
    container.innerHTML += `
      <div class="timeline-node">
        <div class="timeline-dot ${m.completed ? "completed" : ""}"></div>
        <div class="timeline-content">
          <h4>${m.label}</h4>
          <span>Status: ${m.date}</span>
        </div>
      </div>
    `;
  });
}

// Render Resources Tab
function renderResourcesTab() {
  // Reading queue
  const queueList = document.getElementById("reading-queue-list");
  if (queueList) {
    queueList.innerHTML = "";
    store.readingQueue.forEach(r => {
      const card = document.createElement("div");
      card.className = "log-item-row";
      card.style.marginBottom = "8px";
      card.innerHTML = `
        <div class="log-item-meta">
          <div class="log-item-category-icon" style="background-color: var(--primary-light); color: var(--primary)">📖</div>
          <div class="log-item-details">
            <h4>${r.title}</h4>
            <span>Author: ${r.source} • Priority: ${r.priority}</span>
          </div>
        </div>
        <div class="log-item-stats">
          <span class="tag-badge" style="background-color: var(--accent-light); color: var(--accent)">${r.status}</span>
          <span>Est: ${r.estTime}</span>
          <button class="log-delete-btn" onclick="deleteReadingQueue(${r.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      `;
      queueList.appendChild(card);
    });
  }
  
  // Library list
  const libList = document.getElementById("library-list");
  if (libList) {
    libList.innerHTML = "";
    store.library.forEach(l => {
      const card = document.createElement("div");
      card.className = "log-item-row";
      card.style.marginBottom = "8px";
      card.innerHTML = `
        <div class="log-item-meta">
          <div class="log-item-category-icon" style="background-color: var(--accent-light); color: var(--accent)">📚</div>
          <div class="log-item-details">
            <h4>${l.title}</h4>
            <span>By: ${l.source} • Type: ${l.category}</span>
          </div>
        </div>
        <div class="log-item-stats">
          <a href="${l.link}" class="tag-badge" target="_blank" style="text-decoration:none; background-color: var(--primary-light); color: var(--primary)">Open</a>
          <button class="log-delete-btn" onclick="deleteLibrary(${l.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      `;
      libList.appendChild(card);
    });
  }
}

function deleteReadingQueue(id) {
  if (confirm("Delete from reading queue?")) {
    store.readingQueue = store.readingQueue.filter(r => r.id !== id);
    saveToLocalStorage();
    renderResourcesTab();
  }
}

function deleteLibrary(id) {
  if (confirm("Delete from library collections?")) {
    store.library = store.library.filter(l => l.id !== id);
    saveToLocalStorage();
    renderResourcesTab();
  }
}

// Render Settings Tab
function renderSettingsTab() {
  const inputs = {
    "set-goal-daily": store.goals.daily,
    "set-goal-weekly": store.goals.weekly,
    "set-goal-monthly": store.goals.monthly,
    "set-goal-yearly": store.goals.yearly / 60,
    "set-profile-name": store.profile.name,
    "set-profile-level": store.profile.level,
    "set-profile-start": store.profile.firstDay,
    "set-google-url": store.googleSheetsUrl || ""
  };
  
  Object.keys(inputs).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = inputs[id];
  });
  
  const statusEl = document.getElementById("google-sync-status");
  if (statusEl) {
    if (store.googleSheetsUrl) {
      statusEl.innerText = "✓ Active connection. Data will auto-save.";
      statusEl.style.color = "var(--success)";
    } else {
      statusEl.innerText = "Not connected. Enter Web App URL to enable multi-device auto-sync.";
      statusEl.style.color = "var(--text-light)";
    }
  }
}

function saveSettings() {
  store.goals.daily = parseInt(document.getElementById("set-goal-daily").value) || 60;
  store.goals.weekly = parseInt(document.getElementById("set-goal-weekly").value) || 420;
  store.goals.monthly = parseInt(document.getElementById("set-goal-monthly").value) || 1800;
  store.goals.yearly = (parseInt(document.getElementById("set-goal-yearly").value) || 365) * 60;
  
  store.profile.name = document.getElementById("set-profile-name").value || "Hamba Allah";
  store.profile.level = document.getElementById("set-profile-level").value || "Learner";
  store.profile.firstDay = document.getElementById("set-profile-start").value || "2026-06-01";
  
  const googleInput = document.getElementById("set-google-url");
  if (googleInput) {
    store.googleSheetsUrl = googleInput.value.trim();
  }
  
  // Set custom title text
  const uNameEl = document.getElementById("sidebar-username");
  const uLvlEl = document.getElementById("sidebar-userlevel");
  if (uNameEl) uNameEl.innerText = store.profile.name;
  if (uLvlEl) uLvlEl.innerText = store.profile.level;
  
  saveToLocalStorage();
  showToast("⚙️ Settings saved successfully!");
  renderAllViews();
}

// ==========================================
// 8. LOGGING EVENT HANDLERS
// ==========================================
function setupFormListeners() {
  // Hook session details form
  const sessForm = document.getElementById("log-session-form");
  if (sessForm) {
    sessForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const category = document.getElementById("sess-category").value;
      const mins = parseInt(document.getElementById("sess-minutes").value) || 30;
      const dateStr = document.getElementById("sess-date").value || new Date().toISOString().split('T')[0];
      
      const newSession = {
        id: store.sessions.length + 1,
        date: dateStr,
        time: document.getElementById("sess-time").value || "12:00",
        minutes: mins,
        source: document.getElementById("sess-source").value || "Bayyinah TV",
        category: category,
        course: document.getElementById("sess-course").value,
        lesson: document.getElementById("sess-lesson").value,
        surah: document.getElementById("sess-surah").value,
        topic: document.getElementById("sess-topic").value,
        difficulty: document.getElementById("sess-difficulty").value,
        rating: parseInt(document.getElementById("sess-rating").value) || 5,
        notes: document.getElementById("sess-notes").value
      };
      
      store.sessions.push(newSession);
      
      // Update Daily Log
      if (!store.dailyLogs[dateStr]) {
        store.dailyLogs[dateStr] = {
          target: store.goals.daily,
          actual: 0,
          achievement: 0,
          status: "Orange",
          mood: "😐 Focused",
          reflection: "Logged study session.",
          notes: "Auto aggregated log.",
          actionItem: ""
        };
      }
      
      const log = store.dailyLogs[dateStr];
      log.actual += mins;
      log.achievement = Math.round((log.actual / log.target) * 100);
      log.status = log.actual >= log.target ? "Green" : (log.actual >= log.target * 0.7 ? "Yellow" : "Orange");
      
      // Reset form
      sessForm.reset();
      
      // Keep today default dates
      document.getElementById("sess-date").value = new Date().toISOString().split('T')[0];
      document.getElementById("sess-time").value = new Date().toLocaleTimeString("ms-MY", {hour: "2-digit", minute:"2-digit"});
      
      saveToLocalStorage();
      renderAllViews();
      showToast("📝 Study Session logged successfully!");
    });
  }
  
  // Hook Course Tracker Form
  const courseForm = document.getElementById("add-course-form");
  if (courseForm) {
    courseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const newCourse = {
        id: store.courses.length + 1,
        name: document.getElementById("add-course-name").value,
        platform: document.getElementById("add-course-platform").value,
        category: document.getElementById("add-course-category").value,
        total: parseInt(document.getElementById("add-course-total").value) || 10,
        completed: 0,
        start: new Date().toISOString().split('T')[0],
        end: "",
        status: "active"
      };
      
      store.courses.push(newCourse);
      courseForm.reset();
      
      saveToLocalStorage();
      renderTrackersTab();
      showToast("📚 New course added to trackers.");
    });
  }
  
  // Hook Vocabulary Form
  const vocabForm = document.getElementById("add-vocab-form");
  if (vocabForm) {
    vocabForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const newVocab = {
        id: store.vocab.length + 1,
        word: document.getElementById("add-vocab-word").value,
        meaning: document.getElementById("add-vocab-meaning").value,
        root: document.getElementById("add-vocab-root").value,
        freq: parseInt(document.getElementById("add-vocab-freq").value) || 1,
        verse: document.getElementById("add-vocab-verse").value,
        lesson: document.getElementById("add-vocab-lesson").value,
        memorized: false,
        notes: ""
      };
      
      store.vocab.push(newVocab);
      vocabForm.reset();
      
      saveToLocalStorage();
      renderVocabTab();
      showToast("🇸🇦 Vocabulary word added.");
    });
  }
  
  // Hook Journal Form
  const journalForm = document.getElementById("add-journal-form");
  if (journalForm) {
    journalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const newJournal = {
        id: store.journal.length + 1,
        date: new Date().toISOString().split('T')[0],
        surah: document.getElementById("add-j-surah").value,
        ayah: document.getElementById("add-j-ayah").value,
        reflection: document.getElementById("add-j-reflection").value,
        lesson: document.getElementById("add-j-lesson").value,
        action: document.getElementById("add-j-action").value,
        dua: document.getElementById("add-j-dua").value,
        tags: document.getElementById("add-j-tags").value.split(",").map(t => t.trim()).filter(t => t.length > 0)
      };
      
      store.journal.push(newJournal);
      journalForm.reset();
      
      saveToLocalStorage();
      renderJournalTab();
      showToast("🌱 Reflections saved in Tadabbur Journal.");
    });
  }
  
  // Reading Queue Form
  const rqForm = document.getElementById("add-rq-form");
  if (rqForm) {
    rqForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newR = {
        id: store.readingQueue.length + 1,
        title: document.getElementById("add-rq-title").value,
        source: document.getElementById("add-rq-author").value,
        priority: document.getElementById("add-rq-priority").value,
        estTime: document.getElementById("add-rq-time").value,
        status: "queued",
        notes: ""
      };
      store.readingQueue.push(newR);
      rqForm.reset();
      saveToLocalStorage();
      renderResourcesTab();
      showToast("Added to reading queue.");
    });
  }
  
  // Library Form
  const libForm = document.getElementById("add-lib-form");
  if (libForm) {
    libForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newL = {
        id: store.library.length + 1,
        title: document.getElementById("add-lib-title").value,
        source: document.getElementById("add-lib-source").value,
        category: document.getElementById("add-lib-type").value,
        link: document.getElementById("add-lib-link").value || "#",
        notes: ""
      };
      store.library.push(newL);
      libForm.reset();
      saveToLocalStorage();
      renderResourcesTab();
      showToast("Added to library.");
    });
  }
  
  // Hafazan Planner Form
  const hafForm = document.getElementById("add-hafazan-form");
  if (hafForm) {
    hafForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newH = {
        id: store.hafazan.length + 1,
        surah: document.getElementById("add-haf-surah").value,
        ayah: document.getElementById("add-haf-ayah").value,
        memorized: new Date().toISOString().split('T')[0],
        lastRevision: new Date().toISOString().split('T')[0],
        schedule: document.getElementById("add-haf-sched").value,
        fluency: parseInt(document.getElementById("add-haf-fluency").value) || 5,
        weakAreas: "",
        notes: ""
      };
      store.hafazan.push(newH);
      hafForm.reset();
      saveToLocalStorage();
      renderJournalTab();
      showToast("Hafazan entry created!");
    });
  }
}

// ==========================================
// 9. MODALS & SUB-PANEL CONTROLS
// ==========================================

// Surah details modal
let activeSurahId = null;

function openSurahDetailModal(surahId) {
  const s = store.surahs.find(item => item.id === surahId);
  if (!s) return;
  
  activeSurahId = surahId;
  
  document.getElementById("modal-surah-title").innerText = `${s.id}. ${s.name} (${s.arabic})`;
  document.getElementById("modal-surah-meta").innerText = `${s.verses} Ayat • ${s.type}`;
  
  // Checkbox bindings
  const boxes = {
    "surah-chk-tilawah": s.tilawah,
    "surah-chk-tafsir": s.tafsir,
    "surah-chk-tadabbur": s.tadabbur,
    "surah-chk-hafazan": s.hafazan,
    "surah-chk-murajaah": s.murajaah
  };
  
  Object.keys(boxes).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = boxes[id];
  });
  
  const notesEl = document.getElementById("surah-modal-notes");
  if (notesEl) notesEl.value = s.notes || "";
  
  const modal = document.getElementById("surah-detail-modal");
  if (modal) modal.classList.add("active");
}

function closeSurahDetailModal() {
  const modal = document.getElementById("surah-detail-modal");
  if (modal) modal.classList.remove("active");
  activeSurahId = null;
}

function saveSurahModalDetails() {
  if (!activeSurahId) return;
  const s = store.surahs.find(item => item.id === activeSurahId);
  if (s) {
    s.tilawah = document.getElementById("surah-chk-tilawah").checked;
    s.tafsir = document.getElementById("surah-chk-tafsir").checked;
    s.tadabbur = document.getElementById("surah-chk-tadabbur").checked;
    s.hafazan = document.getElementById("surah-chk-hafazan").checked;
    s.murajaah = document.getElementById("surah-chk-murajaah").checked;
    s.notes = document.getElementById("surah-modal-notes").value;
    
    // Recalculate completion pct
    let points = 0;
    if (s.tilawah) points += 20;
    if (s.tafsir) points += 20;
    if (s.tadabbur) points += 20;
    if (s.hafazan) points += 20;
    if (s.murajaah) points += 20;
    s.completion = points;
    
    saveToLocalStorage();
    renderTrackersTab();
    closeSurahDetailModal();
    showToast(`📖 Progress updated for Surah ${s.name}.`);
  }
}

// Daily details modal
let activeDailyDate = null;

function openDailySummaryModal(dateStr) {
  activeDailyDate = dateStr;
  
  const log = store.dailyLogs[dateStr] || { target: store.goals.daily, actual: 0, mood: "😐 Focused", reflection: "", notes: "", actionItem: "" };
  
  document.getElementById("modal-daily-date").innerText = new Date(dateStr).toLocaleDateString("ms-MY", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  document.getElementById("modal-daily-stats").innerText = `Total Study: ${log.actual} mins / Target: ${log.target} mins (${Math.round(log.actual / log.target * 100)}%)`;
  
  // Show detailed session list for this day
  const sessionsContainer = document.getElementById("modal-daily-sessions-list");
  sessionsContainer.innerHTML = "";
  const daySessions = store.sessions.filter(s => s.date === dateStr);
  
  if (daySessions.length === 0) {
    sessionsContainer.innerHTML = `<li style="font-size:12px; color:var(--text-light); list-style:none">No study sessions recorded for this day.</li>`;
  } else {
    daySessions.forEach(s => {
      sessionsContainer.innerHTML += `
        <li style="font-size:12px; margin-bottom: 8px; list-style:circle; margin-left: 16px">
          <strong>${s.time} • ${s.category} (${s.minutes}m)</strong> - ${s.source}: ${s.topic || "Self study"}
        </li>
      `;
    });
  }
  
  document.getElementById("daily-mood").value = log.mood;
  document.getElementById("daily-reflection").value = log.reflection || "";
  document.getElementById("daily-notes").value = log.notes || "";
  document.getElementById("daily-action").value = log.actionItem || "";
  
  const modal = document.getElementById("daily-summary-modal");
  if (modal) modal.classList.add("active");
}

function closeDailySummaryModal() {
  const modal = document.getElementById("daily-summary-modal");
  if (modal) modal.classList.remove("active");
  activeDailyDate = null;
}

function saveDailySummaryDetails() {
  if (!activeDailyDate) return;
  
  if (!store.dailyLogs[activeDailyDate]) {
    store.dailyLogs[activeDailyDate] = {
      target: store.goals.daily,
      actual: 0,
      achievement: 0,
      status: "Orange"
    };
  }
  
  const log = store.dailyLogs[activeDailyDate];
  log.mood = document.getElementById("daily-mood").value;
  log.reflection = document.getElementById("daily-reflection").value;
  log.notes = document.getElementById("daily-notes").value;
  log.actionItem = document.getElementById("daily-action").value;
  
  saveToLocalStorage();
  renderDashboardHome();
  closeDailySummaryModal();
  showToast("📝 Daily summary reflections updated.");
}

// Milestone Badges modal
function openBadgesModal() {
  const modal = document.getElementById("badges-modal");
  if (!modal) return;
  
  const stats = calculateStats();
  const totalHours = Math.round(stats.totalMinutes / 60);
  const totalSessions = store.sessions.length;
  const vocabCount = store.vocab.filter(v => v.memorized).length;
  
  const badgesList = [
    { id: "b1", emoji: "🏅", title: "Istiqamah Starter", desc: "Log your first study session", cond: totalSessions >= 1 },
    { id: "b2", emoji: "🔥", title: "3-Day Streak", desc: "Maintain a study streak of 3 days", cond: stats.longestStreak >= 3 },
    { id: "b3", emoji: "👑", title: "7-Day Streak", desc: "Maintain a study streak of 7 days", cond: stats.longestStreak >= 7 },
    { id: "b4", emoji: "⏳", title: "10 Hours Study", desc: "Reach 10 hours of study time", cond: totalHours >= 10 },
    { id: "b5", emoji: "🚀", title: "50 Hours Study", desc: "Reach 50 hours of study time", cond: totalHours >= 50 },
    { id: "b6", emoji: "🇸🇦", title: "Arabic Beginner", desc: "Memorize 10 vocabulary words", cond: vocabCount >= 10 },
    { id: "b7", emoji: "🧠", title: "Hafazan Pioneer", desc: "Add a memorized surah", cond: store.hafazan.length >= 1 },
    { id: "b8", emoji: "✍️", title: "Journal Writer", desc: "Write 2 Tadabbur reflections", cond: store.journal.length >= 2 }
  ];
  
  const grid = document.getElementById("badges-modal-grid");
  if (grid) {
    grid.innerHTML = "";
    badgesList.forEach(b => {
      grid.innerHTML += `
        <div class="badge-item-card ${b.cond ? "unlocked" : ""}">
          <span class="badge-icon">${b.emoji}</span>
          <span class="badge-title">${b.title}</span>
          <span class="badge-desc">${b.desc}</span>
        </div>
      `;
    });
  }
  
  modal.classList.add("active");
}

function closeBadgesModal() {
  const modal = document.getElementById("badges-modal");
  if (modal) modal.classList.remove("active");
}

// ==========================================
// 10. SYSTEM UTILITIES (Toast, Export, Link File)
// ==========================================
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerText = message;
  
  // Style toast dynamically
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.padding = "12px 24px";
  toast.style.borderRadius = "var(--radius-md)";
  toast.style.backgroundColor = type === "success" ? "var(--primary)" : "var(--danger)";
  toast.style.color = "white";
  toast.style.fontSize = "13px";
  toast.style.fontWeight = "600";
  toast.style.boxShadow = "var(--shadow-lg)";
  toast.style.zIndex = "1000";
  toast.style.opacity = "0";
  toast.style.transform = "translateY(10px)";
  toast.style.transition = "all 0.3s ease";
  
  document.body.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 50);
  
  // Remove toast after delay
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Export data to JSON file
function exportBackupData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `quran_dashboard_backup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("💾 Backup file downloaded successfully.");
}

// Import data from JSON file
function importBackupData(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed.version) {
        store = { ...store, ...parsed };
        saveToLocalStorage();
        renderAllViews();
        showToast("🔄 Data backup imported successfully.");
      } else {
        showToast("⚠️ Invalid backup format.", "error");
      }
    } catch (err) {
      showToast("⚠️ Error parsing backup file.", "error");
    }
  };
  reader.readAsText(file);
}

// Link local data file using File System Access API
async function linkLocalSyncFile() {
  try {
    const options = {
      suggestedName: "quran_dashboard_data.json",
      types: [{
        description: "JSON Database file",
        accept: {
          "application/json": [".json"]
        }
      }]
    };
    
    // Use showSaveFilePicker to let user create or point to a file inside their OneDrive folder
    const handle = await window.showSaveFilePicker(options);
    
    // Save to IndexedDB so we can load it next time without re-picker
    await saveFileHandle(handle);
    store.fileLinked = true;
    
    // Perform initial write
    await writeToLinkedFile();
    updateSyncUI();
    showToast("🔗 File link created! Data will now auto-save to OneDrive.");
  } catch (err) {
    console.error("Linking cancelled or failed", err);
    if (err.name !== "AbortError") {
      showToast("⚠️ Link failed. Browser may not support direct disk access.", "error");
    }
  }
}

// Reset data helper
function resetDataToDefault() {
  if (confirm("WARNING: This will overwrite all your progress with default sample data. Proceed?")) {
    localStorage.removeItem("quran_dashboard_store");
    removeFileHandle();
    store.fileLinked = false;
    generateMockData();
    saveToLocalStorage();
    renderAllViews();
    showToast("🔄 Database reset to sample data.");
  }
}

// Toggle Theme (Light/Dark)
function toggleThemeMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  store.theme = isDark ? "dark" : "light";
  saveToLocalStorage();
  
  const btn = document.getElementById("sidebar-theme-toggle");
  if (btn) {
    btn.innerHTML = isDark ? 
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>` :
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

// ==========================================
// 11. INITIALIZATION ON PAGE LOAD
// ==========================================
window.addEventListener("DOMContentLoaded", async () => {
  // Load database
  await loadFromLocalStorage();
  
  // Auto pull from Google Sheets on start if configured
  if (store.googleSheetsUrl) {
    syncWithGoogleSheets('pull');
  }
  
  // Set Theme
  if (store.theme === "dark") {
    document.body.classList.add("dark-mode");
    const btn = document.getElementById("sidebar-theme-toggle");
    if (btn) {
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    }
  }
  
  // Set Profile Sidebar text
  const uNameEl = document.getElementById("sidebar-username");
  const uLvlEl = document.getElementById("sidebar-userlevel");
  if (uNameEl) uNameEl.innerText = store.profile.name;
  if (uLvlEl) uLvlEl.innerText = store.profile.level;
  
  // Set default dates on forms
  const sessDate = document.getElementById("sess-date");
  const sessTime = document.getElementById("sess-time");
  if (sessDate) sessDate.value = new Date().toISOString().split('T')[0];
  if (sessTime) sessTime.value = new Date().toLocaleTimeString("ms-MY", {hour: "2-digit", minute:"2-digit"});
  
  // Hook listeners and routers
  setupRouter();
  setupFormListeners();
  
  // Surah filter bindings
  const sFilter = document.getElementById("surah-filter-select");
  const sSearch = document.getElementById("surah-search-input");
  
  if (sFilter) {
    sFilter.addEventListener("change", (e) => {
      surahFilter = e.target.value;
      renderSurahGrid();
    });
  }
  if (sSearch) {
    sSearch.addEventListener("input", (e) => {
      surahSearchQuery = e.target.value;
      renderSurahGrid();
    });
  }
  
  // Vocabulary filter bindings
  const vFilter = document.getElementById("vocab-filter-select");
  const vSearch = document.getElementById("vocab-search-input");
  
  if (vFilter) {
    vFilter.addEventListener("change", (e) => {
      vocabFilter = e.target.value;
      renderVocabTab();
    });
  }
  if (vSearch) {
    vSearch.addEventListener("input", (e) => {
      vocabSearchQuery = e.target.value;
      renderVocabTab();
    });
  }
  
  // Journal search binding
  const jSearch = document.getElementById("journal-search-input");
  if (jSearch) {
    jSearch.addEventListener("input", (e) => {
      journalSearchQuery = e.target.value;
      renderJournalTab();
    });
  }
  
  // Render views initial
  renderAllViews();
});
