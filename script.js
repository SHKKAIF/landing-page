document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for the "Get Started" button
    document.querySelector('.cta-button').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Form submission handling
    document.querySelector('#contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.querySelector('#popup').style.display = 'block'; // Show the pop-up
        this.reset(); // Optionally, reset the form fields
    });

    // Close pop-up when clicking on the close button
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.querySelector('#popup').style.display = 'none'; // Hide the pop-up
    });

    // Close pop-up when clicking outside of the modal
    window.addEventListener('click', function(event) {
        if (event.target === document.querySelector('#popup')) {
            document.querySelector('#popup').style.display = 'none'; // Hide the pop-up
        }
    });
});
