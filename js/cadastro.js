document.addEventListener('DOMContentLoaded', function() {
  const cadastroForm = document.getElementById('cadastroForm');
  
  cadastroForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    
    if (senha.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres!');
      return;
    }
    
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    
    // Simulação de cadastro bem-sucedido
    alert('Cadastro realizado com sucesso! Redirecionando para login...');
    window.location.href = 'login.html';
  });
});
