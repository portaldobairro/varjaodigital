document.addEventListener('DOMContentLoaded', () => {
  const comercios = [
    {
      nome: "Padaria Pão Doce",
      setor: "Alimentação",
      endereco: "Rua das Flores, 123",
      telefone: "(61) 9999-9999",
      descricao: "Padaria tradicional com pães fresquinhos e doces variados."
    },
    {
      nome: "Beleza no Varjão",
      setor: "Beleza",
      endereco: "Av. Principal, 456",
      telefone: "(61) 9888-8888",
      descricao: "Salão de beleza com cortes, manicure e estética."
    },
    {
      nome: "Colégio Varjão",
      setor: "Educação",
      endereco: "Rua da Escola, 789",
      telefone: "(61) 9777-7777",
      descricao: "Ensino fundamental e médio com foco em qualidade."
    },
    {
      nome: "Clínica Saúde Viva",
      setor: "Saúde",
      endereco: "Av. Saúde, 101",
      telefone: "(61) 9666-6666",
      descricao: "Atendimento médico e odontológico completo."
    },
    {
      nome: "Serviços Rápidos",
      setor: "Serviços",
      endereco: "Rua do Comércio, 202",
      telefone: "(61) 9555-5555",
      descricao: "Consertos e manutenções rápidas para sua casa."
    }
  ];

  const lista = document.getElementById('listaComercios');
  const buscaInput = document.getElementById('buscaComercio');
  const filtroSetor = document.getElementById('filtroSetor');

  function exibirComercios(filtrados) {
    lista.innerHTML = '';

    if (filtrados.length === 0) {
      lista.innerHTML = '<p style="text-align:center; color:#777;">Nenhum comércio encontrado.</p>';
      return;
    }

    filtrados.forEach(comercio => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3>${comercio.nome}</h3>
        <p><strong>Setor:</strong> ${comercio.setor}</p>
        <p><strong>Endereço:</strong> ${comercio.endereco}</p>
        <p><strong>Telefone:</strong> ${comercio.telefone}</p>
        <p>${comercio.descricao}</p>
      `;

      lista.appendChild(card);
    });
  }

  function filtrarComercios() {
    const busca = buscaInput.value.toLowerCase();
    const setor = filtroSetor.value;

    const filtrados = comercios.filter(c => {
      const nomeMatch = c.nome.toLowerCase().includes(busca);
      const setorMatch = setor === '' || c.setor === setor;
      return nomeMatch && setorMatch;
    });

    exibirComercios(filtrados);
  }

  buscaInput.addEventListener('input', filtrarComercios);
  filtroSetor.addEventListener('change', filtrarComercios);

  // Exibe todos inicialmente
  exibirComercios(comercios);
});
