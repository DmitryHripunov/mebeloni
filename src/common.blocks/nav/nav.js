const navBtn = $('.nav__link');
const navContent = $('.nav__dropdown');

if ($(window).width() < 1024) {
  navBtn.on('click', (e) => {
    const curTarget = e.currentTarget;
    const slideItem = $(curTarget).siblings(navContent);
    $(curTarget).toggleClass('is-active');
    slideItem.slideToggle(200);
  });
}

