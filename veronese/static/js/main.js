window.onload = function() {
	window.isElementInViewport = function (el) {
		var rect = el.getBoundingClientRect();
		var parentRect = document
			.getElementById('film-strip')
			.getBoundingClientRect();
		return (
			rect.left + parentRect.left + rect.width / 3 >= 0 &&
			rect.right + parentRect.left <= $(window).width() + rect.width / 3
		);
	};
	
	window.rollFrames = document
		.getElementById('film-strip')
		.contentWindow
		.document
		.getElementsByTagName('image');
	
	$('#history').on('scroll', function (evt) {
		for (var rollFrame of window.rollFrames) {
			if (window.isElementInViewport(rollFrame)) {
				$(rollFrame).addClass('negtopos').removeClass('postoneg');
			} else {
				$(rollFrame).addClass('postoneg').removeClass('negtopos');
			}
		}
	});
	
	$(window).on('activate.bs.scrollspy', function (evt) {
		let target = evt.relatedTarget;
		console.log(evt);
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