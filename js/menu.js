// Controle do menu responsivo em todas as páginas
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      if (navUl.style.display === 'flex') {
        navUl.style.display = 'none';
      } else {
        navUl.style.display = 'flex';
        navUl.style.flexDirection = 'column';
        navUl.style.backgroundColor = '#1e3d2f';
        navUl.style.position = 'absolute';
        navUl.style.top = '60px';
        navUl.style.right = '20px';
        navUl.style.padding = '1rem';
        navUl.style.borderRadius = '8px';
      }
    });
  }
});
