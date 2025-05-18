document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulação de login bem-sucedido
    alert('Login realizado com sucesso! Redirecionando...');
    window.location.href = 'comercios.html';
  });
});
