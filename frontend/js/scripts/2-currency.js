var dollarConverted = 16.04;

// Source: https://currencylayer.com/documentation
// set endpoint and your access key
// endpoint = 'live';
// access_key = '4bdc5d6e264a66042e6aef653c5dce5f';

// get the most recent exchange rates via the "live" endpoint:
// $.ajax({
// 		url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
// 		dataType: 'jsonp',
// 		success: function(json) {
//
// 				// exchange rata data is stored in json.quotes
// 				dollarConverted = json.quotes.USDARS;
// 				console.log('US$ 1 = AR$ '+dollarConverted);
// 				document.getElementById('dollarConverted').innerHTML = dollarConverted;
//				$('.c-step__dollar').addClass('is-visible');
//
// 				// source currency is stored in json.source
// 				console.log('Moneda original: '+json.source);
//
// 				// timestamp can be accessed in json.timestamp
// 				console.log(json.timestamp);
//
// 		}
// });

// Source: https://openexchangerates.org/
$.get('https://openexchangerates.org/api/latest.json', {app_id: '8f20c082fbbd475a84792e488cd902b2', base: 'USD'}, function(data) {
		console.log("1 USD " + data.rates.ARS + " ARS");
		dollarConverted = data.rates.ARS;
		document.getElementById('dollarConverted').innerHTML = dollarConverted;
		$('.c-step__dollar').addClass('is-visible');
});
