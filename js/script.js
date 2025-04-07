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
});
