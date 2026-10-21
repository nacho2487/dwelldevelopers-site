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
  // (se revisa en cada scroll para no saltear nada con un scroll rápido)
  var pending = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  var ticking = false;
  function reveal() {
    ticking = false;
    var limit = window.innerHeight * 0.92;
    pending = pending.filter(function (el) {
      if (el.getBoundingClientRect().top < limit) {
        el.classList.add('is-visible');
        return false;
      }
      return true;
    });
    if (!pending.length) window.removeEventListener('scroll', onRevealScroll);
  }
  function onRevealScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(reveal);
    }
  }
  window.addEventListener('scroll', onRevealScroll, { passive: true });
  window.addEventListener('resize', onRevealScroll);
  reveal();

  // Lightbox de galerías
  var lb = document.querySelector('[data-lightbox-root]');
  if (lb) {
    var links = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
    var lbImg = lb.querySelector('[data-lb-img]');
    var lbCap = lb.querySelector('[data-lb-caption]');
    var idx = 0;
    function show(i) {
      idx = (i + links.length) % links.length;
      lbImg.src = links[idx].getAttribute('href');
      lbImg.alt = links[idx].getAttribute('data-caption') || '';
      lbCap.textContent = links[idx].getAttribute('data-caption') || '';
    }
    function open(i) {
      show(i);
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        open(i);
      });
    });
    lb.querySelector('[data-lb-close]').addEventListener('click', close);
    lb.querySelector('[data-lb-prev]').addEventListener('click', function () {
      show(idx - 1);
    });
    lb.querySelector('[data-lb-next]').addEventListener('click', function () {
      show(idx + 1);
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lb) close();
    });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
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
