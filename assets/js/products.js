const dropdownIcon = document.querySelector('.dropdown-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
})