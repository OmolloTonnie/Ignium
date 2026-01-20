// main.js

// ===== UTILITY FUNCTIONS =====
const addHoverEffect = (element, transform = 'translateY(-3px)', boxShadow = '0 5px 15px rgba(0,0,0,0.2)') => {
  element.addEventListener('mouseenter', () => {
    element.style.transform = transform;
    element.style.boxShadow = boxShadow;
  });
  element.addEventListener('mouseleave', () => {
    element.style.transform = '';
    element.style.boxShadow = '';
  });
};

// ===== HOMEPAGE =====
if (document.body.classList.contains('homepage')) {
  const pillars = document.querySelector('.pillars');
  if (pillars) {
    const triggerPoint = window.innerHeight / 1.1;
    const checkPillars = () => {
      if (pillars.getBoundingClientRect().top < triggerPoint) {
        pillars.classList.add('visible');
      }
    };
    window.addEventListener('scroll', checkPillars);
    window.addEventListener('load', checkPillars);
  }

  const ctas = document.querySelectorAll('.cta');
  ctas.forEach(cta => {
    // Smooth scroll for hash links
    cta.addEventListener('click', e => {
      const href = cta.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });

    addHoverEffect(cta);
  });
}

// ===== ACADEMY PAGE =====
if (document.body.classList.contains('academy-page')) {
  const sentinelBtn = document.querySelector('.sentinel-cta');
  if (sentinelBtn) addHoverEffect(sentinelBtn, 'translateY(-2px)', '0 4px 12px rgba(0,0,0,0.2)');
}

// ===== CONTACT PAGE =====
if (document.body.classList.contains('contact-page')) {
  const formInputs = document.querySelectorAll('form input, form textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = '#ff7a18'; // var(--orange)
      input.style.boxShadow = '0 0 5px rgba(255,122,24,0.5)';
    });
    input.addEventListener('blur', () => {
      input.style.borderColor = '#00b3ff'; // var(--blue)
      input.style.boxShadow = '';
    });
  });
}

// ===== SOCIAL/COMMUNITY LINKS =====
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
  // Open external links in new tab
  link.setAttribute('target', '_blank');

  addHoverEffect(link, 'translateY(-2px)', ''); // hover transform only
});
