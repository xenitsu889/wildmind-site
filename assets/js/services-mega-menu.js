(function () {
  var data = window.SERVICES_MEGA_MENU;
  if (!data || !data.length) return;

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function subPanelHtml(item, isActive) {
    var links = item.subs.map(function (sub) {
      return ''
        + '<a href="' + esc(sub.href) + '" class="mega-menu__sub-link">'
        + '  <span class="mega-menu__sub-label">' + esc(sub.label) + '</span>'
        + '  <span class="mega-menu__sub-desc">' + esc(sub.desc) + '</span>'
        + '</a>';
    }).join('');

    return ''
      + '<div class="mega-menu__sub-panel' + (isActive ? ' is-active' : '') + '" role="tabpanel" id="mega-sub-' + esc(item.id) + '" data-sub-panel="' + esc(item.id) + '"' + (isActive ? '' : ' hidden') + '>'
      + links
      + '</div>';
  }

  function buildDesktopMarkup() {
    var firstId = data[0].id;
    var categories = data.map(function (item, i) {
      var active = i === 0;
      return ''
        + '<button type="button" class="mega-menu__category' + (active ? ' is-active' : '') + '" role="tab" id="mega-tab-' + esc(item.id) + '" data-category="' + esc(item.id) + '" aria-selected="' + active + '" aria-controls="mega-sub-' + esc(item.id) + ' mega-case-' + esc(item.id) + '" tabindex="' + (active ? '0' : '-1') + '">'
        + esc(item.label)
        + '</button>';
    }).join('');

    var subPanels = data.map(function (item, i) {
      return subPanelHtml(item, i === 0);
    }).join('');

    var caseCards = data.map(function (item, i) {
      var f = item.featured;
      var active = i === 0;
      return ''
        + '<a href="' + esc(f.href) + '" class="mega-menu__case-card' + (active ? ' is-active' : '') + '" data-case-panel="' + esc(item.id) + '" id="mega-case-' + esc(item.id) + '"' + (active ? '' : ' hidden') + '>'
        + '  <span class="mega-menu__case-label">Featured</span>'
        + '  <span class="mega-menu__case-industry">' + esc(f.industry) + '</span>'
        + '  <h4 class="mega-menu__case-title">' + esc(f.title) + '</h4>'
        + '  <span class="mega-menu__case-result">' + esc(f.result) + '</span>'
        + '  <p class="mega-menu__case-desc">' + esc(f.description) + '</p>'
        + '  <span class="mega-menu__case-cta">' + esc(f.cta) + ' →</span>'
        + '</a>';
    }).join('');

    return ''
      + '<div class="mega-menu__cols">'
      + '  <div class="mega-menu__categories" role="tablist" aria-label="Service categories">' + categories + '</div>'
      + '  <div class="mega-menu__subs">' + subPanels + '</div>'
      + '  <div class="mega-menu__showcase" aria-live="polite">' + caseCards + '</div>'
      + '</div>'
      + '<div class="mega-menu__footer">'
      + '  <a href="/services.html" class="mega-menu__footer-all">View All Services →</a>'
      + '  <a href="/contact.html" class="mega-menu__footer-cta">Start a project →</a>'
      + '</div>';
  }

  function buildMobileMarkup() {
    var sections = data.map(function (item) {
      var subs = item.subs.map(function (sub) {
        return '<a href="' + esc(sub.href) + '" class="mobile-nav-sub">' + esc(sub.label) + '</a>';
      }).join('');
      return ''
        + '<details class="mobile-nav-accordion">'
        + '  <summary class="mobile-nav-accordion-trigger">' + esc(item.label) + '</summary>'
        + '  <div class="mobile-nav-accordion-panel">' + subs + '</div>'
        + '</details>';
    }).join('');

    return ''
      + '<span class="mobile-nav-label">Services</span>'
      + sections
      + '<a href="/services.html" class="mobile-nav-view-all">View All Services →</a>';
  }

  function activateCategory(root, categoryId) {
    root.querySelectorAll('.mega-menu__category').forEach(function (btn) {
      var isActive = btn.getAttribute('data-category') === categoryId;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      btn.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    root.querySelectorAll('.mega-menu__sub-panel').forEach(function (panel) {
      var isActive = panel.getAttribute('data-sub-panel') === categoryId;
      panel.classList.toggle('is-active', isActive);
      if (isActive) panel.removeAttribute('hidden');
      else panel.setAttribute('hidden', '');
    });

    root.querySelectorAll('.mega-menu__case-card').forEach(function (card) {
      var isActive = card.getAttribute('data-case-panel') === categoryId;
      card.classList.toggle('is-active', isActive);
      if (isActive) card.removeAttribute('hidden');
      else card.setAttribute('hidden', '');
    });
  }

  function bindInteractions(root) {
    var categories = root.querySelectorAll('.mega-menu__category');
    if (!categories.length) return;

    categories.forEach(function (btn) {
      btn.addEventListener('mouseenter', function () {
        activateCategory(root, btn.getAttribute('data-category'));
      });
      btn.addEventListener('click', function () {
        activateCategory(root, btn.getAttribute('data-category'));
        btn.focus();
      });
      btn.addEventListener('keydown', function (e) {
        var buttons = Array.prototype.slice.call(categories);
        var idx = buttons.indexOf(btn);
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          var next = buttons[(idx + 1) % buttons.length];
          activateCategory(root, next.getAttribute('data-category'));
          next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          var prev = buttons[(idx - 1 + buttons.length) % buttons.length];
          activateCategory(root, prev.getAttribute('data-category'));
          prev.focus();
        }
      });
    });
  }

  function init() {
    var desktopRoot = document.querySelector('[data-services-mega-menu]');
    if (desktopRoot) {
      desktopRoot.innerHTML = buildDesktopMarkup();
      bindInteractions(desktopRoot);
    }

    var mobileRoot = document.querySelector('[data-mobile-services-menu]');
    if (mobileRoot) {
      mobileRoot.innerHTML = buildMobileMarkup();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      requestAnimationFrame(init);
    });
  } else {
    requestAnimationFrame(init);
  }
})();
