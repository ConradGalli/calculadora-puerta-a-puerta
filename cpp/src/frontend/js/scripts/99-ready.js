var viewportHeight = $(window).height();

$(document).ready(function() {

	$('#dollarConverted').text(dollarConverted.toFixed(2));

	f_social__share('landing'); // landing, mobile (especificar cual versión estamos haciendo)

	/* Frontend */
	f_goToHash();

	console.log('VH Original: '+viewportHeight);

	$('#price_input').blur(function() {
		if ($.trim($('#price_input').val()) === '') {
			$('.c-biginput').removeClass('is-active');
			$('.c-logo_home').removeClass('is-disabled');
			$('.l-home__body').fadeIn();
			$('.c-biginput__loading').removeClass('is-enabled');
		}
	});

	setTimeout(function() {
		$('.c-result-nav').addClass('is-visible');
		$('.l-results__body').addClass('is-visible');
	},200);

	/* GA Bounce */
	f_ga__bounce_time('short', '(10s) Tu usuario ha estado aquí por al menos 10 seg.', 10000);
	f_ga__bounce_time('medium', '(30s) Tu usuario ha estado aquí por al menos 30 seg.', 30000);
	f_ga__bounce_time('long', '(1m) Genial! Tu usuario ha estado aquí más de 1 min.', 60000);
	f_ga__bounce_time('cautive', '(3m) Increible! Parece que tu usuario está interesado por tu página, ha pasado aquí más de 3 min.', 180000);
	f_ga__bounce_time('forgetful', '(10m) Mmm.. bueno! Tal vez tu usuario haya olvidado el navegador abierto, está aquí hace más de 10 min.', 900000);

});
