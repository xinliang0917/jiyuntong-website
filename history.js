document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // 一旦元素进入视口并激活动画，就停止观察它
            }
        });
    }, {
        threshold: 0.1 // 当元素10%进入视口时触发
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});