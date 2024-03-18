(function($) {
  $(document).ready(function() {
    // Створення елемента іконки гамбургер-меню
    var $hamburgerToggle = $('<div class="hamburger-toggle"><span></span><span></span><span></span></div>');
    $('.block.block-menu.navigation.menu--main').prepend($hamburgerToggle);

    // Функція для показу/приховування меню
    function toggleMenu() {
      $('.menu.menu-level-0').toggleClass('open');
      $hamburgerToggle.toggleClass('open');
    }

    // Обробник події клік на іконку гамбургер-меню
    $hamburgerToggle.on('click', toggleMenu);
  });
})(jQuery);
