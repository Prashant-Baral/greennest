// ============================================
//  GreenNest — main.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky header shadow ---
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    // Close on outside click
    document.addEventListener('click', e => {
      if (!header.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Product filter buttons (products.html) ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categories = document.querySelectorAll('.product-category');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      categories.forEach(cat => {
        if (filter === 'all' || cat.id === filter) {
          cat.style.display = '';
        } else {
          cat.style.display = 'none';
        }
      });
    });
  });

  // --- Newsletter form feedback ---
  const forms = document.querySelectorAll('.newsletter-form, .contact-form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = '✅ Done!';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = btn.dataset.original || 'Subscribe';
          btn.disabled = false;
        }, 3000);
      }
    });
  });

  // --- Contact form submit text ---
  const contactBtn = document.querySelector('.contact-form button[type="submit"]');
  if (contactBtn) contactBtn.dataset.original = 'Send Message 🌿';

  // --- Animate product cards on scroll (IntersectionObserver) ---
  const cards = document.querySelectorAll('.product-card, .blog-card, .value-card, .team-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(16px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s ease';
      observer.observe(card);
    });
  }

  // --- Active nav link highlight ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

});
