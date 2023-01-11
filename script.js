$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
// =========
let featuresLink = document.querySelector('#featureLink');

featuresLink.addEventListener('click', function (event) {

	if (window.matchMedia("(max-width: 767.98px)").matches) {
		window.scrollTo({
			top: 1400,
			left: 0,
			// smooth, instant,
			// or auto; default
			behavior: "smooth"
		});
	} else {
		window.scrollTo({
			top: 1250,
			left: 0,
			// smooth, instant,
			// or auto; default
			behavior: "smooth"
		});
	}
})
// =========
let aboutLink = document.querySelector('#aboutLink');

aboutLink.addEventListener('click', function (event) {

	if (window.matchMedia("(max-width: 767.98px)").matches) {
		window.scrollTo({
			top: 2400,
			left: 0,
			// smooth, instant,
			// or auto; default
			behavior: "smooth"
		});
	} else {
		window.scrollTo({
			top: 2000,
			left: 0,
			// smooth, instant,
			// or auto; default
			behavior: "smooth"
		});
	}
})
// ===============
let pricingLink = document.querySelector('#pricingLink');

pricingLink.addEventListener('click', function (event) {

	if (window.matchMedia("(max-width: 767.98px)").matches) {
		window.scrollTo({
			top: 8100,
			left: 0,
			// smooth, instant,
			// or auto; default
			behavior: "smooth"
		});
	} else {
		window.scrollTo({
			top: 5900,
			left: 0,
			// smooth, instant,
			// or auto; default
			behavior: "smooth"
		});
	}
})
// ===========
let blogLink = document.querySelector('#blogLink');

blogLink.addEventListener('click', function (event) {

	if (window.matchMedia("(max-width: 767.98px)").matches) {
		window.scrollTo({
			top: 6980,
			left: 0,
			// smooth, instant,
			// or auto; default
			behavior: "smooth"
		});
	} else {
		window.scrollTo({
			top: 4950,
			left: 0,
			// smooth, instant,
			// or auto; default
			behavior: "smooth"
		});
	}
})
// ========================
let contactLink = document.querySelector('#contactLink');

contactLink.addEventListener('click', function (event) {

	if (window.matchMedia("(max-width: 767.98px)").matches) {
		window.scrollTo({
			top: 10000,
			left: 0,
			// smooth, instant,
			// or auto; default
			behavior: "smooth"
		});
	} else {
		window.scrollTo({
			top: 9000,
			left: 0,
			// smooth, instant,
			// or auto; default
			behavior: "smooth"
		});
	}
})