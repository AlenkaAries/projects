
  $('#about__slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button type="button" class="about__slider-btn about__slider-btn--prev"><span class="fa fa-angle-left" aria-hidden="true"></span></button>',
    nextArrow: '<button type="button" class="about__slider-btn about__slider-btn--next"><span class="fa fa-angle-right" aria-hidden="true"></span></button>',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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


 
