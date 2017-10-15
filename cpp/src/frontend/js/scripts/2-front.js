// $('.c-navigation__item').on('click', function(event) {
// 	$('.c-navigation__item').removeClass('is-active');
// 	$(this).addClass('is-active');
// });

function f_detectPageAndApplyToNav(page) {
	$('.c-navigation__item').removeClass('is-active');
	$('.c-navigation__item_'+page+' .c-navigation__label').slideDown(300);
	$('.c-navigation__item_'+page+'').addClass('is-active');
}

function f_setBiginputValidation(el) {
	if ($.trim(el.val()) !== '') {
		$('.c-biginput__ok').addClass('is-enabled');
	} else {
		$('.c-biginput__ok').removeClass('is-enabled');
	}
}

function f_animateBiginputToTop() {
	if (!$('.c-biginput').hasClass('is-active')) {
		$('.c-biginput').addClass('is-active');
		$('.c-logo_home').addClass('is-disabled');
		$('.l-home__body').fadeOut(100);
		$('.c-biginput__loading').addClass('is-enabled');
	}
}

function f_setNavVisibility() {
	var newViewportHeight = $(window).height();
	console.log('VH Nueov: '+newViewportHeight);

	if (newViewportHeight < viewportHeight) {
		$('.c-navigation').hide().addClass('has-keyboard');
	} else {
		$('.c-navigation').show().removeClass('has-keyboard');
		if ($.trim($('#price_original').val()) === '') {
			$('#price_original').blur();
		}
	}
}

function f_toggleActionCards(el) {
	if (!el.find('.material-icons').hasClass('is-checked')) {
		el.find('.material-icons').text('check_box');
		el.find('.material-icons').addClass('is-checked');
	} else {
		el.find('.material-icons').text('check_box_outline_blank');
		el.find('.material-icons').removeClass('is-checked');
	}
}
