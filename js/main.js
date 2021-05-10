const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

});
