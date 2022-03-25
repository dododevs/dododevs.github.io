window.onload = function() {
	window.isFrameInViewport = function (el) {
		var rect = el.getBoundingClientRect();
		var parentRect = document
			.getElementById('film-strip')
			.getBoundingClientRect();
		return (
			rect.left + parentRect.left + rect.width / 3 >= 0 &&
			rect.right + parentRect.left <= $(window).width() + rect.width / 3
		);
	};
	window.isFrameCentered = function (el) {
		var rect = el.getBoundingClientRect();
		var parentRect = document
			.getElementById('film-strip')
			.getBoundingClientRect();
		var cp = $(window).width() / 2.0;
		return cp >= rect.left + parentRect.left && 
			cp <= rect.right + parentRect.left;
	}
	
	window.rollFrames = document
		.getElementById('film-strip')
		.contentWindow
		.document
		.getElementsByTagName('image');
	
	$('#history').on('scroll', function (evt) {
		for (var rollFrame of window.rollFrames) {
			if (window.isFrameInViewport(rollFrame)) {
				$(rollFrame).addClass('negtopos').removeClass('postoneg');
			} else {
				$(rollFrame).addClass('postoneg').removeClass('negtopos');
			}
			if (window.isFrameCentered(rollFrame)) {
				$('#history-description p')
					.removeClass('active')
					.addClass('inactive');
				$(`#description-${$(rollFrame).attr('id').substring(5)}`)
					.addClass('active')
					.removeClass('inactive');
			}
		}
	});

	$('.number#service-years').text(
		(new Date().getFullYear() - 1938).toString()
	);
	
	$(window).on('activate.bs.scrollspy', function (evt) {
		let target = evt.relatedTarget;
		if (target === '#main-header') {
			$('body').stop().animate({
				// backgroundColor: '#CD5334'
				backgroundColor: '#F8F4A6'
				// backgroundColor: '#C03231'
			}, 500);
		} else if (target === '#top') {
			$('body').stop().animate({
				backgroundColor: '#000'
			}, 500);
		}
	});
}