// main.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Ignium systems online...");

  // ===== HOMEPAGE =====
  if (document.body.classList.contains('homepage')) {
    // Fade-in pillars
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

    // CTA buttons smooth scroll
    const ctas = document.querySelectorAll('.cta');
    ctas.forEach(cta => {
      cta.addEventListener('click', e => {
        const href = cta.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // CTA hover animation
    ctas.forEach(cta => {
      cta.addEventListener('mouseenter', () => {
        cta.style.transform = 'translateY(-3px)';
        cta.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
      });
      cta.addEventListener('mouseleave', () => {
        cta.style.transform = '';
        cta.style.boxShadow = '';
      });
    });
  }

  // ===== ACADEMY PAGE =====
  if (document.body.classList.contains('academy-page')) {
    const sentinelBtn = document.querySelector('.sentinel-cta');
    if (sentinelBtn) {
      sentinelBtn.addEventListener('mouseenter', () => {
        sentinelBtn.style.transform = 'translateY(-2px)';
        sentinelBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
      });
      sentinelBtn.addEventListener('mouseleave', () => {
        sentinelBtn.style.transform = '';
        sentinelBtn.style.boxShadow = '';
      });
    }
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

    // Hover effect
    link.addEventListener('mouseenter', () => {
      link.style.color = '#ff7a18'; // var(--orange)
      link.style.transform = 'translateY(-2px)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '';
      link.style.transform = '';
    });

    // Optional: log click to console for now
    link.addEventListener('click', () => {
      console.log(`Social link clicked: ${link.href}`);
    });
  });

  // ===== COLLAPSIBLE NAV MENU =====
 <script>
const toggle = document.getElementById("menuToggle");
const nav = document.querySelector(".site-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
</script>

});
<script>
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');  // slide menu in/out
  mobileMenu.classList.toggle('open'); // optional for animation
});
</script>
