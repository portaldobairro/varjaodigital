const comercios = [
  {
    nome: "Padaria Pão Quente",
    setor: "Alimentação",
    descricao: "Pães fresquinhos todos os dias, bolos e salgados deliciosos.",
    url: "#"
  },
  {
    nome: "Oficina do João",
    setor: "Serviços",
    descricao: "Reparos rápidos em veículos, mecânica e elétrica.",
    url: "#"
  },
  {
    nome: "Boutique Varjão",
    setor: "Vestuário",
    descricao: "Moda feminina e masculina com preços acessíveis.",
    url: "#"
  },
  {
    nome: "Academia Vida Ativa",
    setor: "Saúde",
    descricao: "Equipamentos modernos e aulas de pilates e yoga.",
    url: "#"
  },
  {
    nome: "Cinema Varjão",
    setor: "Lazer",
    descricao: "Os últimos lançamentos e sessões especiais para a família.",
    url: "#"
  }
];

const listaComercios = document.getElementById('lista-comercios');
const buscaInput = document.getElementById('busca');
const filtroSetor = document.getElementById('filtro-setor');

function renderizarCards() {
  const buscaTexto = buscaInput.value.toLowerCase();
  const setorSelecionado = filtroSetor.value;

  listaComercios.innerHTML = '';

  const filtrados = comercios.filter(comercio => {
    const nomeMatch = comercio.nome.toLowerCase().includes(buscaTexto);
    const setorMatch = setorSelecionado === '' || comercio.setor === setorSelecionado;
    return nomeMatch && setorMatch;
  });

  if (filtrados.length === 0) {
    listaComercios.innerHTML = `<p style="text-align:center; color:#666;">Nenhum comércio encontrado.</p>`;
    return;
  }

  filtrados.forEach(comercio => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <h2>${comercio.nome}</h2>
      <p class="setor">${comercio.setor}</p>
      <p>${comercio.descricao}</p>
      <a href="${comercio.url}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
    `;

    listaComercios.appendChild(card);
  });
}

buscaInput.addEventListener('input', renderizarCards);
filtroSetor.addEventListener('change', renderizarCards);

renderizarCards();
