
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const links = nav.querySelectorAll('a');
    const body = document.body;
  
    // Toggle menu + animation X
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('active');
      burger.classList.toggle('open');
      body.classList.toggle('menu-open');
    });
  
    // Fermer si clic sur un lien
    links.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('open');
        body.classList.remove('menu-open');
      });
    });
  
    // Fermer si clic hors menu
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
        burger.classList.remove('open');
        body.classList.remove('menu-open');
      }
    });
  });