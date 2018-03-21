$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loopg: false,
		margin: 0,
		nav: true,
		navContainer: '.headline',
		navText: ['<img src="img/icons/prev.svg" />', '<img src="img/icons/next.svg" />'],
		dots: false,
		responsive: {
			0: {
				items: 3
			},
			480: {
				items: 7
			},
			1024: {
				items: 9
			}
		}
	});

	let slideBttnTimeout;

	$('button[class*="owl"]').on('click', function() {
		clearTimeout(slideBttnTimeout);
		$(this).addClass('clicked');
		slideBttnTimeout = setTimeout(() => {
			$(this).removeClass('clicked');
		}, 1000);
	});
});
