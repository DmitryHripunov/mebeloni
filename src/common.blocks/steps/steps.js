const tabBtn = $('.js-steps-btn');

// eslint-disable-next-line func-names
tabBtn.on('click', function (e) {
  e.preventDefault();
  const href = $(this).attr('href');

  $('.steps__section').removeClass('is-active');
  $('.js-steps-btn').removeClass('is-active');

  $(this).addClass('is-active');
  $(href).addClass('is-active');
});

