document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-from-left, .reveal-from-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Once revealed, stop observing
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});