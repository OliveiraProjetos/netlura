# Netoflix - Página de Seleção de Perfis

Uma página web inspirada na interface da Netflix para seleção e gerenciamento de perfis de usuário. Inclui tema escuro/claro, tela de carregamento animada com som, e funcionalidades de CRUD para perfis.

## Funcionalidades

- **Seleção de Perfis**: Interface para escolher entre perfis disponíveis, com links para a página do catálogo.
- **Gerenciamento de Perfis**: Modal para adicionar, editar e excluir perfis, com upload de imagens.
- **Tema Dinâmico**: Alternância entre tema escuro e claro, com persistência no localStorage.
- **Tela de Carregamento**: Animação de pulsação da logo "NETOFLIX" com som de fundo, simulando uma intro impactante.
- **Responsividade**: Design adaptável para dispositivos móveis, tablets e desktops.
- **Acessibilidade**: Atributos ARIA e navegação por teclado.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilos, animações e responsividade.
- **JavaScript (Vanilla)**: Lógica de interação, gerenciamento de perfis e animações controladas.
- **localStorage**: Persistência de temas e perfis.

## Estrutura de Arquivos

```
netflix/
├── index.html          # Página principal com seleção de perfis
├── style.css           # Estilos CSS para layout e temas
├── theme.js            # Script para alternância de temas
├── manage.js           # Script para gerenciamento de perfis (CRUD)
├── js/
│   └── index.js        # Script para tela de carregamento e animações
├── assets/             # Imagens dos perfis
├── catalogo/           # Página de catálogo adaptada de outro projeto
└── README.md           # Este arquivo
```

## Como Usar

> ⚠️ Este projeto requer um servidor local para funcionar corretamente (imagens, navegação e scripts podem falhar ao abrir o arquivo diretamente).

1. **Clonagem/Instalação**:
   - Baixe ou clone o repositório.

2. **Executar o Projeto (Servidor Local)**:
   - Para garantir o carregamento correto de imagens, navegação entre páginas e execução de scripts, execute um servidor local:
   - Abra o terminal na pasta do projeto e execute o seguinte comando:
     ```
     python3 -m http.server 8000
     ```
   - Em seguida, abra o navegador e acesse: `http://localhost:8000/index.html`.

## Como Usar a Interface

- Selecione um perfil clicando na imagem/figura.
- Use o botão "Gerenciar Perfis" para adicionar, editar ou excluir perfis.
- Clique no botão de tema (canto superior direito) para alternar entre escuro e claro.

## Funcionalidades Detalhadas

### Tela de Carregamento
- Exibe a logo "NETOFLIX" com animação de pulsação: 6 pulsações em duplas (2 rápidas de 0.25s cada, com pausa de 0.25s entre elas, e pausa de 1s entre duplas).
- Reproduz um som de sino durante a animação.
- Dura 3 segundos antes de revelar a página principal.

### Gerenciamento de Perfis
- **Adicionar**: Clique em "Adicionar Perfil" no modal.
- **Editar**: Clique em "Editar" em um perfil existente.
- **Excluir**: Clique em "Excluir" e confirme.
- Imagens são armazenadas como base64 no localStorage.

### Tema
- Detecta preferência do sistema automaticamente.
- Salva escolha do usuário.

## Desenvolvimento

- **Edição**: Use qualquer editor de texto ou IDE (ex.: VS Code).
- **Teste**: Abra em navegadores como Chrome, Firefox, etc.
- **Depuração**: Verifique o console para erros de JavaScript.

## Créditos

A página de catálogo foi adaptada a partir de um projeto disponibilizado em um curso educacional.

Repositório original: https://github.com/guilhermeonrails/netflix-plataform/tree/main

---

Desenvolvido com inspiração na interface da Netflix.
