$(document).ready(function () {
	//NAVIGATION
	
	var lastLink;
	var currentPage = window.location.hash.split('#')[1];

	setInitialContent();

	function setInitialContent() {
		//If no current page -> go to home
		if (currentPage) {
			$(".content").load("./content/" + currentPage + ".html");
		} else {
			$(".content").load("./content/home.html");
		}
	}

	//links navigation
	$('.link').click(function () {
		var hrf = $(this).attr('href');
		window.location.hash = hrf.split('.')[0];
		$(".content").load("./content/" + hrf);
		
		//Nav Class toggle
		if (lastLink) {
			lastLink.toggleClass("link_selected");
		}
		$(this).toggleClass("link_selected");
		lastLink = $(this);
		$('html,body').scrollTop(0);
		return false;
	});
	
	//SLIDERS
	$('.slides').slick({
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		adaptiveHeight: true,
		arrows:false,
		cssEase: 'ease-out'
		

	});

});