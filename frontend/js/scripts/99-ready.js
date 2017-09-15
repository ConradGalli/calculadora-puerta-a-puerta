$(document).ready(function() {

	$('#price_original').focus();
	$('.c-product-price__box, .c-navigation').addClass('is-visible')
	f_social__share();
	f_goToHash();
	/* GA Bounce */
	f_ga__bounce_time('short', '(10s) Tu usuario ha estado aquí por al menos 10 seg.', 10000);
	f_ga__bounce_time('medium', '(30s) Tu usuario ha estado aquí por al menos 30 seg.', 30000);
	f_ga__bounce_time('long', '(1m) Genial! Tu usuario ha estado aquí más de 1 min.', 60000);
	f_ga__bounce_time('cautive', '(3m) Increible! Parece que tu usuario está interesado por tu página, ha pasado aquí más de 3 min.', 180000);
	f_ga__bounce_time('forgetful', '(10m) Mmm.. bueno! Tal vez tu usuario haya olvidado el navegador abierto, está aquí hace más de 10 min.', 900000);

});

// $(document).keypress(function(e) {
// 		if ($('.c-product-price__ok').is(':focus')) {
// 			f_keypress__enter(e);
// 		}
// });
