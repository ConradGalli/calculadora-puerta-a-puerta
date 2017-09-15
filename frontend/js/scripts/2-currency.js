var dollarConverted = 16.04;

// Source: https://openexchangerates.org/
$.get('https://openexchangerates.org/api/latest.json', {app_id: '8f20c082fbbd475a84792e488cd902b2', base: 'USD'}, function(data) {
		console.log("1 USD " + data.rates.ARS + " ARS");
		dollarConverted = data.rates.ARS;
		document.getElementById('dollarConverted').innerHTML = dollarConverted;
		$('.c-step__dollar').addClass('is-visible');
});
