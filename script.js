$(document).ready(function(){

	$('.cards').mouseover(function(){
		$(this).find('.hover_box').css('display','block');
		$(this).find('.base_layer').css('display', 'none');
			console.log('yo');
	});

	$('.cards').mouseout(function(){
		$(this).find('.hover_box').css('display','none');
		$(this).find('.base_layer').css('display', 'block');
	});


	// $('.cards').onclick(function(){
	// 	if ($(this).('.base_layer') = 'block'){
	// 		$.(this).('base_layer').css('display', 'none');
	// 		$.(this).('hover_box').css('display', 'block');
	// 	} else if ($(this).('base_layer') = 'none'){
	// 		$.(this).('.base_layer').css('display', 'block');
	// 		$.(this).('.hover_box').css('display', 'none');
	// 		};
	// 	};


});



