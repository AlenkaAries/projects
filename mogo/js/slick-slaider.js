
  $('.slaider__wrap').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    //slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<button type="button" class="slaider__slider-btn slaider__slider-btn--prev"><span class="fa fa-angle-left" aria-hidden="true"></span></button>',
    nextArrow: '<button type="button" class="slaider__slider-btn slaider__slider-btn--next"><span class="fa fa-angle-right" aria-hidden="true"></span></button>',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


 
