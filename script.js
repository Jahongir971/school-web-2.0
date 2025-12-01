// General entry animation for body
function playBodyEntryAnimation() {
  document.body.classList.remove("is-ready");
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.body.classList.add("is-ready");
    }, 60);
  });
}
document.addEventListener("DOMContentLoaded", playBodyEntryAnimation);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") playBodyEntryAnimation();
});

// =======================
// INTRO-INFO-BTNS Animation
function restartIntroBtnsAnimation() {
  const oldEl = document.querySelector(".intro-info-btns");
  if (!oldEl) return;
  const newEl = oldEl.cloneNode(true);
  oldEl.parentNode.replaceChild(newEl, oldEl);
  requestAnimationFrame(() => newEl.classList.add("show"));
}
window.addEventListener("load", restartIntroBtnsAnimation);
window.addEventListener("pageshow", restartIntroBtnsAnimation);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") restartIntroBtnsAnimation();
});

// =======================
// SECTION-4 CARD (stats) Animation: IntersectionObserver
function section4CardsObserver() {
  const cards = document.querySelectorAll(".section-4-card");
  if (!cards.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.3 }
  );
  cards.forEach((card) => observer.observe(card));
}
document.addEventListener("DOMContentLoaded", section4CardsObserver);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") section4CardsObserver();
});

// =======================
// EVENTS SECTION ANIMATION (fade-in)
function playEventsEntryAnimation() {
  const el = document.querySelector(".events-section");
  if (el) {
    el.classList.remove("visible");
    setTimeout(() => {
      el.classList.add("visible");
    }, 100);
  }
}
document.addEventListener("DOMContentLoaded", playEventsEntryAnimation);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") playEventsEntryAnimation();
});

// =======================
// Programs Cards (cards-section) Entry Animation (optional example, UX boost)
// If you want, you can add entry for program cards too!
function playProgramCardsEntry() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.classList.remove("visible");
    setTimeout(() => card.classList.add("visible"), 130 + i * 90);
  });
}
document.addEventListener("DOMContentLoaded", playProgramCardsEntry);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") playProgramCardsEntry();
});
// fixed header
window.addEventListener("scroll", function () {
  var nav = document.getElementById("navTop");
  if (window.scrollY > 1) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
// faculty start
// Silliq chiqib kelish + visibility restore
function revealFacultySection() {
  var sec = document.querySelector(".faculty-section");
  if (!sec) return;
  sec.classList.remove("visible");
  setTimeout(() => {
    sec.classList.add("visible");
  }, 55);
}

// Entrance: DOM ready
document.addEventListener("DOMContentLoaded", revealFacultySection);
// Visibilitychange: BFCache, qaytganda animatsiya qayta
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    revealFacultySection();
  }
});
function revealAdmissionsSection() {
  var sec = document.querySelector(".admissions-section");
  if (!sec) return;
  sec.classList.remove("visible");
  setTimeout(() => {
    sec.classList.add("visible");
  }, 55);
}
document.addEventListener("DOMContentLoaded", revealAdmissionsSection);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") revealAdmissionsSection();
});
// lang switcher
// Single-button language switcher which shows the language TO switch to.
// If current is 'en' -> button shows Uzbek (flag + "UZ"), and clicking switches to 'uz'.
// If current is 'uz' -> button shows English (flag + "EN"), and clicking switches to 'en'.
// Translations applied via data-i18n and data-i18n-placeholder. Selection persisted in localStorage.

