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



});



		// $('.default_display').mouseover(function(){
		// $(this).find('.hover_display').css('display','block');
		// });

		// $('.default_display').mouseout(function(){
		// 	$(this).find('.hover_display').css('display','none');
		// });