document.addEventListener("DOMContentLoaded", function() {
    // Set the current year
    const currentYearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Set the last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = `Last modified: ${lastModified}`;

    // Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰';
    });
});
