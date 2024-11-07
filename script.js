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