$(window).on('resize', function() {
	$('.c-modal').css('width', $(window).width());
	f_navigation__scroll();
	// f_screen__orientation(true);
	if ($(window).width() < 641) {
		// f_modal__resize();
	}
});

$(document).on('scroll', function() {
	f_navigation__scroll();
});

// function f_screen__orientation(status) {
//   var isResize = status || false;
//
//   if (isResize === false) {
//     if ($(window).width() > $(window).height()) {
//       $('.c-landscapemode').addClass('is-visible');
//     } else {
//       $('.c-landscapemode').removeClass('is-visible');
//     }
//   }
//
// }

function f_goToHash() {
	// Crea una transición de scroll al accionar un <a> con un href refiriendo a un id determinado
	// Ej: <a href="#objeto"></a>, donde "#objeto" es un id en el DOM
	$('a[href*="#"]:not([href="#"])').click(function (e) {
		e.preventDefault();
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			console.log(target);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('body, html').animate({
					scrollTop: target.offset().top
				}, 500); // especificar tiempo en ms
				return false;
			}
		}
	});
}

function f_navigation__scroll() {
	// comportamiento del nav al scrollear

	// primero obtengo valores de scroll y posición
	var st = $(window).scrollTop(),
			ot = $('.c-navigation').height() + 200;

	// según la posición en la que esté de scroll, aplico algunos estilos
	if (st > ot) {
		// si estoy por DEBAJO de la posición del objeto...
		$('.c-navigation').addClass('is-dark');
		$('.c-navigation').removeClass('is-transparent');
	} else {
		// si estoy por ENCIMA de la posición del objeto...
		$('.c-navigation__trigger img').attr('src', 'assets/img/misc/c-navigation__menu_white.svg');
		$('.c-navigation').removeClass('is-dark');
		$('.c-navigation').addClass('is-transparent');
	}
}

function f_navigation__trigger(el) {
	// comportamiento del menú hamburguesa al accionarlo

	// obtengo el elemento
	var bars = el.find('.c-navigation__bars');

	// primero pregunto si el menú está abierto o cerrado
	if (bars.hasClass('is-opened')) {
		// aplico estilos según el estado de la condición
		bars.removeClass('is-opened');
		$('.c-navigation__menu').hide();
		el.removeClass('is-visible');

		// si el nav es transparente aplico estilos particulares
		if ( $('.c-navigation').hasClass('is-transparent') ) {
			$('.c-navigation').removeClass('is-dark');
		}
	} else {
		// aplico estilos según el estado de la condición
		bars.addClass('is-opened');
		$('.c-navigation__menu').show();
		el.addClass('is-visible');
	}
}

// size table hide
function f_sizeTable__open(e) {
	// e.preventDefault();
	$('.l-sizeTable').addClass('is-visible');
}

// size table show
function f_sizeTable__close(e) {
	e.preventDefault();
	$('.l-sizeTable').removeClass('is-visible');
}

function f_sizeTable__load(html) {
	// carga una tabla de talles
	// recibe el argumento del nombre del archivo html
	$('.c-modal_sizetable .c-modal__description').load('sizetable_'+html+'.html');
}

function f_product__titleName() {
	var obj = $('.c-product__name');

	obj.each(function() {
		$(this).attr('title', $(this).text());
	});
}



function f_modal__trigger(target,behavior) {
	// obtengo el modal a targetear
	var myModal = target.data('modal');

	// reseteo estilos antes de lanzar un nuevo modal
	console.log('Cerrando todos los modal abiertos...');
	$('.c-modal').removeClass('is-visible');
	$('.c-modal').css('width',$(window).width());

	if (behavior === true) {
		// true se usa para abrir un modal

		// aplico algunos estilos basicos y luego hago visible el modal targeteado
		$('body').css('overflow', 'hidden');
		$('.c-modal.c-modal_'+myModal+'').addClass('is-visible');
		// Scrolleo el contenedor arriba de todo
		$('.c-modal__container').scrollTop(0);
		// truco para ocultar la barra de scroll si estamos en mobile
		if ($(window).width() < 641) {
			// f_modal__resize();
		}
		console.log('Abriendo modal .c-modal_'+myModal+'...');

	} else {

		// si no se pasa un parámetro, se ejecutan acciones para cerrar el modal y resetear estilos
		$('body').css('overflow', 'auto');
		$('.c-modal').removeClass('is-visible');
		$('.c-modal').css('width',$(window).width());
		console.log('Cerrando todos los modal...');

	}

}

function f_modal__resize(myModal) {
	// obtengo datos como el ancho de ventana y de uno de los elementos del modal
	// luego hago cálculos para obtener el desplazamiento
	var viewport = $(window).width(),
			element = $('.c-modal__title').innerWidth(),
			operation = viewport-element,
			offset = viewport-operation;

	console.log('Viewport '+viewport);
	console.log('Element '+element);
	console.log('Operation '+operation);
	console.log('Offset '+offset);

	// Sumo el desplazamiento al ancho de la ventana para ocultar la barra de scroll
	var adjust = $('.c-modal').css('width',viewport+offset+'px');

	return adjust;
}


function f_dragdealer__360(el, frames, spriteLengthPx) {
	new Dragdealer(
		''+el+'',
		{
			steps: frames,
			snap: true,
			animationCallback: function(x,y) {
				if ($(window).width() <= 320) {
					f_dragdealer__assignBGPos(x, (320 * frames), frames);

				} else if ($(window).width() <= 360) {
					f_dragdealer__assignBGPos(x, (360 * frames), frames);

				} else if ($(window).width() <= 375) {
					f_dragdealer__assignBGPos(x, (375 * frames), frames);

				} else if ($(window).width() <= 414) {
					f_dragdealer__assignBGPos(x, (414 * frames), frames);

				} else if ($(window).width() <= 425) {
					f_dragdealer__assignBGPos(x, (425 * frames), frames);

				} else if ($(window).width() <= 550) {
					f_dragdealer__assignBGPos(x, (550 * frames), frames);

				} else if ($(window).width() <= 600) {
					f_dragdealer__assignBGPos(x, (600 * frames), frames);

				} else if ($(window).width() <= 768) {
					f_dragdealer__assignBGPos(x, (768 * frames), frames);

				} else {
					f_dragdealer__assignBGPos(x, spriteLengthPx, frames);

				}
			},
		}
	);
}

function f_dragdealer__assignBGPos(x, spriteLengthPx, frames) {
	$('.c-dragdealer__viewport').css({
		'background-position':''+parseInt(x*(spriteLengthPx-(spriteLengthPx/frames)))+'px',
	});
	console.log('\nValor del slider: '+x+'\nPosicion del background en X: '+parseInt(x*(spriteLengthPx-(spriteLengthPx/frames)))+'px\n');
}
