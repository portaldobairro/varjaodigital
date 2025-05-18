document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  
  // Alternar menu mobile
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  });
  
  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
      }
    });
  });
  
  // Fechar menu ao redimensionar a tela
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
    }
  });
});
