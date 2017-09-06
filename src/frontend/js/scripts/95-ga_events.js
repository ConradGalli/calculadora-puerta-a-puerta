$(window).on('scroll', function() {
  f_ga__bounce_scroll();
});
/* nav styles and actions */
function f_ga__bounce_scroll() {

  var st = $(window).scrollTop(),
      sto = st + $(window).height(),
      full = $(document).height(),
      half = full / 2,
      scroll = $('.js-gaActivity__bounce_scroll');
      end = $('.js-gaActivity__bounce_end');

  if (st > half) {
    if (!scroll.hasClass('is-active')) {
      console.log('Tu usuario ha navegado a traves de la página.');
      scroll
        .addClass('is-active')
        .click();
    }
  }

  if (sto === full) {
    if (!end.hasClass('is-active')) {
      console.log('Tu usuario ha navegado hasta el final de la página.');
      end
        .addClass('is-active')
        .click();
    }
  }

}

function f_ga__bounce_time(type, msg, time) {
  setTimeout(function(){
    console.log(msg);
    $('.js-gaActivity__bounce_'+type+'Time').click();
  }, time);
}
