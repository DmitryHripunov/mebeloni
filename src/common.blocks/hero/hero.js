
// eslint-disable-next-line no-new
// eslint-disable-next-line no-unused-vars
const heroSwiper = new Swiper('.js-hero-swiper', {
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
});
