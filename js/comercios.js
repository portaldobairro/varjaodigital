document.addEventListener('DOMContentLoaded', () => {
  const comercios = [
    {
      nome: "Padaria Pão Doce",
      setor: "Alimentação",
      endereco: "Rua das Flores, 123",
      telefone: "(61) 99999-9999"
    },
    {
      nome: "Oficina Mecânica Silva",
      setor: "Serviços",
      endereco: "Av. Principal, 456",
      telefone: "(61) 98888-8888"
    },
    {
      nome: "Bar do Zé",
      setor: "Lazer",
      endereco: "Rua do Lazer, 789",
      telefone: "(61) 97777-7777"
    },
    {
      nome: "Mercado Varjão",
      setor: "Alimentação",
      endereco: "Praça Central, 10",
      telefone: "(61) 96666-6666"
    },
  ];

  const listaComercios = document.getElementById('lista-comercios');
  const inputBusca = document.getElementById('busca');
  const selectSetor = document.getElementById('filtro-setor');

  function criarCard(comercio) {
    const card = document.createElement('article');
    card.classList.add('card-comercio');

    card.innerHTML = `
      <h3>${comercio.nome}</h3>
      <p class="setor">${comercio.setor}</p>
      <p class="endereco">${comercio.endereco}</p>
      <p class="telefone">${comercio.telefone}</p>
    `;

    return card;
  }

  function filtrarComercios() {
    const buscaTexto = inputBusca.value.toLowerCase();
    const setorSelecionado = selectSetor.value;

    // Limpa a lista
    listaComercios.innerHTML = '';

    // Filtra e adiciona cards
    const comerciosFiltrados = comercios.filter(c => {
      const nomeMatch = c.nome.toLowerCase().includes(buscaTexto);
      const setorMatch = setorSelecionado === '' || c.setor === setorSelecionado;
      return nomeMatch && setorMatch;
    });

    if (comerciosFiltrados.length === 0) {
      listaComercios.innerHTML = '<p>Nenhum comércio encontrado.</p>';
      return;
    }

    comerciosFiltrados.forEach(c => {
      listaComercios.appendChild(criarCard(c));
    });
  }

  // Eventos de filtro
  inputBusca.addEventListener('input', filtrarComercios);
  selectSetor.addEventListener('change', filtrarComercios);

  // Inicializa a lista
  filtrarComercios();
});
