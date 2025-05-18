document.addEventListener("DOMContentLoaded", () => {
  const inputBusca = document.getElementById("buscaInput");
  const filtroSetor = document.getElementById("filtroSetor");
  const cards = document.querySelectorAll(".card");

  function filtrarComercios() {
    const texto = inputBusca.value.toLowerCase();
    const setorSelecionado = filtroSetor.value;

    cards.forEach(card => {
      const nome = card.querySelector("h4").textContent.toLowerCase();
      const setor = card.dataset.setor;

      const correspondeTexto = nome.includes(texto);
      const correspondeSetor = setorSelecionado === "Todos os setores" || setor === setorSelecionado;

      if (correspondeTexto && correspondeSetor) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  inputBusca.addEventListener("input", filtrarComercios);
  filtroSetor.addEventListener("change", filtrarComercios);

  // Função para alternar o menu de navegação no modo responsivo
  function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
  }

  // Não é necessário adicionar mais nada aqui, a função será chamada automaticamente quando o ícone for clicado
});
