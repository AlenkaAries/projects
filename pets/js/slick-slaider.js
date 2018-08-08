$('.look__slaider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  //variableWidth: true, 
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: false,
  prevArrow: '<button type="button" class="look__button look__button--prev"><span class="fa fa-angle-left" aria-hidden="true"></span></button>',
  nextArrow: '<button type="button" class="look__button look__button--next"><span class="fa fa-angle-right" aria-hidden="true"></span></button>',
  autoplay: true,
  autoplaySpeed: 3000,
  //fade: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        //nextArrow:false,
        //prevArrow:false,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        //nextArrow:false,
        //prevArrow:false,
      }
    }
  ]
});


 
