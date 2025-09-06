//display hamburger button max-width > 768px
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


    // Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select all buttons with class 'go-btn'
    const goButtons = document.querySelectorAll(".go-btn");

    // Loop through each button and attach click event
    goButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Redirect to  page
            window.location.href = "htmlReference.html"; // Change to your page path
        });
    });

    // If you have separate buttons for HTML section
    const htmlButton = document.querySelector(".html-btn");
    if (htmlButton) {
        htmlButton.addEventListener("click", () => {
            window.location.href = "htmlReference.html"; // Change path if different
        });
    }
});

//go to back btn
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Back buttons
    const backButtons = document.querySelectorAll(".back");

    backButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Navigate to the index page
            window.location.href = "index.html"; // Change path if needed
        });
    });
});

