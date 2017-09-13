function f_calculate__ars(boolean) {

	var
		book = boolean || false,
		tax = 50, // porcentaje
		dollar = dollarConverted, // hacer dinámico

		product = parseFloat($('#price_original').val()) || 0, // precio del producto
		shipping = parseFloat($('#shipping_price').val()) || 0, // costo del envío
		franchise = ($('#franchise').hasClass('is-selected')) ? 25 : 0, // franquicia anual que otorga la AFIP
		courier = (book === true || product === 0) ? 0 : 120, // envío por Correo Argentino

		price = product + shipping,
		price_tax = ((price-franchise) < 0) ? 0 : price -franchise,

		tax_calc = (book === true) ? 0 : price_tax*(tax/100), // tipo de producto (si es un libro no lleva inpuestos)

		ars = (price + tax_calc) * dollar + courier;


	console.log('\n\nCalculando...');
	(product > 200) ? console.log('\nTené en cuenta que el precio del producto no debe superar los US$ 200\n\n') : console.log('');
	(product < 4) ? console.log('\nSi... es increible pagar tanto por un producto de solo US$ 3\n\n') : console.log('');
	(product === 0) ? f_layout__reset() : f_layout__results();

	console.log('Precio del producto en US$: '+product.toFixed(2));
	$('#log-product').html(product.toFixed(2));

	console.log('Precio del envío en US$: '+shipping.toFixed(2));
	$('#log-shipping').html(shipping.toFixed(2));

	console.log('Dolar: '+dollar.toFixed(2));
	$('#log-dollar').html(dollar.toFixed(2));

	console.log('Precio competo: '+price_tax.toFixed(2));
	$('#log-fullprice').html(price_tax.toFixed(2));

	console.log('Franquicia US$: '+franchise.toFixed(2));
	$('#log-franchise').html(franchise.toFixed(2));

	console.log('Precio completo para impuestar con franquicia: '+price_tax.toFixed(2));
	$('#log-franchisedprice').html(price_tax.toFixed(2));

	console.log('Impuestos: '+tax_calc.toFixed(2));
	$('#log-tax').html(tax_calc.toFixed(2));

	console.log('Precio final en US$: '+(price + tax_calc).toFixed(2));
	$('#log-priceusd').html((price + tax_calc).toFixed(2));

	console.log('Precio final en AR$: '+((price + tax_calc)*dollar).toFixed(2));
	$('#log-pricears').html(((price + tax_calc)*dollar).toFixed(2));

	console.log('Precio Correo Argentino en AR$: '+courier.toFixed(2));
	$('#log-courrier').html(courier.toFixed(2));

	console.log('TOTAL en AR$: '+ars.toFixed(2));
	$('#log-totalars').html(ars.toFixed(2));
	$('#price_final').text(ars.toFixed(2));

}

function f_book__toggle() {
	$('#book').toggleClass('is-selected');
	if ($('#book').hasClass('is-selected')) {
		$('#franchise').slideUp('fast');
		$('#book').find('.material-icons').html('check_box');
		f_calculate__ars(true);
	} else {
		$('#franchise').slideDown('fast');
		$('#book').find('.material-icons').html('check_box_outline_blank');
		f_calculate__ars();
	}
}

function f_book_condition() {
	if ($('#book').hasClass('is-selected')) {
		f_calculate__ars(true);
	} else {
		f_calculate__ars();
	}
}

function f_franchise__toggle() {
	$('#franchise').toggleClass('is-selected');

	if ($('#franchise').hasClass('is-selected')) {
		$('#franchise').find('.material-icons').html('check_box');
	} else {
		$('#franchise').find('.material-icons').html('check_box_outline_blank');
	}

	f_book_condition();
}

function f_shipping__toggle() {
	$('#shipping_price').toggleClass('is-selected');

	if ($('#shipping_price').hasClass('is-selected')) {
		$('.shipping_price-trigger').find('.material-icons').html('check_box');
		$('.shipping_price-container').slideUp('fast');
		$('#shipping_price').val('');
		f_book_condition();
	} else {
		$('.shipping_price-trigger').find('.material-icons').html('check_box_outline_blank');
		$('.shipping_price-container').slideDown('fast');
	}
}

function f_layout__results() {
	$('.c-step_second, body').addClass('is-visible');
	$('.c-step_first').removeClass('is-visible');
	$('html, body').animate({scrollTop: $('.c-step_second').offset().top}, 500);
}

function f_enable__ok() {
	var product = parseFloat($('#price_original').val());
	if (product > 0) {
		$('.c-product-price__ok').addClass('is-enabled');
	} else {
		$('.c-product-price__ok').removeClass('is-enabled');
	}
}

function f_layout__reset() {
	$('.c-step_first').addClass('is-visible');
	$('.c-step_second').removeClass('is-visible');
}
