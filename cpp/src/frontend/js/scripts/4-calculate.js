var dollarConverted = 17.3245;
var userInputPrice = 0;

// Source: https://openexchangerates.org/
$.get('https://openexchangerates.org/api/latest.json', {app_id: '8f20c082fbbd475a84792e488cd902b2', base: 'USD'}, function(data) {
		console.log("1 USD " + data.rates.ARS + " ARS");
		dollarConverted = data.rates.ARS;
		document.getElementById('dollarConverted').innerHTML = dollarConverted;
		$('.c-step__dollar').addClass('is-visible');
});

function f_calculate__ars(boolean) {

	$('#price_original').text(userInputPrice);

	var
		book = boolean || false,
		tax = 50, // porcentaje
		dollar = dollarConverted, // obtenido de openexchangerates.org

		product = parseFloat($('#price_original').text()) || 0, // precio del producto
		shipping = parseFloat($('#shipping_price').val()) || 0, // costo del envío
		franchise = ($('#franchise').hasClass('is-checked')) ? 25 : 0, // franquicia anual que otorga la AFIP
		courier = (book === true || product === 0) ? 0 : 120, // envío por Correo Argentino

		price = product + shipping,
		price_tax = ((price-franchise) < 0) ? 0 : price -franchise,

		tax_calc = (book === true) ? 0 : price_tax*(tax/100), // tipo de producto (si es un libro no lleva inpuestos)

		ars = (price + tax_calc) * dollar + courier,

		dollarized = (ars/dollar),
		inflation = dollarized*100/price-100;


	console.log('\n\nCalculando...');
	(product > 200) ? console.log('\nTené en cuenta que el precio del producto no debe superar los US$ 200\n\n') : console.log('');
	(product < 4) ? console.log('\nSi... es increible pagar tanto por un producto de solo US$ 3\n\n') : console.log('');

	console.log('Precio del producto en US$: '+product.toFixed(2));
	$('#log-product').html('US$ ' + product.toFixed(2));

	console.log('Precio del producto en AR$: '+product*dollarConverted.toFixed(2));
	$('#log-product-ars').html('AR$ ' + (product.toFixed(2)*dollarConverted.toFixed(2)));

	console.log('Precio del envío en US$: '+shipping.toFixed(2));
	$('#log-shipping').html('US$ ' + shipping.toFixed(2));

	console.log('Dolar: AR$ '+dollar.toFixed(2));
	$('#log-dollar').html('AR$' + dollar.toFixed(2));

	console.log('Precio competo: '+price_tax.toFixed(2));
	$('#log-fullprice').html('US$ ' + price_tax.toFixed(2));

	console.log('Franquicia US$: '+franchise.toFixed(2));
	$('#log-franchise').html('US$ ' + franchise.toFixed(2));

	console.log('Precio completo para impuestar con franquicia: '+price_tax.toFixed(2));
	$('#log-franchisedprice').html('US$ ' + price_tax.toFixed(2));

	console.log('Impuestos: '+tax_calc.toFixed(2));
	$('#log-tax').html('US$ ' + tax_calc.toFixed(2));

	console.log('Precio final en US$: '+(price + tax_calc).toFixed(2));
	$('#log-priceusd').html('US$ ' + (price + tax_calc).toFixed(2));

	console.log('Precio final en AR$: '+((price + tax_calc)*dollar).toFixed(2));
	$('#log-pricears').html('AR$ ' + ((price + tax_calc)*dollar).toFixed(2));

	console.log('Precio Correo Argentino en AR$: '+courier.toFixed(2));
	$('#log-courrier').html('AR$ ' + courier.toFixed(2));

	console.log('Total dolarizado: '+dollarized.toFixed(2));
	console.log('Inflación: '+inflation.toFixed(2) + '%');
	$('#log-inflation').html(inflation.toFixed(2) + '%');

	console.log('TOTAL en AR$: '+ars.toFixed(2));
	$('#log-totalars').html('AR$ ' + ars.toFixed(2));
	$('#price_final').text('AR$ ' + ars.toFixed(2));

}

function f_toggleBookPurchase() {
	if ($('#book').hasClass('is-checked')) {
		$('.l-results__shipping').addClass('is-disabled').slideUp(300);
		$('.c-cards_shipping').slideUp(200);
		$('#shipping_price').val('');
		$('.l-results__shipping-status').text('check_box_outline_blank').removeClass('is-checked');
		f_calculate__ars(true);
	} else {
		$('.l-results__shipping').slideDown(300).removeClass('is-disabled');
		$('.c-cards_shipping').slideDown(200);
		f_calculate__ars(false);
	}
}

function f_setBookPurchaseCondition() {
	if ($('#book').hasClass('is-checked')) {
		f_calculate__ars(true);
	} else {
		f_calculate__ars(false);
	}
}

function f_toggleAnualFranchise() {
	f_setBookPurchaseCondition();
}

function f_toggleShipping() {
	if ($('.l-results__shipping-status').hasClass('is-checked')) {
		$('.l-results__shipping').addClass('is-disabled').slideUp(300);
		$('#shipping_price').val('');
		f_setBookPurchaseCondition();
	} else {
		$('.l-results__shipping').slideDown(300).removeClass('is-disabled');
	}
}

function f_saveUserInputPrice(el) {
	userInputPrice = el.val();
}

function f_reset() {
	$('#price_original').text('');
	$('#shipping_price').val('');
	userInputPrice = 0;
}
