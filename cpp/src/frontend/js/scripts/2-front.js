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
	$('.c-biginput').addClass('is-active');
	$('.c-logo_home').addClass('is-disabled');
}

function f_setNavVisibility() {
	if ($(window).height() < 390) {
		$('.c-navigation').hide().addClass('has-keyboard');
	} else {
		$('.c-navigation').show().removeClass('has-keyboard');
	}
}
