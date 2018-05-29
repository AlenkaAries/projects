$(document).ready(function(){

$(function() {
$('.portfolio__list li').click(function() {
    $('.portfolio__list li').removeClass('active');
    $(this).addClass('active');
});
    $('.portfolio__album').filterizr();
});

//popup
$(".popup").magnificPopup({type:"image"});
$(".popup__content").magnificPopup({type:"inline", midClick: true});

// wow js
new WOW().init();

// parallax
$('.parallax').parallax({imageSrc: "img/bg.png"});

//menu
$(".toggle__mnu").click(function() {
    $(".sandwich").toggleClass("active");
});

$(".top__mnu ul a").click(function() {
    $(".top__mnu").fadeOut(600);
    $(".sandwich").toggleClass("active");
});

$(".toggle__mnu").click(function(){
    if($(".top__mnu").is(":visible")) {
        $(".top__mnu").fadeOut(600);  
        $(".top__mnu li a").removeClass("fadeInUp animated");
    } else {
        $(".top__mnu").fadeIn(600);
        $(".top__mnu li a").addClass("fadeInUp animated");
    };
});

//jqBootstrapValidation
$("input,select,textarea").jqBootstrapValidation();

});