"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var faqItems = document.querySelectorAll(".faq-item h3");
  faqItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var paragraph = this.nextElementSibling;
      var icon = this.querySelector("i"); // Toggle visibility

      paragraph.style.display = paragraph.style.display === "block" ? "none" : "block"; // Rotate icon

      icon.classList.toggle("rotated");
    });
  });
}); // Wait for the DOM to load before running the script

document.addEventListener('DOMContentLoaded', function () {
  // Get references to the elements
  var menuBtn = document.querySelector('.menu-btn');
  var mainMenu = document.querySelector('#main-menu'); // Check if the elements exist before adding event listeners

  if (menuBtn && mainMenu) {
    // Add a single event listener for the menu button
    menuBtn.addEventListener('click', function () {
      // Toggle the 'show' class on both menus
      mainMenu.classList.toggle('show');
    });
  } else {
    console.error('One or more elements not found:', {
      menuBtn: menuBtn,
      mainMenu: mainMenu
    });
  }
});
document.querySelector('.menu-btn').addEventListener('click', function () {
  document.querySelector('.showcase').classList.toggle('blur');
});
//# sourceMappingURL=build.dev.js.map
