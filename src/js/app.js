// console.log(outerWidth, outerHeight);

var vw = outerWidth / 100;
var vh = outerHeight / 100;
// console.log(vw, vh);

var navBurger = document.querySelector("#navBurger");
// console.log(navBurger);
var navList = document.querySelector(".nav__list");
// console.log(navList);

navBurger.addEventListener('click', navToggle);

function navToggle() {
    navBurger.classList.toggle('navBurgerToggle');
    navList.classList.toggle('show');
}

var animateText = (document.querySelectorAll(".content"));
// console.log(animateText);