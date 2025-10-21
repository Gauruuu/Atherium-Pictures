document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const sections = document.querySelectorAll('.content-section');

    // 1. Splash Screen Timing
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.classList.remove('hidden'); 
            document.body.style.overflowY = 'auto'; 
            document.getElementById('home').classList.add('in-view'); 
        }, 1000); 
    }, 2800); 

    // 2. Scroll Animation (Intersection Observer)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        if (section.id !== 'home') { 
            observer.observe(section);
        }
    });

    // 3. Form Handling (Web3Forms handles submission, no JS needed for validation/submission logic)
    // Removed the form.addEventListener('submit', ...) block to let Web3Forms take over.

    // 4. Smooth Scrolling for Navigation
    document.querySelectorAll('#navbar nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});