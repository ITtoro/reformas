$(function(){
	
	$('.slider1').mobilyslider({
		autoplay: false,
		bullets: true,
		arrowsHide: false
	});
	
	$('.slider2').mobilyslider({
		transition: 'vertical',
		animationSpeed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		bullets: false
	});
	
	$('.slider3').mobilyslider({
		transition: 'fade',
		animationSpeed: 10000,
		autoplay: false,
		bullets: true,
		arrowsHide: true
	});
});
