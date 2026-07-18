// Sliding testimonials functionality
let currentTestimonial = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');

function showTestimonial(index) {
  if (slides.length === 0) return;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  if (slides.length === 0) return;
  currentTestimonial = (currentTestimonial + 1) % slides.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  if (slides.length === 0) return;
  currentTestimonial = (currentTestimonial - 1 + slides.length) % slides.length;
  showTestimonial(currentTestimonial);
}

if (slides.length > 0) {
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevTestimonial);
    nextBtn.addEventListener('click', nextTestimonial);
  }
  // Auto-slide every 6 seconds
  setInterval(nextTestimonial, 6000);
  // Show first testimonial on load
  showTestimonial(currentTestimonial);
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('show');
      }
    });
  }
});
