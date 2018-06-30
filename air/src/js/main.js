//menu-fixed
var menu = $(".header__navigations");
fixed_menu = "header__navigations--fixed";

menuPos = menu.offset().top;

$(window).scroll(function() {
    if ($(this).scrollTop() > menuPos) {
        menu.addClass(fixed_menu);
    } else {
        menu.removeClass(fixed_menu);
    }
});

$(document).ready(function() { 
//Parallax
$('.parallax').parallax({imageSrc: "img/bg-2.jpg"});


//Counter
var time = 3, cc = 1;
$(window).scroll(function(){
    $('.counter__wrapper').each(function(){
        var
        cPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
        if(cPos < topWindow + 400){
            if (cc < 2){
                $('.counter__number').addClass('number-viz');
                $('span').each(function(){
                var 
                i = 1,
                num = $(this).data('num'),
                step = 2000 * time / num,
                that = $(this),
                int = setInterval(function(){
                    if (i <= num) {
                    that.html(i);
                    }
                    else {
                    cc = cc + 2;
                    clearInterval(int);
                    }
                    i++;
                },step);
                });
            }
        }
    });
});


});

