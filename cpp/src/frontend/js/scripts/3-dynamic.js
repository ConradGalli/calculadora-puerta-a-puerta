function f_social__share(version) {
	// No usar "|" (pipe) o caracteres especiales en el <title> del html
	// var	myUrl = 'https://lucasromerodb.github.io/calculadora-puerta-a-puerta/',
	var	myUrl = 'https://goo.gl/o9AxQz',
			title = $(document).find("title").text(),
			facebook = 'https://www.facebook.com/sharer/sharer.php?u='+myUrl+'',
			twitter = 'https://twitter.com/intent/tweet?text='+title+'%20'+myUrl+'';

	// Compartir en Facebook
	$('.c-social__button_facebook').on('click', function(event) {
		console.log('Url a compartir: '+myUrl);
		event.preventDefault();
		window.open(facebook, 'Compartir en Facebook', 'width=500,height=500,resizable=1');
	});

	// Compartir en Twitter
	$('.c-social__button_twitter').on('click', function(event) {
		console.log('Url a compartir: '+myUrl);
		event.preventDefault();
		window.open(twitter, 'Compartir en Twitter', 'width=500,height=500,resizable=1');
	});function f_on__events() {
	$('.c-product__var').on('click', function() {
		f_variants__select($(this));
	});

	$('.c-product__select').on('change', function() {
		// cuando el select de talle o cantidad cambia de valor aplico el estilo segun su estado
		f_selects__status($(this));
		// cuando hago click selects de talle y cantidad y valido el botón de compra de acuerdo a su valor
		f_selects__validation($(this));
	});

	$('.c-product__select').each(function(index, el) {
		// recorro los selects de talle y cantidad y aplico el estilo segun su estado
		f_selects__status($(this));
		// recorro los selects de talle y cantidad y valido el botón de compra de acuerdo a su valor
		f_selects__validation($(this));
	});
}

	// Compartir en Whatsapp
	// Este atributo abre la app de whatsapp si la tenemos instalada (lo que es muy probable)
	$('.c-social__button_whatsapp')
		.attr('href', 'whatsapp://send?text='+title+'%20' + myUrl + '');
}
