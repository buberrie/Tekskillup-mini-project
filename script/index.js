let navBar = document.getElementById('nav-bar');
let hamburger = document.querySelector('.open-icon');
let closeMenu = document.querySelector('.close-icon');
// let header = document.querySelector('#header');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

closeMenu.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

//Hide navbar by clicking anywhere on the body
document.onclick = function (e) {
    if(e.target.id !== 'open-nav') {
    navBar.classList.remove('active')
    }
};