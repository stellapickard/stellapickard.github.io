$(document).ready(function(){

	$('.cards').mouseover(function(){
		$(this).find('.hover_box').css('display','block');
		$(this).find('.base_layer').css('display', 'none');
			console.log('yo');
			sleep(10);
	});

	$('.cards').mouseout(function(){
		$(this).find('.hover_box').css('display','none');
		$(this).find('.base_layer').css('display', 'block');
		sleep(10);
	});
	function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }

});



