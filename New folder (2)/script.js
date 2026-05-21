  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function goHome() { showPage('home'); }
  function toggleMobile() { document.getElementById('mob-menu').classList.toggle('open'); }
  function closeMobile() { document.getElementById('mob-menu').classList.remove('open'); }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        showPage('home');
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    });
  });

  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 60); });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  function doToast(type) {
    const t = document.getElementById('toast');
    t.textContent = type === 'quote' ? '✓ Quote submitted — our operations team will contact you within 2 hours.' : '✓ Message sent — our team will respond shortly.';
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);
  }