/* ============================================================
   Aromas by Anu – script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar scroll effect ---- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ---- Mobile hamburger toggle ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---- Scroll‑triggered animations (data-aos elements) ---- */
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation for siblings
        const siblings = entry.target.parentElement.querySelectorAll('[data-aos]');
        const idx = Array.from(siblings).indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.1}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

  /* ---- Contact form → WhatsApp redirect ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = contactForm.querySelector('#formName')?.value || '';
      const message = contactForm.querySelector('#formMessage')?.value || '';
      const text = encodeURIComponent(
        `Hi Anu! My name is ${name}. ${message}`
      );
      window.open(`https://wa.me/919342074491?text=${text}`, '_blank');
    });
  }

  /* ---- Home page Send a Message form → WhatsApp redirect ---- */
  const homeContactForm = document.getElementById('homeContactForm');
  if (homeContactForm) {
    homeContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = document.getElementById('homeName')?.value || '';
      const phone   = document.getElementById('homePhone')?.value || '';
      const message = document.getElementById('homeMessage')?.value || '';
      const parts = [`Hi Anu! My name is ${name}.`];
      if (phone) parts.push(`My number: ${phone}.`);
      if (message) parts.push(message);
      const text = encodeURIComponent(parts.join(' '));
      window.open(`https://wa.me/919342074491?text=${text}`, '_blank');
    });
  }
});
