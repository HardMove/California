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
   document.body.classList.toggle("hidden")
});

const swiper = new Swiper('.swiper', {
   loop: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   autoHeight: true,
   variableWidth: true,
});