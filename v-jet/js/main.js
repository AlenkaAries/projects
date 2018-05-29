//Birthday - datepicker
$("#datepicker").datepicker();


//Show password
var show = document.querySelector('#show');
show.onclick = function() {
 var x = document.getElementById('password');
    if (x.type === 'password') {
        x.setAttribute('type','text');
  show.innerHTML = 'Hide';
    } else {
        x.setAttribute('type','password');
  show.innerHTML = 'Show';
    }
};


//menu-fixed
var menu = $(".header");
fixed_menu = "header--fixed";
var menu_btn = $(".nav__btn");
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

$(document).ready(function() {
    $(function() {
        $('.header__icon').on('click', function() {
          $(this).closest('.header__menu').toggleClass('menu_state_open');
        });
    });
});


//Language-show
$(document).ready(function() {
    $('.header__language').on('click', function(){
        $('.header__language-show').toggle();
    });
});


