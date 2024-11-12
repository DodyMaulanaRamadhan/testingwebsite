document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service');
    const options = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    });

    services.forEach(service => {
        observer.observe(service);
    });

    options.forEach(option => {
        observer.observe(option);
    });

    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', () => {
            const descriptionFull = button.previousElementSibling; // Full description
            const descriptionShort = button.previousElementSibling.previousElementSibling; // Short description

            // Toggle visibility of descriptions
            descriptionFull.classList.toggle('visible');
            descriptionShort.classList.toggle('hidden');

            // Update button text based on visibility
            if (descriptionFull.classList.contains('visible')) {
                button.innerText = 'Read Less';
            } else {
                button.innerText = 'Read More';
            }
        });
    });
});
