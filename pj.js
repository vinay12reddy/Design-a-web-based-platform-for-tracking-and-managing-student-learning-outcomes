// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Optional: Remove 'active' class from all and add to clicked link
            document.querySelectorAll('nav .nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // You can add more interactive elements here later:
    // For example, a "scroll to top" button, form validation,
    // or dynamic loading of partner logos/testimonials.

    // Example: Simple console log to confirm script is running
    console.log("AcaTrack Landing Page Script Loaded!");
});