export function renderNavigation() {
  // Получаем текущий URL страницы
  const currentUrl = window.location.pathname;
  console.log('currentUrl :>> ', currentUrl);
  // Получаем все элементы навигации
  const navItems = document.querySelectorAll('.nav-menu__item');

  // Удаляем класс 'active' у всех элементов и добавляем его только к текущей странице
  navItems.forEach(item => {
    const link = item.querySelector('.nav-menu__link');
    item.classList.remove('active');
    console.log('link.getAttribute ', link.getAttribute('href'));
    // Проверяем, совпадает ли текущий URL со значением href
    if (link.getAttribute('href') === currentUrl) {
      item.classList.add('active');
    }
  });
}
renderNavigation();
// Ждем полной загрузки DOM
// document.addEventListener('DOMContentLoaded', () => {
//   renderNavigation();
// });
