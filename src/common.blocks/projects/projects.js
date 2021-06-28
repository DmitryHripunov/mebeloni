// eslint-disable-next-line no-unused-vars
const swiperProjects = new Swiper('.projects__swiper', {
  slidesPerView: 'auto',
  // spaceBetween: 8,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      // spaceBetween: 40,
    },
  },
});
