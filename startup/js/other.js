$(document).ready(function() {

//Parallax
$('.parallax').parallax({imageSrc: "img/heyerlein.jpg"});
$('.about__parallax').parallax({imageSrc: "img/heyerl.jpg"});
$('.project__parallax').parallax({imageSrc: "img/heyer.jpg"});
$('.form__parallax').parallax({imageSrc: "img/h-heyerlein.jpg"});

//menu-animate
$("#menu").click(function () {
  $(".header__nav").toggleClass("header__nav--open");
  $(".nav__btn").toggleClass("nav__btn--animate");
});

//menu-fixed
let menu = $(".header");
fixed_menu = "header--fixed";
let menu_btn = $(".nav__btn");
fixed_menu_btn = "nav__btn--fixed";

menuPos = menu.offset().top;

$(window).scroll(function() {
    if ($(this).scrollTop() > menuPos) {
        menu.addClass(fixed_menu);
        menu_btn.addClass(fixed_menu_btn);
    } else {
        menu.removeClass(fixed_menu);
        menu_btn.removeClass(fixed_menu_btn);
    }
});

// wow js
new WOW().init();

//slow-scroll
$(".header__nav-link").on("click", function (event) {
  event.preventDefault();
  let id = $(this).attr('href'),
    top = $(id).offset().top;

  $('body,html').animate({ scrollTop: top }, 1200);
});

//button-up.js
if ($('#button-up').length) {
  let scrollTrigger = 300, // px
    backToTop = function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#button-up').addClass('is-visible');
      } else {
        $('#button-up').removeClass('is-visible');
      }
    };
  backToTop();
  $(window).on('scroll', function () {
    backToTop();
  });
  $('#button-up').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
}
});

//filter controls
$(function() {
  $('.works__filter li').click(function() {
      $('.works__filter li').removeClass('active');
      $(this).addClass('active');
  });

  $('.works__album').filterizr();
});

// Active tracking menu
$(document).ready(function() {
    $(document).on('scroll', onScroll);
  });
  
  function onScroll(event) {
    let scrollPos = $(document).scrollTop();
    let header = $(".header");
    let headerHeight = header.outerHeight();
    $('.header__nav-link').each(function() {
      let currLink = $(this);
      let refElement = $(currLink.attr('href'));
      if (refElement.position().top - headerHeight <= scrollPos && refElement.position().top - headerHeight + refElement.height() > scrollPos) {
        $('.header__nav-link').removeClass('header__nav-link--active');
        currLink.addClass('header__nav-link--active');
      } else {
        currLink.removeClass('header__nav-link--active');
      }
    });
  }