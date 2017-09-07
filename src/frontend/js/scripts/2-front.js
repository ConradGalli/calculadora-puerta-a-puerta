function f_calculate__ars(book) {

	var
		book = book || false,
		tax = 50, // porcentaje
		dollar = 17.54, // hacer dinámico

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
	console.log('Dolar: '+dollar.toFixed(2));
	console.log('Precio completo: '+price.toFixed(2));
	console.log('Precio completo para impuestar con franquicia: '+price_tax.toFixed(2));
	console.log('Impuestos: '+tax_calc.toFixed(2));
	console.log('Precio final en US$: '+(price + tax_calc).toFixed(2));
	console.log('Precio final en AR$: '+(price + tax_calc)*dollar.toFixed(2));
	console.log('Precio Correo Argentino en AR$: '+courier.toFixed(2));
	console.log('TOTAL en AR$: '+ars.toFixed(2));


	return $('#price_final').text(ars.toFixed(2));
}

function f_franchise__toggle() {
	$('#franchise').toggleClass('is-selected');
	f_calculate__ars();
}

function f_layout__results() {
	$('.c-step_second').addClass('is-visible');
	$('.c-step_first').removeClass('is-visible');
}
function f_layout__reset() {
	$('.c-step_first').addClass('is-visible');
	$('.c-step_second').removeClass('is-visible');
}
