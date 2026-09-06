/* ============================================
   MAIN JS — Parsian Dental Clinic
   ============================================ */
(function() {
  'use strict';

  /* ── Header Scroll ── */
  const header = document.getElementById('header') || document.querySelector('.header');
  if (header) {
    var lastScrollY = 0;
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          var currentScrollY = window.scrollY;
          if (currentScrollY > 80) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          if (currentScrollY > lastScrollY && currentScrollY > 200 && !header.classList.contains('menu-open')) {
            header.classList.add('hidden');
          } else {
            header.classList.remove('hidden');
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── Mobile Menu ── */
  var mobileToggle = document.querySelector('.mobile-toggle');
  var mobileMenu = document.getElementById('mobileMenu') || document.querySelector('.mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
      if (header) {
        header.classList.toggle('menu-open');
        if (mobileMenu.classList.contains('active')) {
          header.classList.remove('hidden');
        }
      }
    });
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
        if (header) header.classList.remove('menu-open');
      });
    });
  }

  /* ── Mobile Menu Dropdown Accordion ── */
  var dropdowns = document.querySelectorAll('.mobile-menu__dropdown');
  dropdowns.forEach(function(dropdown) {
    var trigger = dropdown.querySelector('.mobile-menu__link--has-sub');
    var submenu = dropdown.querySelector('.mobile-menu__submenu');
    if (trigger && submenu) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        var isActive = dropdown.classList.contains('active');
        dropdowns.forEach(function(d) {
          d.classList.remove('active');
          var sub = d.querySelector('.mobile-menu__submenu');
          if (sub) sub.style.maxHeight = null;
        });
        if (!isActive) {
          dropdown.classList.add('active');
          submenu.style.maxHeight = submenu.scrollHeight + 'px';
        }
      });
    }
  });

  /* ── Scroll Reveal ── */
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(function(el) { revealObserver.observe(el); });
  }

  /* ── Counter Animation ── */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-count'));
          var suffix = el.getAttribute('data-suffix') || '';
          var prefix = el.getAttribute('data-prefix') || '';
          var duration = 2000;
          var startTime = performance.now();
          function update(currentTime) {
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(target * eased);
            el.textContent = prefix + current.toLocaleString('fa-IR') + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function(el) { counterObserver.observe(el); });
  }

  /* ── Accordion ── */
  document.querySelectorAll('.accordion-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      var item = trigger.closest('.accordion-item');
      var content = item.querySelector('.accordion-content');
      var isActive = item.classList.contains('active');
      item.closest('.accordion').querySelectorAll('.accordion-item').forEach(function(sibling) {
        sibling.classList.remove('active');
        var c = sibling.querySelector('.accordion-content');
        if (c) c.style.maxHeight = null;
      });
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  /* ── Back to Top ── */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Smooth Scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ── Active Nav Link ── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(function(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var linkPage = href.split('/').pop();
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Dynamic Year ── */
  document.querySelectorAll('[data-year]').forEach(function(el) {
    el.textContent = new Date().getFullYear();
  });

})();
