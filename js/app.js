$(document).ready(function() {
	const createCarousel = () => {
		return $('.owl-carousel').owlCarousel({
			loopg: false,
			margin: 0,
			nav: true,
			navContainer: '.owl-controls',
			navText: ['<img src="img/icons/prev.svg" />', '<img src="img/icons/next.svg" />'],
			dots: false,
			responsive: {
				0: {
					items: 3
				},
				480: {
					items: 4
				},
				768: {
					items: 7
				},
				1024: {
					items: 9
				}
			}
		});
	};

	if ($(window).width() <= 1150) {
		createCarousel();
	} else {
		$('.owl-carousel').addClass('no-carousel');
	}

	$(window).resize(function() {
		if ($(window).width() <= 1150) {
			$('.owl-carousel').removeClass('no-carousel');
			createCarousel();
		} else {
			$('.owl-carousel').trigger('destroy.owl.carousel')
			$('.owl-carousel').addClass('no-carousel');
		}
	})

	let slideBttnTimeout;

	$(document).on('click', 'button[class*="owl"]', function() {
		if ($(this).hasClass('owl-next')) {
			$('button.owl-prev').removeClass('clicked');
		} else {
			$('button.owl-next').removeClass('clicked');
		}
		clearTimeout(slideBttnTimeout);
		$(this).addClass('clicked');
		slideBttnTimeout = setTimeout(() => {
			$(this).removeClass('clicked');
		}, 1000);
	});
});
