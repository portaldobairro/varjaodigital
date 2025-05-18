// Dados simulados dos comércios (você pode atualizar ou carregar via API no futuro)
const comercios = [
  {
    nome: "Padaria Pão Nosso",
    setor: "alimentacao",
    endereco: "Rua A, 123",
    telefone: "(61) 99999-0001",
    descricao: "Pães fresquinhos todos os dias."
  },
  {
    nome: "Loja de Roupas Varjão",
    setor: "vestuario",
    endereco: "Rua B, 456",
    telefone: "(61) 99999-0002",
    descricao: "Moda para toda a família."
  },
  {
    nome: "Clinica Saúde Varjão",
    setor: "saude",
    endereco: "Av. Central, 789",
    telefone: "(61) 99999-0003",
    descricao: "Atendimento médico e exames."
  },
  {
    nome: "Bar do Lazer",
    setor: "lazer",
    endereco: "Rua C, 101",
    telefone: "(61) 99999-0004",
    descricao: "Ambiente agradável com música ao vivo."
  },
  {
    nome: "Serviços Gerais Varjão",
    setor: "servicos",
    endereco: "Rua D, 202",
    telefone: "(61) 99999-0005",
    descricao: "Pequenos reparos e serviços domésticos."
  }
];

// Referências aos elementos do DOM
const buscaInput = document.getElementById('buscaComercio');
const filtroSetor = document.getElementById('filtroSetor');
const cardsContainer = document.getElementById('cardsContainer');

// Função para criar e mostrar os cards filtrados
function mostrarCards() {
  const busca = buscaInput.value.toLowerCase();
  const setorSelecionado = filtroSetor.value;

  // Limpa container antes de atualizar
  cardsContainer.innerHTML = '';

  const filtrados = comercios.filter(c => {
    const nomeMatch = c.nome.toLowerCase().includes(busca);
    const setorMatch = setorSelecionado === '' || c.setor === setorSelecionado;
    return nomeMatch && setorMatch;
  });

  if (filtrados.length === 0) {
    cardsContainer.innerHTML = '<p>Nenhum comércio encontrado.</p>';
    return;
  }

  filtrados.forEach(c => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <h3>${c.nome}</h3>
      <p><strong>Setor:</strong> ${capitalize(c.setor)}</p>
      <p><strong>Endereço:</strong> ${c.endereco}</p>
      <p><strong>Telefone:</strong> ${c.telefone}</p>
      <p>${c.descricao}</p>
    `;

    cardsContainer.appendChild(card);
  });
}

// Função auxiliar para capitalizar palavra
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Eventos para filtro e busca
buscaInput.addEventListener('input', mostrarCards);
filtroSetor.addEventListener('change', mostrarCards);

// Mostrar todos ao carregar a página
mostrarCards();
