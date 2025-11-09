const menuButton = document.querySelector('.menu-button');
const menuDropdown = document.querySelector('.menu-dropdown');

menuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события на document
    menuDropdown.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!menuDropdown.contains(event.target) && !menuButton.contains(event.target)) {
        menuDropdown.classList.remove('show');
    }
});
