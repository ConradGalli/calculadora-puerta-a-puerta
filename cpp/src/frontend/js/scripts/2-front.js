function f_detectPageAndApplyToNav(page) {
	$('.c-navigation__item').removeClass('is-active');
	$('.c-navigation__item_'+page+' .c-navigation__label').slideDown(200);
	$('.c-navigation__item_'+page+'').addClass('is-active');
}

function f_setBiginputValidation(el) {
	if ($.trim(el.val()) !== '' ) {
		$('.c-biginput__ok').addClass('is-enabled');
	} else {
		$('.c-biginput__ok').removeClass('is-enabled');
	}
}

function f_setInputShippingValidation(el) {
	if ($.trim(el.val()) !== '') {
		$('.l-results__shipping-ok').addClass('is-enabled');
	} else {
		$('.l-results__shipping-ok').removeClass('is-enabled');
	}
}

function f_animateBiginputToTop() {
	if (!$('.c-biginput').hasClass('is-active')) {
		$('.c-biginput').addClass('is-active');
		$('.c-logo_home').addClass('is-disabled');
		$('.l-home__body').fadeOut(100);
		$('.c-biginput__loading').addClass('is-enabled');
		$('.c-biginput__cancel').addClass('is-visible');
		if ($(window).width() > 550) {
			$('.c-navigation').hide().addClass('has-keyboard');
		}
	}
}

function f_setNavVisibility() {
	var newViewportHeight = $(window).height();
	console.log('VH Nueov: '+newViewportHeight);

	if (newViewportHeight < viewportHeight) {
		$('.c-navigation').hide().addClass('has-keyboard');
	} else {
		if ($.trim($('#price_input').val()) === '') {
			$('.c-navigation').show().removeClass('has-keyboard');
			$('#price_input').blur();
		}
	}
}

function f_toggleActionCards(el) {
	if (!el.hasClass('is-checked')) {
		el.text('check_box');
		el.addClass('is-checked');
	} else {
		el.text('check_box_outline_blank');
		el.removeClass('is-checked');
	}
}

function f_setUserInputBlur(reset) {
	$('.c-biginput').removeClass('is-active');
	$('.c-logo_home').removeClass('is-disabled');
	$('.l-home__body').fadeIn();
	$('.c-biginput__loading').removeClass('is-enabled');
	$('.c-biginput__cancel').removeClass('is-visible');
	if (reset === true) {
		$('#price_input').val('');
		$('.c-biginput__ok').removeClass('is-enabled');
		$('.c-navigation').show().removeClass('has-keyboard');
	}
	if ($(window).width() > 550) {
		$('.c-navigation').show().removeClass('has-keyboard');
	}
}

function f_setResultsVisivility() {
	$('.c-result-nav').addClass('is-visible');
	$('.l-results__body').addClass('is-visible');
}
