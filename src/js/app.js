// console.log(outerWidth, outerHeight);

var vw = outerWidth / 100;
var vh = outerHeight / 100;
// console.log(vw, vh);

$('#navBurger').on('click', function() {
    $('#navBurger').toggleClass('navBurgerToggle');
    $('#navList').toggleClass('show');
});

var animateText = $('.title');
// console.log(animateText)