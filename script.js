const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const headerContent = document.querySelector('.header-container');
const closeIcon = document.querySelector('.close-icon');

hamburgerIcon.addEventListener('click', () =>{
    headerContent.classList.add('menu-open');
})

closeIcon.addEventListener('click', () =>{
    headerContent.classList.remove('menu-open')
})