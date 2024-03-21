// Seleciona o modal
const modal = document.getElementById('modal');
// Seleciona o botão de fechar o modal
const closeButton = document.querySelector('.close');
// Seleciona o formulário do usuário
const userForm = document.getElementById('userForm');

// Função para abrir o modal
function openModal() {
  modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
  modal.style.display = 'none';
}

// Evento de clique no botão "Fechar"
closeButton.addEventListener('click', closeModal);

// Evento de clique fora do modal para fechar
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    closeModal();
  }
});

// Evento de envio do formulário do usuário
userForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Previne o envio padrão do formulário

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Exibe uma mensagem de boas-vindas com o nome do usuário
  alert(`Bem-vindo(a), ${name}!`);

  closeModal(); // Fecha o modal após enviar o formulário
});
