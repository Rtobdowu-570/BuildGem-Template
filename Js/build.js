
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item h3");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            const paragraph = this.nextElementSibling;
            const icon = this.querySelector("i");

            // Toggle visibility
            paragraph.style.display = paragraph.style.display === "block" ? "none" : "block";
            
            // Rotate icon
            icon.classList.toggle("rotated");
        });
    });
}); 



// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements
    const menuBtn = document.querySelector('.menu-btn');
    const mainMenu = document.querySelector('#main-menu');

    // Check if the elements exist before adding event listeners
    if (menuBtn && mainMenu) {
        // Add a single event listener for the menu button
        menuBtn.addEventListener('click', () => {
            // Toggle the 'show' class on both menus
            mainMenu.classList.toggle('show');
        });
    } else {
        console.error('One or more elements not found:', { menuBtn, mainMenu });
    }
});

document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.showcase').classList.toggle('blur');
});