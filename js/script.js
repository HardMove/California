let menuLink = document.querySelectorAll('.menu__link')[1];
let subMenu = document.querySelector('.sub-menu');
let arrow = document.querySelector('.arrow');
menuLink.addEventListener('click', function () {
   subMenu.classList.toggle('open');
   arrow.classList.toggle('active');
});