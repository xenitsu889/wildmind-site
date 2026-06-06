// ============================================================
// WILDMIND SOLUTIONS — SHARED JS
// ============================================================

(function () {
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

  function initMobileDrawer() {
    var drawer = document.getElementById('mobile-drawer');
    var toggle = document.querySelector('.menu-toggle');
    var closeBtn = document.querySelector('.mobile-drawer-close');
    var overlay = document.querySelector('.mobile-drawer-overlay');
    if (!drawer || !toggle) return;

    function openDrawer() {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('drawer-open');
    }

    function closeDrawer() {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('drawer-open');
    }

    toggle.addEventListener('click', function () {
      if (drawer.classList.contains('is-open')) closeDrawer();
      else openDrawer();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
        toggle.focus();
      }
    });
  }

  function initFilterTabs() {
    document.querySelectorAll('[data-filter-group]').forEach(function (group) {
      var tabs = group.querySelectorAll('.filter-tab');
      var targetId = group.getAttribute('data-filter-group');
      var items = document.querySelectorAll('[data-filter-target="' + targetId + '"]');
      if (!tabs.length || !items.length) return;

      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          var filter = tab.getAttribute('data-filter');
          tabs.forEach(function (t) { t.classList.remove('is-active'); });
          tab.classList.add('is-active');
          items.forEach(function (item) {
            var cats = (item.getAttribute('data-category') || '').split(' ');
            if (filter === 'all' || cats.indexOf(filter) !== -1) {
              item.classList.remove('is-filtered-out');
            } else {
              item.classList.add('is-filtered-out');
            }
          });
        });
      });
    });
  }

  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var trigger = item.querySelector('.faq-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        item.parentElement.querySelectorAll('.faq-item.is-open').forEach(function (open) {
          if (open !== item) {
            open.classList.remove('is-open');
            open.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
          }
        });
        item.classList.toggle('is-open', !isOpen);
        trigger.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  }

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

    var nav = document.querySelector('nav.site-nav');
    if (nav) {
      var onScroll = function () {
        if (window.scrollY > 12) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

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

    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initMobileDrawer();
    initFilterTabs();
    initFaq();
  });
})();
