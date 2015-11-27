( function ( $ ) {
	$(document).ready( function ( ) {
		$(".docs-sidebar").affix({
			offset: {
				top: 160,
				bottom: function () {
					return (this.bottom = $('.footer').outerHeight(true))
				}
			}
		});

		$('body').scrollspy({ target: '.docs-sidebar' });
	});
})( jQuery );