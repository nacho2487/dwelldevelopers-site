(function () {
  var doc = document.documentElement;
  doc.classList.add('js');

  // Header: fondo al hacer scroll y se oculta al bajar
  var header = document.querySelector('[data-header]');
  var lastY = window.scrollY;
  function onScroll() {
    var y = window.scrollY;
    if (header) {
      header.classList.toggle('is-scrolled', y > 40);
      var hide = y > lastY && y > 400 && !document.body.classList.contains('menu-open');
      header.classList.toggle('is-hidden', hide);
    }
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menú mobile
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-mobile-menu]');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
    if (menu) menu.setAttribute('aria-hidden', String(!open));
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(!document.body.classList.contains('menu-open'));
    });
  }
  document.querySelectorAll('[data-menu-close]').forEach(function (a) {
    a.addEventListener('click', function () {
      setMenu(false);
    });
  });

  // Aparición de elementos al hacer scroll
  var items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    items.forEach(function (el) {
      io.observe(el);
    });
  } else {
    items.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // Slider del hero
  var hero = document.querySelector('[data-hero]');
  if (hero) {
    var slides = hero.querySelectorAll('[data-slide]');
    var dots = hero.querySelectorAll('[data-dot]');
    var current = 0;
    var DURATION = 7000;
    var timer;
    hero.style.setProperty('--slide-ms', DURATION + 'ms');
    function go(i) {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      // reinicia la animación de la barra
      var bar = dots[current];
      bar.classList.remove('is-active');
      void bar.offsetWidth;
      bar.classList.add('is-active');
      clearTimeout(timer);
      timer = setTimeout(function () {
        go(current + 1);
      }, DURATION);
    }
    dots.forEach(function (d) {
      d.addEventListener('click', function () {
        go(Number(d.getAttribute('data-dot')));
      });
    });
    if (slides.length > 1) {
      timer = setTimeout(function () {
        go(1);
      }, DURATION);
    }
  }
})();
