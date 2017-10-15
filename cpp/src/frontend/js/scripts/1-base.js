$(window).on('resize', function() {
	$('.c-modal').css('width', $(window).width());
	f_setNavVisibility()
});

$(document).on('scroll', function() {
});

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
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 500); // especificar tiempo en ms
				return false;
			}
		}
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
