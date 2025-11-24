// Add class to <body> so CSS entry animations play on page load
document.addEventListener("DOMContentLoaded", function () {
  // Small timeout to allow render/layout before animation starts
  requestAnimationFrame(function () {
    setTimeout(function () {
      document.body.classList.add("is-ready");
    }, 40);
  });
});

// Optionally remove class on visibilitychange to replay animations when user returns
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    // re-trigger by removing and re-adding the class
    document.body.classList.remove("is-ready");
    requestAnimationFrame(function () {
      setTimeout(function () {
        document.body.classList.add("is-ready");
      }, 60);
    });
  }
});

// cards started

// intro info btns start
function restartButtonsAnimation() {
  const oldEl = document.querySelector(".intro-info-btns");
  if (!oldEl) return;

  const newEl = oldEl.cloneNode(true); // full clone
  oldEl.parentNode.replaceChild(newEl, oldEl);

  // trigger animation
  requestAnimationFrame(() => {
    newEl.classList.add("show");
  });
}

// Normal reload
window.addEventListener("load", restartButtonsAnimation);

// Back/Forward bilan qaytganda (BFCache)
window.addEventListener("pageshow", () => {
  restartButtonsAnimation();
});

// intro info btns end
// section-4 start
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".section-4-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
});
// section-4 end