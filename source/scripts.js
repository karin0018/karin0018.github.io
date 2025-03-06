document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Effect
    const textElement = document.querySelector('.typewriter');
    const text = textElement.textContent;
    textElement.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust speed here
        }
    }
    type();

    // IntersectionObserver for Animations
    const elements = document.querySelectorAll('.fade-in, .slide-in, .scale-up, .color-transition');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => observer.observe(element));

    // Parallax Scrolling
    document.addEventListener('scroll', function() {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed'));
            const offset = window.scrollY * speed;
            element.style.transform = `translateY(${offset}px)`;
        });
    });
});