document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth follow for outline
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hero Animation
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('load', () => {
        heroBg.style.transform = 'scale(1)';
    });

    // Parallax Effect
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroBg.style.transform = `translateY(${scrollY * 0.5}px) scale(1)`;
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.text-reveal').forEach(el => observer.observe(el));
});
