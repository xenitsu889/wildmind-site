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

    /* backdrop-filter on nav creates a containing block — drawer must not live inside nav */
    if (drawer.closest('nav.site-nav')) {
      document.body.appendChild(drawer);
    }

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

    drawer.querySelectorAll('.mobile-nav-accordion-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });
  }

  function initMobileNavActive() {
    var drawer = document.getElementById('mobile-drawer');
    if (!drawer) return;

    var path = window.location.pathname;
    if (path.endsWith('/')) path = path.slice(0, -1) || '/';
    if (path === '/' || path === '') path = '/index.html';

    drawer.querySelectorAll('.mobile-drawer-nav a[href]').forEach(function (link) {
      var linkPath;
      try {
        linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname;
      } catch (e) {
        return;
      }
      if (linkPath.endsWith('/')) linkPath = linkPath.slice(0, -1) || '/';
      if (linkPath === path) {
        link.classList.add('active');
        var accordion = link.closest('.mobile-nav-accordion');
        if (accordion) accordion.open = true;
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
      var syncSiteNavOffset = function () {
        var height = Math.ceil(nav.getBoundingClientRect().height);
        var offset = height + 24;
        document.documentElement.style.setProperty('--site-nav-offset', offset + 'px');
      };

      syncSiteNavOffset();

      var navResizeTimer;
      window.addEventListener('resize', function () {
        clearTimeout(navResizeTimer);
        navResizeTimer = setTimeout(syncSiteNavOffset, 100);
      });

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(syncSiteNavOffset);
      }

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
        var rawX = ((event.clientX - rect.left) / rect.width) * 100;
        var rawY = ((event.clientY - rect.top) / rect.height) * 100;
        latestX = Math.min(92, Math.max(8, 50 + (rawX - 50) * 1.15));
        latestY = Math.min(92, Math.max(8, 42 + (rawY - 42) * 1.15));

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

    var closeBtns = document.querySelectorAll('.dropdown-close-btn');
    closeBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var wrapper = btn.closest('.nav-dropdown');
        if (!wrapper) return;
        wrapper.classList.add('is-force-closed');
        btn.blur();
        var clearClosed = function () {
          wrapper.classList.remove('is-force-closed');
          wrapper.removeEventListener('mouseleave', clearClosed);
        };
        wrapper.addEventListener('mouseleave', clearClosed);
      });
    });

    initMobileDrawer();
    initMobileNavActive();
    initFilterTabs();
    initFaq();
    initCapWorkflow();
  });

  function initCapWorkflow() {
    var canvas = document.getElementById('capWfCanvas');
    if (!canvas) return;

    var played = false;
    var reduceMotion = false;
    var CAP_WF_DESIGN_W = 380;
    var CAP_WF_DESIGN_H = 260;
    try {
      reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    function syncCapWfScale() {
      var stage = canvas.querySelector('.cap-wf-stage');
      var providers = canvas.querySelector('.cap-wf-providers');
      if (!stage) return;

      var availableW = canvas.clientWidth;
      var availableH = canvas.clientHeight;
      if (availableW <= 0) return;

      var scale = Math.min(1, availableW / CAP_WF_DESIGN_W);
      var chipZone = providers ? providers.offsetHeight + 24 : 60;
      chipZone = Math.max(56, chipZone);
      canvas.style.setProperty('--cap-wf-chip-zone', chipZone + 'px');

      var scaledH = CAP_WF_DESIGN_H * scale;
      var drawableH = Math.max(0, availableH - chipZone);
      var lift = chipZone / 2;
      if (scaledH > drawableH * 0.9) {
        lift = Math.min(chipZone * 0.65, 40);
      }

      if (scale < 1) {
        stage.style.width = CAP_WF_DESIGN_W + 'px';
        stage.style.height = CAP_WF_DESIGN_H + 'px';
        stage.style.transform = 'translate(-50%, calc(-50% - ' + lift + 'px)) scale(' + scale + ')';
      } else if (lift > 0 && availableH < 420) {
        stage.style.width = '';
        stage.style.height = '';
        stage.style.transform = 'translate(-50%, calc(-50% - ' + lift + 'px))';
      } else {
        stage.style.width = '';
        stage.style.height = '';
        stage.style.transform = '';
      }
    }

    function portPos(boxId, side) {
      var box = document.getElementById(boxId);
      if (!box) return { x: 0, y: 0 };
      var cr = canvas.getBoundingClientRect();
      var br = box.getBoundingClientRect();
      var cx = br.left - cr.left;
      var cy = br.top - cr.top;
      if (side === 'right') return { x: cx + br.width, y: cy + br.height / 2 };
      if (side === 'left') return { x: cx, y: cy + br.height / 2 };
      if (side === 'bottom') return { x: cx + br.width / 2, y: cy + br.height };
      if (side === 'top') return { x: cx + br.width / 2, y: cy };
      return { x: cx + br.width / 2, y: cy + br.height / 2 };
    }

    function getLineColors() {
      var s = getComputedStyle(canvas);
      return {
        blue: s.getPropertyValue('--wf-line-blue').trim() || '#1d4ed8',
        green: s.getPropertyValue('--wf-line-green').trim() || '#166534',
        purple: s.getPropertyValue('--wf-line-purple').trim() || '#4c1d95',
        teal: s.getPropertyValue('--wf-line-teal').trim() || '#134e4a'
      };
    }

    function drawCurve(svg, from, to, color) {
      var cpx = from.x + (to.x - from.x) * 0.5;
      var d = 'M' + from.x + ',' + from.y
        + ' C' + cpx + ',' + from.y
        + ' ' + cpx + ',' + to.y
        + ' ' + to.x + ',' + to.y;
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', color);
      path.setAttribute('stroke-width', '1.5');
      path.setAttribute('stroke-linecap', 'round');
      svg.appendChild(path);
    }

    function drawVCurve(svg, from, to, color) {
      var d = 'M' + from.x + ',' + from.y
        + ' C' + from.x + ',' + (from.y + 40)
        + ' ' + to.x + ',' + (to.y - 40)
        + ' ' + to.x + ',' + to.y;
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', color);
      path.setAttribute('stroke-width', '1.5');
      path.setAttribute('stroke-linecap', 'round');
      svg.appendChild(path);
    }

    function redrawLines() {
      syncCapWfScale();
      var svg = document.getElementById('capWfSvg');
      if (!svg) return;
      svg.setAttribute('width', canvas.offsetWidth);
      svg.setAttribute('height', canvas.offsetHeight);
      svg.innerHTML = '';
      var colors = getLineColors();
      drawCurve(svg, portPos('capWfbInput', 'right'), portPos('capWfbOrch', 'left'), colors.blue);
      drawCurve(svg, portPos('capWfbOrch', 'right'), portPos('capWfbOut', 'left'), colors.blue);
      drawVCurve(svg, portPos('capWfbOrch', 'bottom'), portPos('capWfbRoute', 'top'), colors.purple);
      drawCurve(svg, portPos('capWfbRoute', 'right'), portPos('capWfbOut', 'left'), colors.teal);
    }

    function activate(boxId, colorClass, labelId) {
      var box = document.getElementById(boxId);
      var lbl = document.getElementById(labelId);
      if (box) {
        box.classList.remove('idle');
        ['wf-blue', 'wf-purple', 'wf-green', 'wf-teal'].forEach(function (c) {
          box.classList.remove(c);
        });
        box.classList.add(colorClass);
        if (!reduceMotion) {
          box.classList.add('activating');
          setTimeout(function () {
            box.classList.remove('activating');
          }, 500);
        }
      }
      if (lbl) lbl.classList.add('wf-lit');
    }

    function setPort(id, state) {
      var p = document.getElementById(id);
      if (!p) return;
      p.classList.remove('wf-port-active', 'wf-port-done');
      if (state) p.classList.add('wf-port-' + state);
    }

    function play() {
      if (played) return;
      played = true;

      if (reduceMotion) {
        activate('capWfbInput', 'wf-blue', 'capWflInput');
        activate('capWfbOrch', 'wf-blue', 'capWflOrch');
        activate('capWfbRoute', 'wf-purple', 'capWflRoute');
        activate('capWfbOut', 'wf-green', 'capWflOut');
        redrawLines();
        return;
      }

      setTimeout(redrawLines, 80);
      var t = 300;
      setTimeout(function () {
        activate('capWfbInput', 'wf-blue', 'capWflInput');
        setPort('capWfpInputR', 'active');
        redrawLines();
      }, t);
      t += 350;
      setTimeout(function () {
        activate('capWfbOrch', 'wf-blue', 'capWflOrch');
        setPort('capWfpOrchL', 'done');
        setPort('capWfpOrchR', 'active');
        setPort('capWfpOrchB', 'active');
        redrawLines();
      }, t);
      t += 400;
      setTimeout(function () {
        activate('capWfbRoute', 'wf-purple', 'capWflRoute');
        setPort('capWfpRouteT', 'done');
        setPort('capWfpRouteR', 'active');
        redrawLines();
      }, t);
      t += 400;
      setTimeout(function () {
        activate('capWfbOut', 'wf-green', 'capWflOut');
        setPort('capWfpOutL', 'done');
        redrawLines();
      }, t);
    }

    syncCapWfScale();

    if ('ResizeObserver' in window) {
      var scaleObs = new ResizeObserver(function () {
        syncCapWfScale();
        if (played) redrawLines();
      });
      scaleObs.observe(canvas);
      var providersEl = canvas.querySelector('.cap-wf-providers');
      if (providersEl) scaleObs.observe(providersEl);
    }

    requestAnimationFrame(function () {
      syncCapWfScale();
      if (played) redrawLines();
    });

    var featured = canvas.closest('.cap-featured');
    if ('IntersectionObserver' in window && featured) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !played) play();
        });
      }, { threshold: 0.3 });
      obs.observe(featured);
    } else {
      setTimeout(play, 500);
    }

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        syncCapWfScale();
        if (played) redrawLines();
      }, 100);
    });

    if ('MutationObserver' in window) {
      var themeTimer;
      var themeObs = new MutationObserver(function () {
        clearTimeout(themeTimer);
        themeTimer = setTimeout(function () {
          syncCapWfScale();
          if (played) redrawLines();
        }, 50);
      });
      themeObs.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      });
    }
  }
})();
