(function() {
	console.log("Hello");
	$('.main-nav-links span').on('mouseenter',function(){
		var element = $(this).data('element');
		console.log($(this).data('element'));
		$('.dropdown-container > div').hide();
		$('.dropdown-container div[data-element="' + element + '"]').show();
		$('.dropdown-container').slideDown();
	});
	$('.main-nav-links span').on('mouseleave',function(evt){
		var element = $(this).data('element');
		console.log($(this).data('element'));
		$('.dropdown-container > div').hide();
		$('.dropdown-container').slideUp();
	});

})();