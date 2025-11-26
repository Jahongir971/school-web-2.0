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
