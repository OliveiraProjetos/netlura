// Obtém referências aos elementos
const body = document.body; // Corpo do documento
const themeToggle = document.getElementById('themeToggle'); // Botão de alternância

// Função para definir o tema
function setTheme(theme) {
  body.classList.toggle('light', theme === 'light'); // Adiciona/remova classe 'light'
  themeToggle.setAttribute('aria-pressed', theme === 'light'); // Atualiza atributo de acessibilidade
  localStorage.setItem('netflix-theme', theme); // Salva no localStorage
}

// Função para obter o tema salvo
function getSavedTheme() {
  const saved = localStorage.getItem('netflix-theme'); // Recupera do localStorage
  if (saved === 'light' || saved === 'dark') {
    return saved; // Retorna se válido
  }

  // Padrão baseado em preferência do sistema
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Função para alternar o tema
function toggleTheme() {
  const current = body.classList.contains('light') ? 'light' : 'dark'; // Determina o atual
  setTheme(current === 'light' ? 'dark' : 'light'); // Alterna
}

// Inicialização
const initialTheme = getSavedTheme(); // Obtém o tema inicial
setTheme(initialTheme); // Aplica o tema inicial

themeToggle.addEventListener('click', toggleTheme); // Adiciona evento de clique
