(function($){
    $(function() {
      $('.header__icon').on('click', function() {
        $(this).closest('.header__menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery);

$(document).ready(function() {

//slow-scroll
$(".header__links-item").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
  
    $('body,html').animate({ scrollTop: top }, 1200);
});

});