const TRANSLATIONS = {
  en: {
    "meta.title": "Al-Xarezmi",
    "nav.home": "Home",
    "nav.programs": "Programs",
    "nav.about": "About",
    "nav.events": "Events",
    "nav.faculty": "Faculty",
    "nav.admission": "Admission",
    "apply.now": "Apply now",
    "welcome.title": "Welcome to Al-Xarezmi",
    "welcome.subtitle":
      "At Al-Xarezmi school, we provide world-class education that empowers students to reach their full potential and make a positive impact on the world.",
    "btn.explore": "Explore Programs",
    "btn.tour": "Schedule a Tour",
    "stats.programs": "50+",
    "stats.programs_label": "Programs",
    "stats.students": "2,500+",
    "stats.students_label": "Students",
    "stats.awards": "100+",
    "stats.awards_label": "Excellence Awards",
    "programs.badge": "Our Programs",
    "programs.title": "Discover Your Passion",
    "programs.desc":
      "Choose from our diverse range of programs designed to challenge, inspire, and prepare you for success.",
    "programs.liberal.title": "Liberal Arts",
    "programs.liberal.desc":
      "Comprehensive humanities curriculum fostering critical thinking and communication skills.",
    "programs.stem.title": "STEM",
    "programs.stem.desc":
      "Advanced science, technology, engineering, and mathematics programs with modern labs.",
    "programs.fine.title": "Fine Arts",
    "programs.fine.desc":
      "Creative expression through visual arts, theater, and design with professional guidance.",
    "programs.global.title": "Global Studies",
    "programs.global.desc":
      "International perspectives and cultural awareness through diverse curriculum.",
    "programs.performing.title": "Performing Arts",
    "programs.performing.desc":
      "Music, dance, and drama programs that nurture artistic talent and confidence.",
    "programs.tech.title": "Technology",
    "programs.tech.desc":
      "Cutting-edge computer science and digital innovation programs for the future.",
    "about.badge": "About Us",
    "about.title": "Empowering Minds, Transforming Futures",
    "about.p1":
      "Al-Xoramiy school has been at the forefront of educational excellence.",
    "about.p2":
      "Our approach combines academics with character development to prepare students for life.",
    "about.p3":
      "We create an environment where students are inspired to explore, innovate, and excel.",
    "about.years": "Years of Excellence",
    "values.eyebrow": "Our Core Values",
    "values.title": "The principles that guide everything we do",
    "values.lead":
      "Below are the core values we stand by — qualities that shape our approach, culture and commitment to learners.",
    "values.excellence.title": "Excellence",
    "values.excellence.desc":
      "Striving for the highest standards in education and character development.",
    "values.community.title": "Community",
    "values.community.desc":
      "Building a supportive environment where everyone belongs and thrives.",
    "values.innovation.title": "Innovation",
    "values.innovation.desc":
      "Embracing new ideas and technologies to enhance learning experiences.",
    "values.achievement.title": "Achievement",
    "values.achievement.desc":
      "Celebrating success and empowering students to reach their full potential.",
    "events.badge": "Upcoming Events",
    "events.title": "Join Us at Our Events",
    "events.desc":
      "Stay connected with our vibrant community through exciting events and activities throughout the year.",
    "events.tags.academic": "Academic",
    "events.tags.sports": "Sports",
    "events.tags.ceremony": "Ceremony",
    "events.science.name": "Science Fair 2024",
    "events.science.date": "December 15, 2024",
    "events.science.time": "9:00 AM - 4:00 PM",
    "events.science.place": "Main Auditorium",
    "events.sports.name": "Winter Sports Day",
    "events.sports.date": "December 22, 2024",
    "events.sports.time": "8:00 AM - 5:00 PM",
    "events.sports.place": "Sports Complex",
    "events.grad.name": "Annual Graduation Ceremony",
    "events.grad.date": "January 10, 2025",
    "events.grad.time": "6:00 PM - 9:00 PM",
    "events.grad.place": "Grand Hall",
    "faculty.badge": "Our Faculty",
    "faculty.title": "Learn from the Best",
    "faculty.desc":
      "Our dedicated educators bring passion, expertise, and innovation to every classroom, inspiring students to achieve excellence.",
    "faculty.experts": "Expert Educators",
    "faculty.excellence": "Excellence in Education",
    "faculty.paragraph":
      "Our faculty members are not just teachers—they are mentors, innovators, and lifelong learners who are committed to student success. With diverse backgrounds and extensive experience, our educators create engaging learning environments that challenge and support every student.",
    "faculty.f1": "Continuous professional development and training",
    "faculty.f2":
      "Innovative teaching methodologies and technology integration",
    "faculty.f3": "Personalized attention and mentorship for every student",
    "faculty.stat1": "With Advanced Degrees",
    "faculty.stat2": "Years Average Experience",
    "faculty.stat3": "Student-Teacher Ratio",
    "admissions.badge": "Admissions",
    "admissions.title": "Join Our Community",
    "admissions.lead":
      "Take the first step towards an exceptional education. We look forward to welcoming you to Horizon Academy.",
    "admissions.process": "Admission Process",
    "admissions.step1.title": "Inquiry",
    "admissions.step1.desc":
      "Submit your inquiry form or schedule a campus tour",
    "admissions.step2.title": "Application",
    "admissions.step2.desc":
      "Complete the online application with required documents",
    "admissions.step3.title": "Assessment",
    "admissions.step3.desc":
      "Participate in our assessment and interview process",
    "admissions.step4.title": "Enrollment",
    "admissions.step4.desc": "Receive your acceptance and complete enrollment",
    "contact.getintouch": "Get in Touch",
    "contact.placeholder.name": "Full Name",
    "contact.placeholder.email": "Email Address",
    "contact.placeholder.phone": "Phone Number",
    "contact.placeholder.grade": "Grade Level",
    "contact.placeholder.message": "Your Message",
    "contact.send": "Send Message",
    "contact.intro":
      "Have questions? Our admissions team is here to help. Reach out to us and we'll guide you through the process.",
    "contact.email.label": "Email",
    "contact.email.value": "admissions@horizonacademy.edu",
    "contact.phone.label": "Phone",
    "contact.phone.value": "+1 (555) 123-4567",
    "contact.address.label": "Address",
    "contact.address.value": "123 Education Lane, City, State 12345",
    "contact.hours.title": "Office Hours",
    "contact.hours.weekdays": "Monday - Friday: 8:00 AM - 5:00 PM",
    "contact.hours.saturday": "Saturday: 8:00 AM - 4:00 PM",
    "contact.hours.sunday": "Sunday: Closed",
    "footer.brand": "Al-Xarezmi",
    "footer.text":
      "Empowering minds and transforming futures through excellence in education since 1995.",
    "footer.links.col1.title": "Quick Links",
    "footer.links.about": "About Us",
    "footer.links.programs": "Programs",
    "footer.links.admissions": "Admissions",
    "footer.links.faculty": "Faculty",
    "footer.links.campus": "Campus Life",
    "footer.links.alumni": "Alumni",
    "footer.links.col2.title": "Resources",
    "footer.links.parent": "Parent Portal",
    "footer.links.student": "Student Portal",
    "footer.links.library": "Library",
    "footer.links.calendar": "Calendar",
    "footer.links.news": "News",
    "footer.links.careers": "Careers",
    "footer.links.col3.title": "Support",
    "footer.links.contact": "Contact Us",
    "footer.links.faq": "FAQs",
    "footer.links.tech": "Technical Support",
    "footer.links.privacy": "Privacy Policy",
    "footer.links.terms": "Terms of Service",
    "footer.copyright": "© 2026 Al-Xarezmi. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
  },

  uz: {
    "meta.title": "Al-Xorazmiy",
    "nav.home": "Bosh sahifa",
    "nav.programs": "Dasturlar",
    "nav.about": "Biz haqimizda",
    "nav.events": "Tadbirlar",
    "nav.faculty": "O'qituvchilar",
    "nav.admission": "Qabul",
    "apply.now": "Hozir murojaat qiling",
    "welcome.title": "Al-Xorazmiyga xush kelibsiz",
    "welcome.subtitle":
      "Al-Xorazmiy maktabida biz talabalarni to'liq salohiyatlariga erishishlari va dunyoga ijobiy taʼsir ko‘rsatishlari uchun xalqaro darajada taʼlim beramiz.",
    "btn.explore": "Dasturlarni ko'rish",
    "btn.tour": "Ekskursiya buyurtma qiling",
    "stats.programs": "50+",
    "stats.programs_label": "Dasturlar",
    "stats.students": "2,500+",
    "stats.students_label": "Talabalar",
    "stats.awards": "100+",
    "stats.awards_label": "Muvaffaqiyat mukofotlari",
    "programs.badge": "Dasturlarimiz",
    "programs.title": "Qiziqishingizni kashf eting",
    "programs.desc":
      "Muvaffaqiyatga tayyorlaydigan, ilhomlantiradigan va sinovga soladigan turli dasturlardan tanlang.",
    "programs.liberal.title": "Gumanitar fanlar",
    "programs.liberal.desc":
      "Tanqidiy fikrlash va muloqot ko‘nikmalarini rivojlantiruvchi keng qamrovli gumanitar fanlar taʼlimi.",
    "programs.stem.title": "STEM",
    "programs.stem.desc":
      "Zamonaviy laboratoriyalar bilan ilg‘or fanlar, texnologiya, muhandislik va matematika dasturlari.",
    "programs.fine.title": "Badiiy taʼlim",
    "programs.fine.desc": "Ijodiy ifoda orqali vizual sanʼat, teatr va dizayn.",
    "programs.global.title": "Global tadqiqotlar",
    "programs.global.desc":
      "Xalqaro nuqtai nazarlar va madaniy ongni rivojlantirish orqali keng qamrovli o‘quv dasturi.",
    "programs.performing.title": "Ijro sanʼati",
    "programs.performing.desc":
      "Musiqa, raqs va drama - ijodiy isteʼdodni yo‘naltiruvchi dasturlar.",
    "programs.tech.title": "Texnologiya",
    "programs.tech.desc":
      "Kelajak uchun ilg‘or kompyuter fanlari va raqamli innovatsiya dasturlari.",
    "about.badge": "Biz haqimizda",
    "about.title": "Aqlni kuchaytirish, kelajakni o‘zgartirish",
    "about.p1":
      "Al-Xorazmiy maktabi taʼlim sohasida yetakchilik qilib kelmoqda.",
    "about.p2":
      "Bizning yondashuvimiz akademik bilimlarni xarakter tarbiyasi bilan birlashtirib, hayotga tayyorlaydi.",
    "about.p3":
      "Biz talabalarni izlanishga, yangilik yaratishga va yuqori natijalarga erishishga ilhomlantiruvchi muhit yaratamiz.",
    "about.years": "Yillar davomida yuqori natijalar",
    "values.eyebrow": "Bizning asosiy qadriyatlarimiz",
    "values.title": "Hammasini boshqaruvchi tamoyillar",
    "values.lead":
      "Quyida biz targ‘ib qiladigan asosiy qadriyatlar keltirilgan — ular yondashuvimiz, madaniyatimiz va taʼlimga bo‘lgan majburiyatimizni belgilaydi.",
    "values.excellence.title": "Muvaffaqiyat",
    "values.excellence.desc":
      "Taʼlim va xarakter tarbiyasida eng yuqori standartlarga intilish.",
    "values.community.title": "Hamjamiyat",
    "values.community.desc":
      "Har kim uchun qulay va qo‘llab-quvvatlovchi muhit yaratish.",
    "values.innovation.title": "Yangi g‘oyalar",
    "values.innovation.desc":
      "O‘quv tajribasini yaxshilash uchun yangi g‘oyalar va texnologiyalarni qabul qilish.",
    "values.achievement.title": "Erishish",
    "values.achievement.desc":
      "Muvaffaqiyatlarni nishonlash va talabalarni o‘z salohiyatlariga erishishga rag‘batlantirish.",
    "events.badge": "Yaqinlashayotgan tadbirlar",
    "events.title": "Tadbirlarimizda bizga qo‘shiling",
    "events.desc":
      "Yil davomida qiziqarli tadbirlar va faoliyatlar orqali hamjamiyat bilan bog‘lanib turing.",
    "events.tags.academic": "Akademik",
    "events.tags.sports": "Sport",
    "events.tags.ceremony": "Marosim",
    "events.science.name": "Ilmiy yarmarka 2024",
    "events.science.date": "15 dekabr 2024",
    "events.science.time": "09:00 - 16:00",
    "events.science.place": "Bosh Auditoriya",
    "events.sports.name": "Qishki sport kuni",
    "events.sports.date": "22 dekabr 2024",
    "events.sports.time": "08:00 - 17:00",
    "events.sports.place": "Sport majmuasi",
    "events.grad.name": "Yillik bitiruv marosimi",
    "events.grad.date": "10 yanvar 2025",
    "events.grad.time": "18:00 - 21:00",
    "events.grad.place": "Grand Hall",
    "faculty.badge": "Bizning o'qituvchilar",
    "faculty.title": "Eng yaxshilardan o'rganing",
    "faculty.desc":
      "Bizning sodiq o'qituvchilar sinfga mehr, tajriba va innovatsiya olib kiradi, talabalarni yuqori natijalarga ilhomlantiradi.",
    "faculty.experts": "Tajribali o'qituvchilar",
    "faculty.excellence": "Taʼlimda mukammallik",
    "faculty.paragraph":
      "Bizning o'qituvchilarimiz faqat dars beruvchilar emas — ular murabbiylar, ixtirochilar va umrbod o'quvchilardir. Turli tajriba va keng bilimga ega bo‘lishlari tufayli ular har bir talabaga moslashgan taʼlim muhitini yaratadi.",
    "faculty.f1": "Doimiy kasbiy rivojlanish va treninglar",
    "faculty.f2":
      "Innovatsion taʼlim uslublari va texnologiyalarni integratsiya qilish",
    "faculty.f3": "Har bir talabaga shaxsiy eʼtibor va murabbiylik",
    "faculty.stat1": "Ilg'or darajaga ega",
    "faculty.stat2": "O'rtacha ish staji (yillar)",
    "faculty.stat3": "O'quvchi-o'qituvchi nisbati",
    "admissions.badge": "Qabul",
    "admissions.title": "Jamiyatimizga qo‘shiling",
    "admissions.lead":
      "Ajoyib taʼlimga ilk qadamni qo‘ying. Sizni Horizon Academyga qabul qilishni intiqlik bilan kutamiz.",
    "admissions.process": "Qabul jarayoni",
    "admissions.step1.title": "So'rov",
    "admissions.step1.desc":
      "So'rov formasini yuboring yoki kampusga sayohatni rejalashtiring",
    "admissions.step2.title": "Ariza",
    "admissions.step2.desc":
      "Kerakli hujjatlari bilan onlayn arizani to‘ldiring",
    "admissions.step3.title": "Baholash",
    "admissions.step3.desc": "Baholash va suhbat jarayonida ishtirok eting",
    "admissions.step4.title": "Ro'yxatdan o'tkazish",
    "admissions.step4.desc":
      "Qabulni oling va ro'yxatdan o'tish jarayonini yakunlang",
    "contact.getintouch": "Bog'laning",
    "contact.placeholder.name": "To'liq ism",
    "contact.placeholder.email": "Elektron pochta",
    "contact.placeholder.phone": "Telefon raqami",
    "contact.placeholder.grade": "Sinf/Bo'lim",
    "contact.placeholder.message": "Xabaringiz",
    "contact.send": "Xabar yuborish",
    "contact.intro":
      "Savollaringiz bormi? Bizning qabul bo‘limi yordam berishga tayyor. Biz bilan bog‘laning va jarayon bo‘yicha yo‘l-yo‘riq oling.",
    "contact.email.label": "Elektron pochta",
    "contact.email.value": "admissions@horizonacademy.edu",
    "contact.phone.label": "Telefon",
    "contact.phone.value": "+1 (555) 123-4567",
    "contact.address.label": "Manzil",
    "contact.address.value": "123 Education Lane, City, State 12345",
    "contact.hours.title": "Ofis ish vaqti",
    "contact.hours.weekdays": "Dushanba - Juma: 08:00 - 17:00",
    "contact.hours.saturday": "Shanba: 08:00 - 16:00",
    "contact.hours.sunday": "Yakshanba: Dam olish",
    "footer.brand": "Al-Xorazmiy",
    "footer.text":
      "1995 yildan beri taʼlimda mukammallik orqali aqlni quvvatlash va kelajakni o‘zgartirish.",
    "footer.links.col1.title": "Tez havolalar",
    "footer.links.about": "Biz haqimizda",
    "footer.links.programs": "Dasturlar",
    "footer.links.admissions": "Qabul",
    "footer.links.faculty": "O'qituvchilar",
    "footer.links.campus": "Kampus hayoti",
    "footer.links.alumni": "Bitiruvchilar",
    "footer.links.col2.title": "Resurslar",
    "footer.links.parent": "Ota-ona portal",
    "footer.links.student": "Talaba portal",
    "footer.links.library": "Kutubxona",
    "footer.links.calendar": "Taqvim",
    "footer.links.news": "Yangiliklar",
    "footer.links.careers": "Ish imkoniyatlari",
    "footer.links.col3.title": "Yordam",
    "footer.links.contact": "Biz bilan bog'laning",
    "footer.links.faq": "Ko'p so'raladigan savollar",
    "footer.links.tech": "Texnik yordam",
    "footer.links.privacy": "Maxfiylik siyosati",
    "footer.links.terms": "Xizmat ko'rsatish shartlari",
    "footer.copyright": "© 2026 Al-Xorazmiy. Barcha huquqlar himoyalangan.",
    "footer.privacy": "Maxfiylik siyosati",
    "footer.terms": "Xizmat ko'rsatish shartlari",
    "footer.cookies": "Cookie siyosati",
  },
};

