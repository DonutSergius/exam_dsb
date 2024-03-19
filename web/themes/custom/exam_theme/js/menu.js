document.addEventListener('DOMContentLoaded', function() {
  // Створення елемента іконки гамбургер-меню
  var hamburgerToggle = document.createElement('div');
  hamburgerToggle.classList.add('hamburger-toggle');

  var spans = [];
  for (var i = 0; i < 3; i++) {
    var span = document.createElement('span');
    hamburgerToggle.appendChild(span);
    spans.push(span);
  }

  var menuBlock = document.querySelector('.block.block-menu.navigation.menu--main');
  menuBlock.prepend(hamburgerToggle);

  // Функція для показу/приховування меню
  function toggleMenu() {
    var menu = document.querySelector('.menu.menu-level-0');
    menu.classList.toggle('open');
    hamburgerToggle.classList.toggle('open');
  }

  // Обробник події клік на іконку гамбургер-меню
  hamburgerToggle.addEventListener('click', toggleMenu);
});
