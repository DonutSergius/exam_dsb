document.addEventListener('DOMContentLoaded', function() {
// Creating the hamburger menu icon element
  var hamburgerToggle = document.createElement('div');
  hamburgerToggle.classList.add('hamburger-toggle');

// Creating three span elements and appending them to the hamburgerToggle element
  var spans = [];
  for (var i = 0; i < 3; i++) {
    var span = document.createElement('span');
    hamburgerToggle.appendChild(span);
    spans.push(span);
  }

// Selecting the menu block element
  var menuBlock = document.querySelector('.block.block-menu.navigation.menu--main');

// Prepending the hamburgerToggle element to the menu block
  menuBlock.prepend(hamburgerToggle);

// Function to toggle the visibility of the menu
  function toggleMenu() {
    var menu = document.querySelector('.menu.menu-level-0');
    menu.classList.toggle('open');
    hamburgerToggle.classList.toggle('open');
  }

// Event listener for click on the hamburger menu icon, invoking toggleMenu function
  hamburgerToggle.addEventListener('click', toggleMenu);
});
