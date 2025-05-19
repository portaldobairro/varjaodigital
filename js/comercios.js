// Dados dos comércios
const comercios = [
  {
    id: 1,
    nome: "Panificadora Bonanza",
    categoria: "alimentacao",
    endereco: "Varjão", 
    telefone: "(61) 0000-0000",
    descricao: "Padaria tradicional com os melhores pães e doces da região.",
    fotos: [
      "img/comercios/panificadora-bonanza-1.jpg",
      "img/comercios/panificadora-bonanza-2.jpg",
      "img/comercios/panificadora-bonanza-3.jpg"
    ],
    destaque: true
  },
  {
    id: 2,
    nome: "Nazar Roupas",
    categoria: "vestuario",
    endereco: "Varjão", 
    telefone: "(61) 0000-0000",
    descricao: "Mercado completo com variedade de produtos.",
    fotos: [
      "img/comercios/nazar-roupas-1.jpg"
    ],
    destaque: true
  },
  {
    id: 3,
    nome: "Granfinos Burguer",
    categoria: "alimentacao",
    endereco: "Varjão", 
    telefone: "(61) 0000-0000",
    descricao: "Moda para toda a família com os melhores preços.",
    fotos: [
      "img/comercios/granfinos-burguer-1.jpg"
    ],
    destaque: false
  },
  {
    id: 4,
    nome: "Farmácia Atacadão",
    categoria: "saude",
    endereco: "Varjão", 
    telefone: "(61) 0000-0000",
    descricao: "Farmácia completa com medicamentos e produtos de saúde.",
    fotos: [
      "img/comercios/farmacia-atacadao-1.jpg"
    ],
    destaque: true
  },
  {
    id: 5,
    nome: "Casa Lins",
    categoria: "servicos",
    endereco: "Varjão", 
    telefone: "(61) 0000-0000",
    descricao: "Cabelo, manicure, pedicure e tratamentos estéticos.",
    fotos: [
      "img/comercios/casa-lins-1.jpg"
    ],
    destaque: false
  },
  {
    id: 6,
    nome: "Conexão Games",
    categoria: "servicos",
    endereco: "Varjão", 
    telefone: "(61) 0000-0000",  
    descricao: "Loja de games e eletrônicos.",
    fotos: [
      "img/comercios/conexao-games-1.jpg"
    ],
    destaque: true
  }
];

// Elementos DOM
const comerciosContainer = document.getElementById('comerciosContainer');
const buscaInput = document.getElementById('buscaComercio');
const filtroCategoria = document.getElementById('filtroCategoria');
const destaquesContainer = document.getElementById('destaquesContainer');

// Modal
const modal = document.getElementById('galeriaModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Estado da galeria
let currentGallery = {
  comercioId: null,
  currentIndex: 0,
  fotos: []
};

// Função para renderizar os cards
function renderCards(comercios, container) {
  container.innerHTML = '';
  
  if (comercios.length === 0) {
    container.innerHTML = '<p class="no-results">Nenhum comércio encontrado.</p>';
    return;
  }
  
  comercios.forEach(comercio => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-img">
        <img src="${comercio.fotos[0]}" alt="${comercio.nome}">
        ${comercio.destaque ? '<span class="card-badge">Destaque</span>' : ''}
      </div>
      <div class="card-content">
        <h3 class="card-title">${comercio.nome}</h3>
        <p class="card-address"><i class="fas fa-map-marker-alt"></i> ${comercio.endereco}</p>
        <p class="card-phone"><i class="fas fa-phone"></i> ${comercio.telefone}</p>
        <p class="card-description">${comercio.descricao}</p>
        
        <div class="gallery">
          ${comercio.fotos.map((foto, index) => `
            <div class="gallery-item" onclick="openGallery(${comercio.id}, ${index})">
              <img src="${foto}" alt="${comercio.nome} - Foto ${index + 1}">
            </div>
          `).join('')}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Função para filtrar os comércios
function filterComercios() {
  const searchTerm = buscaInput.value.toLowerCase();
  const category = filtroCategoria.value;
  
  const filtered = comercios.filter(comercio => {
    const matchesSearch = comercio.nome.toLowerCase().includes(searchTerm) || 
                         comercio.descricao.toLowerCase().includes(searchTerm);
    const matchesCategory = category === '' || comercio.categoria === category;
    return matchesSearch && matchesCategory;
  });
  
  renderCards(filtered, comerciosContainer);
}

// Função para abrir a galeria
function openGallery(comercioId, fotoIndex) {
  const comercio = comercios.find(c => c.id === comercioId);
  if (!comercio) return;
  
  currentGallery = {
    comercioId,
    currentIndex: fotoIndex,
    fotos: comercio.fotos
  };
  
  modalImage.src = comercio.fotos[fotoIndex];
  modalImage.alt = `${comercio.nome} - Foto ${fotoIndex + 1}`;
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

// Função para fechar a galeria
function closeGallery() {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// Função para navegar entre as fotos
function navigateGallery(direction) {
  let newIndex = currentGallery.currentIndex + direction;
  
  if (newIndex < 0) {
    newIndex = currentGallery.fotos.length - 1;
  } else if (newIndex >= currentGallery.fotos.length) {
    newIndex = 0;
  }
  
  currentGallery.currentIndex = newIndex;
  modalImage.src = currentGallery.fotos[newIndex];
  modalImage.alt = `${comercios.find(c => c.id === currentGallery.comercioId).nome} - Foto ${newIndex + 1}`;
}

// Event Listeners
buscaInput.addEventListener('input', filterComercios);
filtroCategoria.addEventListener('change', filterComercios);
closeModal.addEventListener('click', closeGallery);
prevBtn.addEventListener('click', () => navigateGallery(-1));
nextBtn.addEventListener('click', () => navigateGallery(1));

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeGallery();
  }
});

// Navegação por teclado
document.addEventListener('keydown', (e) => {
  if (modal.classList.contains('show')) {
    if (e.key === 'Escape') {
      closeGallery();
    } else if (e.key === 'ArrowLeft') {
      navigateGallery(-1);
    } else if (e.key === 'ArrowRight') {
      navigateGallery(1);
    }
  }
});

// Inicialização
function init() {
  // Renderizar todos os comércios
  renderCards(comercios, comerciosContainer);
  
  // Renderizar destaques na página inicial
  if (destaquesContainer) {
    const destaques = comercios.filter(c => c.destaque);
    renderCards(destaques, destaquesContainer);
  }
}

// Exportar funções para o escopo global
window.openGallery = openGallery;

// Iniciar
document.addEventListener('DOMContentLoaded', init);
