(function($){
    $(function() {
      $('.header__icon').on('click', function() {
        $(this).closest('.header__menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery);