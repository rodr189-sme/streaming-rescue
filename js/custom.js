
$( document ).ready(function() {
	$({countNum: $('.counter').text()}).animate({
		countNum: 47
	}, {
		duration: 2000,
		easing: 'linear',
		step: function () {
			$('.counter').text(Math.ceil(this.countNum)+"%");
		},
		complete: function () {
			$('.counter').text("47"+"%");
		}
	});
});


