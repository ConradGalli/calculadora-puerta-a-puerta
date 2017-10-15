$(document).ready(function() {

	f_social__share('landing'); // landing, mobile (especificar cual versión estamos haciendo)

	/* Load products */
	f_on__events();

	/* Frontend */
	f_goToHash();

	$('#price_original').blur(function() {
		if ($.trim($('#price_original').val()) === '') {
			$('.c-biginput').removeClass('is-active');
			$('.c-logo_home').removeClass('is-disabled');
		}
	});

	/* GA Bounce */
	f_ga__bounce_time('short', '(10s) Tu usuario ha estado aquí por al menos 10 seg.', 10000);
	f_ga__bounce_time('medium', '(30s) Tu usuario ha estado aquí por al menos 30 seg.', 30000);
	f_ga__bounce_time('long', '(1m) Genial! Tu usuario ha estado aquí más de 1 min.', 60000);
	f_ga__bounce_time('cautive', '(3m) Increible! Parece que tu usuario está interesado por tu página, ha pasado aquí más de 3 min.', 180000);
	f_ga__bounce_time('forgetful', '(10m) Mmm.. bueno! Tal vez tu usuario haya olvidado el navegador abierto, está aquí hace más de 10 min.', 900000);

});
