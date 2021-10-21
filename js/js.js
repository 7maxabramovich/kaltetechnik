$(document).ready(function() {
	$('.slick-slider').slick({
		autoplay: false,
		speed: 800,
		autoplaySpeed: 2000,
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		infinite: true,
		slidesToShow: 1, 
		slidesToScroll: 1,
	});

	$('.header-menu-hamburger input').click(function() {
    $('.header-menu-hamburger').next('.header-mobile-menu-list').slideToggle();
  });	
});