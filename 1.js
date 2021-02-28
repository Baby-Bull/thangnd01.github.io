$(document).ready(function() {
	
	$('.xuong').on('click',  function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:800}, 1000);
	});

	$('.khoitt1 a').click(function(event) {
		/* Act on the event */
		console.log('test');
		$(this).toggleClass('raxa');
	});
});
 