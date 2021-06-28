// toggle header search
$('.js-toggle-search').click(() => {
  $('.nav').toggleClass('search-open');
  $('.vue-search__input').focus();
});

// close header search if click out
$(document).mouseup((e) => {
  if (!$('.search').is(e.target)) {
    $('.nav').removeClass('search-open');
  }
});

function setHeader() {
  const topPos = $('html').scrollTop();
  if (topPos > 0) {
    $('.header').addClass('is-moved');
  } else {
    $('.header').removeClass('is-moved');
  }
}

setHeader();

$(window).scroll(() => {
  setHeader();
});

