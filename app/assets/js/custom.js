/***********************************
 * THIS IS WHERE THE MAGIC HAPPENS *
 ***********************************/

(function($) {

	$(document).ready(function() {

		$('#frontslider').carousel('cycle');

		$.localScroll();

		$('.bestbuy, .head-link').tooltip()

		// clients carousel
		$('.clients .carousel').flexslider({
			animation: "slide",
			easing: "swing",
			animationLoop: true,
			itemWidth: 148,
			itemMargin: 20,
			minItems: 1,
			maxItems: 10,
			controlNav: false,
			directionNav: false,
			move: 1
		});


		// end $document.ready
	});

	$(window).scroll(function(){
		// this will display scroll to top link
		if ($(this).scrollTop() > 300) {
			$('.scrolltop').fadeIn();
		} else {
			$('.scrolltop').fadeOut();
		} 
	});

	$(window).load(function() {

	});

	// general stuff

}(jQuery));


   