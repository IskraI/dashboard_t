(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const navLink = [...document.querySelectorAll('.burger-menu__item a')];

  navLink.forEach(e => {
    e.addEventListener('click', () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
    });
  });

  const toggleMenu = () => {
    console.log('click :>> ');
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();

// let currentPage = document.querySelector('.desktop-nav__link');
// let currentPageMob = document.querySelector('.mobile-nav__link');
// if (
//   window.location.pathname == '/' ||
//   window.location.pathname == '/dashboard_t/'
// ) {
//   currentPage.classList.add('current');
//   currentPageMob.classList.add('current');
// }

// let activePage = document.querySelectorAll(
//   '.mobile-nav__link, .desktop-nav__link'
// );
// activePage.forEach(el => {
//   if (el.getAttribute('href') == window.location.pathname) {
//     el.classList.add('current');
//   }
// });
