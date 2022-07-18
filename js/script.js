let menuLink = document.querySelectorAll('.menu__link')[1];
let subMenu = document.querySelector('.sub-menu');
let arrow = document.querySelector('.arrow');
menuLink.addEventListener('click', function () {
   subMenu.classList.toggle('open');
   arrow.classList.toggle('active');
});

let popupBtn = document.querySelector('.popupBtn');
let popup = document.querySelector('.popup')
let popupClose = document.querySelector('.popup__close')

popupBtn.addEventListener('click', function () {
   popup.classList.add('open');
})

popupClose.addEventListener('click', function () {
   popup.classList.remove('open');
})

document.addEventListener('keydown', function (e) {
   if (e.code == 'Escape') {
      popup.classList.remove('open');
   }
})

let burgerBtn = document.querySelector(".header__burger");
let navMenu = document.getElementById("nav");
burgerBtn.addEventListener("click", function () {
   navMenu.classList.toggle("active")
});