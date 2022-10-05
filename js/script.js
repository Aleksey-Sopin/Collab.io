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

let x = document.querySelector('.MyCanvas');

let xctx = x.getContext('2d');
xctx.font = '32px Aria';

let gradient = xctx.createLinearGradient(0, 0, x.width, 50);
gradient.addColorStop('0', 'yellow');
gradient.addColorStop('1', 'blue');

xctx.fillStyle = gradient;
xctx.fillText('Слава Україні!', 13, 90);



Object.assign(x.style, {
	position: 'absolute',
	top: '50%',
	left: '40%',
	display: 'none',
	width: '300px',
});

let logoMain = document.querySelector('.header__logo');

logoMain.addEventListener('click', function (event) {
	x.style.display = 'inline';
})

x.addEventListener('click', function (event) {
	x.style.display = 'none';
})
	


