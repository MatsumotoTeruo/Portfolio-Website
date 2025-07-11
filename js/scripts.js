/*!
 * Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
 * Licensed under MIT
 */
window.addEventListener('DOMContentLoaded', event => {

  // 1) Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // 2) CUSTOM: Collapse responsive navbar when a nav-link is clicked
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = Array.from(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  // 3) CUSTOM: Dark/Light Mode Toggle
  function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark);
  }

  // CUSTOM: Create toggle button for Dark/light mode
  const themeToggle = document.createElement('button');
  themeToggle.id = 'theme-toggle';
  themeToggle.textContent = '🌙'; // icon ban đầu
  document.body.prepend(themeToggle);

  // CUSTOM: When loading, apply saved theme
  const savedDark = localStorage.getItem('darkMode') === 'true';
  applyTheme(savedDark);
  themeToggle.textContent = savedDark ? '☀️' : '🌙';

  // CUSTOM: Capture click event to convert
  themeToggle.addEventListener('click', () => {
    const nowDark = !document.documentElement.classList.contains('dark-mode');
    applyTheme(nowDark);
    themeToggle.textContent = nowDark ? '☀️' : '🌙';
  });

  // 4) CUSTOM: Notification Bar (Bootstrap Alert)
  const notif = document.createElement('div');
  notif.className = 'alert alert-info alert-dismissible fade show';
  notif.role = 'alert';
  notif.innerHTML = `
    <strong>Welcome to my portfolio</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  document.body.insertBefore(notif, document.body.firstChild);

  // CUSTOM: Automatically close the alert after 5 seconds
  setTimeout(() => {
    bootstrap.Alert.getOrCreateInstance(notif).close();
  }, 5000);

});
