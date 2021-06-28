const toggle = document.querySelector('.js-burger-btn');
const content = document.querySelector('.js-nav');
const bodyEl = document.body;

const show = () => {
  toggle.setAttribute('aria-expanded', true);
  content.setAttribute('aria-hidden', false);

  bodyEl.classList.add('no-scrolling');
  toggle.classList.add('is-active');
  content.classList.add('is-opened');
};

const hide = () => {
  toggle.setAttribute('aria-expanded', false);
  content.setAttribute('aria-hidden', true);

  bodyEl.classList.remove('no-scrolling');
  toggle.classList.remove('is-active');
  content.classList.remove('is-opened');
};

toggle.addEventListener('click', (event) => {
  event.stopPropagation();

  // eslint-disable-next-line no-unused-expressions
  JSON.parse(toggle.getAttribute('aria-expanded')) ? hide() : show();
});

const handleClosure = event => !content.contains(event.target) && hide();

window.addEventListener('click', handleClosure);
window.addEventListener('focusin', handleClosure);

// const toggle = $('.js-burger-btn');
// const content = $('.js-nav');
// const bodyEl = $('body');

// const show = () => {
//   toggle.attr('aria-expanded', 'true');
//   content.attr('aria-hidden', 'false');

//   bodyEl.addClass('no-scrolling');
//   toggle.addClass('is-active');
//   content.addClass('is-opened');
// };

// const hide = () => {
//   toggle.attr('aria-expanded', 'false');
//   content.attr('aria-hidden', 'true');

//   bodyEl.removeClass('no-scrolling');
//   toggle.removeClass('is-active');
//   content.removeClass('is-opened');
// };

// toggle.on('click', (event) => {
//   event.stopPropagation();

//   // eslint-disable-next-line no-unused-expressions
//   toggle.attr('aria-expanded') === false ? hide() : show();
//   console.log(event.target);
// });

// const handleClosure = event => !content.is(event.target) && hide();

// $(window).on('click', handleClosure);
// $(window).on('focusin', handleClosure);
