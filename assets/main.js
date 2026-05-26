// ============================================================
// WILDMIND SOLUTIONS — SHARED JS
// ============================================================

(function () {
  // ----- THEME TOGGLE -----
  // Default is light. Read saved preference (if any) and apply.
  var saved;
  try { saved = localStorage.getItem('wm-theme'); } catch (e) {}
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  try {
    if (window.matchMedia('(hover: none)').matches) {
      document.documentElement.setAttribute('data-input', 'touch');
    }
  } catch (e) {}

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
          document.documentElement.removeAttribute('data-theme');
          try { localStorage.setItem('wm-theme', 'light'); } catch (e) {}
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
          try { localStorage.setItem('wm-theme', 'dark'); } catch (e) {}
        }
      });
    }

    // ----- NAV SCROLL EFFECT -----
    var nav = document.querySelector('nav.site-nav');
    if (nav) {
      var onScroll = function () {
        if (window.scrollY > 12) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // ----- SCROLL REVEAL -----
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
      document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
      });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('in');
      });
    }

    // ----- SUBTLE HERO INTELLIGENCE -----
    var reduceMotion = false;
    try {
      reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    var hero = document.querySelector('.hero');
    if (hero && !reduceMotion && window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
      var frame = null;
      var latestX = 50;
      var latestY = 42;

      hero.addEventListener('pointermove', function (event) {
        var rect = hero.getBoundingClientRect();
        latestX = ((event.clientX - rect.left) / rect.width) * 100;
        latestY = ((event.clientY - rect.top) / rect.height) * 100;

        if (frame) return;
        frame = window.requestAnimationFrame(function () {
          hero.style.setProperty('--hero-x', latestX.toFixed(2) + '%');
          hero.style.setProperty('--hero-y', latestY.toFixed(2) + '%');
          frame = null;
        });
      }, { passive: true });

      hero.addEventListener('pointerleave', function () {
        hero.style.setProperty('--hero-x', '50%');
        hero.style.setProperty('--hero-y', '42%');
      });
    }

    // ----- FOOTER YEAR -----
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ----- MOBILE MENU (basic placeholder for future) -----
    var menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', function () {
        alert('Use the sub-page links from the footer to navigate. A mobile menu can be wired in later.');
      });
    }
  });
})();
