// parallax
$('.parallax').parallax({imageSrc: "img/bg.png"});

//menu-animate
$("#menu").click(function () {
    $(".header__nav").toggleClass("header__nav--open");
    $(".burger").toggleClass("burger--animate");
});