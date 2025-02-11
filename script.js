document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.animate-slide');
    const images = Array.from(galleryContainer.children);
  
    // Clone images to create an infinite loop
    images.forEach(img => {
      const clone = img.cloneNode(true);
      galleryContainer.appendChild(clone);
    });
  });
  

// JavaScript for burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// JavaScript for transitioning from opening page to main content
function smoothScroll(target, duration) {
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.getElementById('enter-site').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('opening-page').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    smoothScroll(document.getElementById('main-content'), 1000); // Adjust duration as needed
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


