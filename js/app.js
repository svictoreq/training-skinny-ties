$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loopg: false,
		margin: 0,
		nav: true,
		navContainer: '.headline',
		navText: ['<img src="img/prev.svg" />', '<img src="img/next.svg" />'],
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
	})
});
