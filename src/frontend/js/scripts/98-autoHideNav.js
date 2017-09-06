// Source: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.autoHideNav').outerHeight();

$(window).on('resize', function(){
  var bars = $('.c-navigation__bars');
  if ($(window).width() > 839) {
    $('.c-navigation__menu').slideDown();
    bars.removeClass('is-opened');
    $('.c-navigation__trigger').addClass('is-visible');
    $('.c-cart').removeClass('is-visible');
  } else {
    $('.c-navigation__menu').slideUp();
    bars.removeClass('is-opened');
    $('.c-navigation__trigger').removeClass('is-visible');
  }
});

$(window).on('scroll', function(){
  didScroll = true;
});

setInterval(function() {
  if ( didScroll ) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  var bars = $('.c-navigation__bars');

  // Make sure they scroll more than delta
  if( Math.abs(lastScrollTop - st) <= delta )
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if ( st > lastScrollTop && st > navbarHeight ){
    // Scroll Down
    if ($(window).width() <= 839) {
      $('.c-navigation__menu').slideUp();
      bars.removeClass('is-opened');
      $('.c-navigation__trigger').removeClass('is-visible');
    } else {
      $('.c-navigation__menu').slideDown();
      bars.addClass('is-opened');
      $('.c-navigation__trigger').addClass('is-visible');
      $('.c-cart').removeClass('is-visible');
    }
    $('.autoHideNav').addClass('is-hidden');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('.autoHideNav').removeClass('is-hidden');
    }
  }

  lastScrollTop = st;
}
