(function () {
  // True when Foundation's hamburger toggle is visible (i.e. top-bar is in mobile mode)
  function isMobile() {
    var toggle = document.querySelector('.top-bar .toggle-topbar');
    return toggle ? window.getComputedStyle(toggle).display !== 'none' : window.innerWidth <= 940;
  }

  function addArrow(a) {
    if (a.querySelector('.eot-nav-arrow')) return; // guard against double-run
    var arrow = document.createElement('span');
    arrow.className = 'eot-nav-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '→ ';
    a.insertBefore(arrow, a.firstChild);
  }

  // Remove Foundation's injected label/back elements and add → prefix to all nav links.
  // Runs after Foundation has had time to inject its elements.
  function cleanMobileNav() {
    if (!isMobile()) return;
    var section = document.querySelector('.top-bar-section');
    if (!section) return;
    // Remove Foundation's injected <label> and <li class="title/back"> rows
    section.querySelectorAll('.dropdown label, .dropdown li.title, .dropdown li.back').forEach(function (el) {
      el.parentNode.removeChild(el);
    });
    // Add → to all nav links (top-level and sub-items)
    section.querySelectorAll('li a').forEach(addArrow);
  }

  // Stop Foundation's slide handler; navigate parent links manually.
  function handleClick(e) {
    if (!isMobile()) return;
    if (!e.target.closest('li.has-dropdown')) return;
    e.stopImmediatePropagation();
    var parentLink = e.target.closest('.has-dropdown > a');
    if (parentLink) {
      window.location.href = parentLink.getAttribute('href');
    }
  }

  // Colour any ★ in nav links with the logo green so it stands out in light and dark mode
  function colourNavStars() {
    document.querySelectorAll('.top-bar-section a').forEach(function (a) {
      if (a.innerHTML.indexOf('★') !== -1) {
        a.innerHTML = a.innerHTML.replace(/★/g, '<span style="color:#0b9444;font-style:normal;">★</span>');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('#navigation');
    if (!nav) return;
    nav.addEventListener('click', handleClick, true);
    colourNavStars();
    setTimeout(cleanMobileNav, 200);
  });
}());