// Helpers
function getSavedLang() {
  const s = localStorage.getItem("site_lang");
  if (s && TRANSLATIONS[s]) return s;
  const nav = (navigator.language || navigator.userLanguage || "en").slice(
    0,
    2
  );
  return TRANSLATIONS[nav] ? nav : "en";
}
function setHtmlLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-lang", lang);
}
function setElementTextPreserveChildren(el, text) {
  const walker = document.createTreeWalker(
    el,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  const first = walker.nextNode();
  if (first) first.nodeValue = text;
  else el.textContent = text;
}
function applyTranslations(lang) {
  // document title
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) {
    const key = titleEl.getAttribute("data-i18n");
    const t = TRANSLATIONS[lang] && TRANSLATIONS[lang][key];
    if (t) document.title = t;
  }

  // elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const t = TRANSLATIONS[lang] && TRANSLATIONS[lang][key];
    if (t !== undefined) setElementTextPreserveChildren(el, t);
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const t = TRANSLATIONS[lang] && TRANSLATIONS[lang][key];
    if (t !== undefined) el.setAttribute("placeholder", t);
  });

  // update footer brand fallback nodes
  document
    .querySelectorAll(".footer-logo span, [data-i18n='footer.brand']")
    .forEach((el) => {
      const t = TRANSLATIONS[lang] && TRANSLATIONS[lang]["footer.brand"];
      if (t) setElementTextPreserveChildren(el, t);
    });

  setHtmlLang(lang);
  localStorage.setItem("site_lang", lang);
  syncLangSwitchButton(lang);
}

