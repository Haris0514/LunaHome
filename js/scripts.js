$('.slider-wrapper').slick({
    arrows: true,
    dots: false,
    mobileFirst: true,
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    infinite:true,
    fade:true,
    prevArrow:
    '<button class="slide-arrow p-arrow"><img src="images/left.svg" alt="img"></button>',
  nextArrow:
    '<button class="slide-arrow n-arrow"><img src="images/right.svg" alt="img"></button>',
});