// Gerenciamento de perfis
let profiles = JSON.parse(localStorage.getItem('netflix-profiles')) || [
    { name: 'Gustavo', image: '/assets/perfil-1.jpg' },
    { name: 'Thiago', image: '/assets/perfil-2.jpg' },
    { name: 'Bruno', image: '/assets/perfil-3.jpeg' },
    { name: 'Felipe', image: '/assets/perfil-4.jpeg' }
];

const manageBtn = document.getElementById('manageProfilesBtn');
const manageModal = document.getElementById('manageModal');
const editModal = document.getElementById('editModal');
const closeManage = document.querySelector('.close');
const closeEdit = document.querySelector('.close-edit');
const addProfileBtn = document.getElementById('addProfileBtn');
const profileForm = document.getElementById('profileForm');
const profileName = document.getElementById('profileName');
const profileImage = document.getElementById('profileImage');
const imagePreview = document.getElementById('imagePreview');
const editTitle = document.getElementById('editTitle');
const profilesContainer = document.getElementById('profilesContainer');

let editingIndex = -1;

function setActiveProfile(index) {
    const profile = profiles[index];
    if (!profile) return;
    localStorage.setItem('perfilAtivoNome', profile.name);
    localStorage.setItem('perfilAtivoImagem', profile.image);
}

// Função para renderizar perfis na página principal
function renderMainProfiles() {
    const profilesList = document.querySelector('.profiles');
    profilesList.innerHTML = '';
    profiles.forEach((profile, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="catalogo/catalogo.html" class="profile" data-index="${index}">
                <figure>
                    <img src="${profile.image}" alt="${profile.name}">
                    <figcaption>${profile.name}</figcaption>
                </figure>
            </a>
        `;
        profilesList.appendChild(li);
    });

    profilesList.querySelectorAll('a.profile').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const index = anchor.dataset.index;
            if (index != null) {
                setActiveProfile(index);
            }
        });
    });
}

// Função para renderizar perfis no modal de gerenciamento
function renderManageProfiles() {
    profilesContainer.innerHTML = '';
    profiles.forEach((profile, index) => {
        const div = document.createElement('div');
        div.className = 'profile-item';
        div.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
            <span>${profile.name}</span>
            <button class="edit-btn" data-index="${index}">Editar</button>
            <button class="delete-btn" data-index="${index}">Excluir</button>
        `;
        profilesContainer.appendChild(div);
    });
}

// Abrir modal de gerenciamento
manageBtn.addEventListener('click', () => {
    renderManageProfiles();
    manageModal.style.display = 'block';
});

// Fechar modais
closeManage.addEventListener('click', () => manageModal.style.display = 'none');
closeEdit.addEventListener('click', () => editModal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === manageModal) manageModal.style.display = 'none';
    if (e.target === editModal) editModal.style.display = 'none';
});

// Adicionar perfil
addProfileBtn.addEventListener('click', () => {
    editingIndex = -1;
    editTitle.textContent = 'Criar Perfil';
    profileForm.reset();
    imagePreview.style.display = 'none';
    editModal.style.display = 'block';
});

// Editar perfil
profilesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const index = e.target.dataset.index;
        editingIndex = index;
        const profile = profiles[index];
        editTitle.textContent = 'Editar Perfil';
        profileName.value = profile.name;
        // Para imagem, não posso setar o input file, mas mostrar preview
        imagePreview.src = profile.image;
        imagePreview.style.display = 'block';
        profileImage.value = ''; // Reset file input
        editModal.style.display = 'block';
    } else if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        if (confirm(`Excluir perfil "${profiles[index].name}"?`)) {
            profiles.splice(index, 1);
            saveProfiles();
            renderMainProfiles();
            renderManageProfiles();
        }
    }
});

// Preview da imagem
profileImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            imagePreview.src = reader.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none';
    }
});

// Salvar perfil
profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = profileName.value.trim();
    if (!name) return;

    let imageSrc = imagePreview.src;
    if (!imageSrc || imageSrc === window.location.href) {
        // Se não mudou imagem, manter a antiga se editando
        if (editingIndex >= 0) {
            imageSrc = profiles[editingIndex].image;
        } else {
            alert('Selecione uma imagem.');
            return;
        }
    }

    if (editingIndex >= 0) {
        profiles[editingIndex] = { name, image: imageSrc };
    } else {
        profiles.push({ name, image: imageSrc });
    }

    saveProfiles();
    renderMainProfiles();
    renderManageProfiles();
    editModal.style.display = 'none';
});

// Salvar no localStorage
function saveProfiles() {
    localStorage.setItem('netflix-profiles', JSON.stringify(profiles));
}

// Inicializar
renderMainProfiles();