// Button shows the language to SWITCH TO.
function syncLangSwitchButton(currentLang) {
  const btn = document.getElementById("langSwitch");
  const flag = document.getElementById("langSwitchFlag");
  const label = document.getElementById("langSwitchLabel");
  if (!btn || !flag || !label) return;

  if (currentLang === "en") {
    flag.className = "fi fi-uz";
    label.textContent = "UZ";
    btn.setAttribute("data-target-lang", "uz");
    btn.title = "O‘zbek tiliga o‘tkazish";
  } else {
    flag.className = "fi fi-gb";
    label.textContent = "EN";
    btn.setAttribute("data-target-lang", "en");
    btn.title = "Switch to English";
  }
}

// Initialize language switch button behavior
function initLangSwitch() {
  const btn = document.getElementById("langSwitch");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target-lang");
    if (target && TRANSLATIONS[target]) {
      applyTranslations(target);
    }
  });

  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const initial = getSavedLang();
  applyTranslations(initial);
  initLangSwitch();
});
// media
// main.js - behavior for nav, mobile nav toggle and programs carousel (scroll-snap)
// Usage: include <script src="main.js"></script> near end of <body>

(function () {
  "use strict";

  /* ---------- NAV SCROLL: add/remove .scrolled ---------- */
  const nav = document.getElementById("navTop");
  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  document.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll();

  /* ---------- MOBILE NAV TOGGLE ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ---------- INTRO BUTTONS SHOW ---------- */
  window.addEventListener("load", () => {
    const intro = document.querySelector(".intro-info-btns");
    if (intro) intro.classList.add("show");

    // Mark some sections visible for entrance animations if present
    document
      .querySelectorAll(".section-4-card")
      .forEach((el) => el.classList.add("show"));
    document
      .querySelectorAll(".events-section, .faculty-section, .card")
      .forEach((el) => {
        if (el.classList) el.classList.add("visible");
      });
  });

  /* ---------- PROGRAMS CAROUSEL (mobile only) ---------- */
  const programsContainer = document.getElementById("programsCards");
  const prevBtn = document.querySelector(".cards-prev");
  const nextBtn = document.querySelector(".cards-next");
  const paginationWrap = document.querySelector(".cards-pagination");

  if (!programsContainer) return;

  let dots = [];
  let resizeObserver = null;
  let raf = null;
  let carouselEnabled = false;

  function computeMaxSlideHeight() {
    const slides = Array.from(programsContainer.children);
    let max = 0;
    slides.forEach((s) => {
      const h = s.offsetHeight;
      if (h > max) max = h;
    });
    return max + 8; // small buffer
  }

  function buildPagination() {
    if (!paginationWrap) return;
    paginationWrap.innerHTML = "";
    dots = [];
    const slides = Array.from(programsContainer.children);
    slides.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "dot";
      btn.setAttribute("aria-label", "Go to slide " + (i + 1));
      btn.addEventListener("click", () => scrollToIndex(i));
      paginationWrap.appendChild(btn);
      dots.push(btn);
    });
    updateActiveDot();
  }

  function onScrollUpdate() {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(updateActiveDot);
  }

  function updateActiveDot() {
    if (!dots || dots.length === 0) return;
    const index = getActiveIndex();
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  function getActiveIndex() {
    const children = Array.from(programsContainer.children);
    const rect = programsContainer.getBoundingClientRect();
    let closest = 0;
    let best = Infinity;
    children.forEach((child, i) => {
      const r = child.getBoundingClientRect();
      const dist = Math.abs(r.left - rect.left);
      if (dist < best) {
        best = dist;
        closest = i;
      }
    });
    return closest;
  }

  function scrollToIndex(i) {
    const slide = programsContainer.children[i];
    if (!slide) return;
    const padLeft =
      parseInt(getComputedStyle(programsContainer).paddingLeft || 0, 10) || 0;
    programsContainer.scrollTo({
      left: slide.offsetLeft - padLeft,
      behavior: "smooth",
    });
    setTimeout(updateActiveDot, 260);
  }

  function onPrev() {
    const idx = getActiveIndex();
    scrollToIndex(Math.max(0, idx - 1));
  }
  function onNext() {
    const idx = getActiveIndex();
    scrollToIndex(Math.min(programsContainer.children.length - 1, idx + 1));
  }

  function enableCarousel() {
    if (carouselEnabled) return;
    carouselEnabled = true;

    // set explicit height to prevent collapse (images / fonts)
    programsContainer.style.height = computeMaxSlideHeight() + "px";

    // pagination
    buildPagination();

    // attach handlers
    programsContainer.addEventListener("scroll", onScrollUpdate, {
      passive: true,
    });
    programsContainer.addEventListener("keydown", onKeyNav);

    if (prevBtn) prevBtn.addEventListener("click", onPrev);
    if (nextBtn) nextBtn.addEventListener("click", onNext);

    // observe children size changes
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        programsContainer.style.height = computeMaxSlideHeight() + "px";
        updateActiveDot();
      });
      Array.from(programsContainer.children).forEach((child) =>
        resizeObserver.observe(child)
      );
    }
  }

  function disableCarousel() {
    if (!carouselEnabled) return;
    carouselEnabled = false;

    programsContainer.style.height = ""; // let natural layout resume
    programsContainer.removeEventListener("scroll", onScrollUpdate);
    programsContainer.removeEventListener("keydown", onKeyNav);

    if (prevBtn) prevBtn.removeEventListener("click", onPrev);
    if (nextBtn) nextBtn.removeEventListener("click", onNext);

    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
    if (paginationWrap) paginationWrap.innerHTML = "";
    dots = [];
  }

  function onKeyNav(e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      onPrev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      onNext();
    }
  }

  function checkViewportAndToggleCarousel() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) enableCarousel();
    else disableCarousel();
  }

  window.addEventListener("load", checkViewportAndToggleCarousel);
  window.addEventListener("resize", checkViewportAndToggleCarousel);

  // expose for debugging (optional)
  window.__alx_carousel = {
    enable: enableCarousel,
    disable: disableCarousel,
    scrollToIndex,
    getActiveIndex,
  };
})();
// Small helper to adjust map iframe height responsively and keep desktop layout stable.
// Include this after your main.js or at the end of <body>.

(function () {
  'use strict';

  function setMapHeight() {
    // find the iframe(s) inside contact-section
    const iframes = document.querySelectorAll('.contact-section iframe');
    if (!iframes || iframes.length === 0) return;

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    iframes.forEach(iframe => {
      // Desktop: keep larger height (match previous desktop look)
      if (vw >= 961) {
        iframe.style.height = '450px';
        iframe.style.minHeight = '420px';
      } else if (vw >= 640) {
        // tablet
        iframe.style.height = '320px';
        iframe.style.minHeight = '260px';
      } else {
        // mobile
        iframe.style.height = '260px';
        iframe.style.minHeight = '200px';
      }

      // ensure width stays 100% of column
      iframe.style.width = '100%';
      iframe.style.maxWidth = 'none';
      iframe.style.border = iframe.style.border || '0';
      iframe.style.display = 'block';
    });
  }

  // Run on load and on resize/orientation change
  window.addEventListener('load', setMapHeight);
  window.addEventListener('resize', setMapHeight);
  window.addEventListener('orientationchange', setMapHeight);

  // If your site initializes JS that might change layout later (e.g. lazy load images),
  // re-run after a short delay to ensure iframe sizing is correct:
  window.setTimeout(setMapHeight, 800);
})();