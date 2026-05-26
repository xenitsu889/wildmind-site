// ============================================================
// WILDMIND — NAV + FOOTER PARTIALS
// Inject the same nav/footer markup across every page so they
// stay consistent. Pass current page slug via data-page on <body>.
// ============================================================

(function () {
  function navMarkup(currentPage, base) {
    base = base || '';
    var isActive = function (slug) { return currentPage === slug ? ' active' : ''; };
    return ''
      + '<nav class="site-nav" id="nav">'
      + '  <div class="nav-inner">'
      + '    <a href="' + base + 'index.html" class="brand" aria-label="Wildmind Solutions home">'
      + '      <span class="brand-mark">'
      + '        <img class="brand-logo" src="' + base + 'assets/logos/wildmind_solutions.png" alt="" aria-hidden="true" />'
      + '      </span>'
      + '      <span class="brand-text">Wildmind <span class="sub">Solutions</span></span>'
      + '    </a>'
      + '    <div class="nav-links">'
      + '      <a href="' + base + 'index.html#services" class="' + isActive('home') + '">Services</a>'
      + '      <div class="nav-dropdown">'
      + '        <button class="nav-dropdown-trigger">Industries'
      + '          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">'
      + '            <polyline points="6 9 12 15 18 9"/>'
      + '          </svg>'
      + '        </button>'
      + '        <div class="nav-dropdown-menu">'
      + '          <a href="' + base + 'industries.html">All Industries <span class="menu-sub">Browse every sector we serve</span></a>'
      + '          <a href="' + base + 'industries/real-estate.html">Real Estate <span class="menu-sub">Property tech and AI listings</span></a>'
      + '          <a href="' + base + 'industries/manufacturing.html">Manufacturing <span class="menu-sub">Digital operations and ERP</span></a>'
      + '          <a href="' + base + 'industries/cultural-heritage.html">Cultural Heritage <span class="menu-sub">Museum and tourism AI</span></a>'
      + '          <a href="' + base + 'industries/hospitality.html">Hospitality <span class="menu-sub">Hotels, F&amp;B, and guest experience</span></a>'
      + '          <a href="' + base + 'industries/healthcare.html">Healthcare <span class="menu-sub">Clinics and patient platforms</span></a>'
      + '          <a href="' + base + 'industries/ecommerce.html">E-Commerce <span class="menu-sub">Retail and creative automation</span></a>'
      + '        </div>'
      + '      </div>'
      + '      <a href="' + base + 'index.html#work">Work</a>'
      + '      <a href="' + base + 'about.html" class="' + isActive('about') + '">About</a>'
      + '      <a href="' + base + 'contact.html" class="' + isActive('contact') + '">Contact</a>'
      + '    </div>'
      + '    <div class="nav-actions">'
      + '      <button class="theme-toggle" aria-label="Toggle theme">'
      + '        <svg class="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
      + '          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
      + '        </svg>'
      + '        <svg class="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
      + '          <circle cx="12" cy="12" r="4"/>'
      + '          <line x1="12" y1="2" x2="12" y2="4"/>'
      + '          <line x1="12" y1="20" x2="12" y2="22"/>'
      + '          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/>'
      + '          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>'
      + '          <line x1="2" y1="12" x2="4" y2="12"/>'
      + '          <line x1="20" y1="12" x2="22" y2="12"/>'
      + '          <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/>'
      + '          <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>'
      + '        </svg>'
      + '      </button>'
      + '      <a href="' + base + 'contact.html" class="nav-cta">Start a project</a>'
      + '      <button class="menu-toggle" aria-label="Menu">'
      + '        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">'
      + '          <line x1="3" y1="6" x2="21" y2="6"/>'
      + '          <line x1="3" y1="12" x2="21" y2="12"/>'
      + '          <line x1="3" y1="18" x2="21" y2="18"/>'
      + '        </svg>'
      + '      </button>'
      + '    </div>'
      + '  </div>'
      + '</nav>';
  }

  function footerMarkup(base) {
    base = base || '';
    return ''
      + '<footer class="site-footer">'
      + '  <div class="container">'
      + '    <div class="footer-atmosphere">'
      + '      <div>'
      + '        <span class="footer-kicker">Wildmind Solutions</span>'
      + '        <p>AI-first product engineering from Ahmedabad, built for teams moving from idea to production.</p>'
      + '      </div>'
      + '      <a href="' + base + 'contact.html" class="footer-conversation">Start a conversation <span>-></span></a>'
      + '    </div>'
      + '    <div class="footer-grid">'
      + '      <div class="footer-brand">'
      + '        <h4>Wildmind <span class="sub">Solutions</span></h4>'
      + '        <p>AI-first product engineering. We design, build, and ship intelligent software for businesses ready to move fast.</p>'
      + '      </div>'
      + '      <div class="footer-col">'
      + '        <h5>Services</h5>'
      + '        <ul>'
      + '          <li><a href="' + base + 'index.html#services">Generative AI</a></li>'
      + '          <li><a href="' + base + 'index.html#services">AI Assistants</a></li>'
      + '          <li><a href="' + base + 'index.html#services">SaaS Platforms</a></li>'
      + '          <li><a href="' + base + 'index.html#services">Web &amp; Mobile</a></li>'
      + '          <li><a href="' + base + 'index.html#services">Enterprise</a></li>'
      + '        </ul>'
      + '      </div>'
      + '      <div class="footer-col">'
      + '        <h5>Industries</h5>'
      + '        <ul>'
      + '          <li><a href="' + base + 'industries/real-estate.html">Real Estate</a></li>'
      + '          <li><a href="' + base + 'industries/manufacturing.html">Manufacturing</a></li>'
      + '          <li><a href="' + base + 'industries/cultural-heritage.html">Cultural Heritage</a></li>'
      + '          <li><a href="' + base + 'industries/hospitality.html">Hospitality</a></li>'
      + '          <li><a href="' + base + 'industries/healthcare.html">Healthcare</a></li>'
      + '          <li><a href="' + base + 'industries/ecommerce.html">E-Commerce</a></li>'
      + '        </ul>'
      + '      </div>'
      + '      <div class="footer-col">'
      + '        <h5>Contact</h5>'
      + '        <ul>'
      + '          <li><a href="mailto:connect@wildmindai.com">connect@wildmindai.com</a></li>'
      + '          <li><a href="tel:+919227428262">+91 92274 28262</a></li>'
      + '          <li><a href="' + base + 'about.html">About Wildmind</a></li>'
      + '        </ul>'
      + '      </div>'
      + '    </div>'
      + '    <div class="footer-bottom">'
      + '      <div>© <span id="year">2026</span> Wildmind Solutions. All rights reserved.</div>'
      + '      <div class="footer-location">'
      + '        <span class="ping"></span>'
      + '        Ahmedabad, India — Available worldwide'
      + '      </div>'
      + '    </div>'
      + '  </div>'
      + '</footer>';
  }

  // Inject on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page') || '';
    var base = document.body.getAttribute('data-base') || '';
    var navSlot = document.getElementById('nav-slot');
    var footerSlot = document.getElementById('footer-slot');
    if (navSlot) navSlot.outerHTML = navMarkup(page, base);
    if (footerSlot) footerSlot.outerHTML = footerMarkup(base);
  });
})();
