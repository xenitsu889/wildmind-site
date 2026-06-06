(function () {
  function initFeatureTabs() {
    document.querySelectorAll('[data-feature-tabs]').forEach(function (root) {
      var buttons = root.querySelectorAll('.feature-tabs__btn');
      var panels = root.querySelectorAll('.feature-tabs__panel');
      if (!buttons.length || !panels.length) return;

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var target = btn.getAttribute('data-tab');
          buttons.forEach(function (b) { b.classList.remove('is-active'); });
          panels.forEach(function (p) { p.classList.remove('is-active'); });
          btn.classList.add('is-active');
          var panel = root.querySelector('[data-panel="' + target + '"]');
          if (panel) panel.classList.add('is-active');
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initFeatureTabs);
})();
