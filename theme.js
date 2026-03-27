const body = document.body;
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  body.classList.toggle('light', theme === 'light');
  themeToggle.setAttribute('aria-pressed', theme === 'light');
  localStorage.setItem('netflix-theme', theme);
}

function getSavedTheme() {
  const saved = localStorage.getItem('netflix-theme');
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }

  // Padrão baseado em preferência do sistema
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function toggleTheme() {
  const current = body.classList.contains('light') ? 'light' : 'dark';
  setTheme(current === 'light' ? 'dark' : 'light');
}

// Inicialização
const initialTheme = getSavedTheme();
setTheme(initialTheme);

themeToggle.addEventListener('click', toggleTheme);
