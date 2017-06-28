(function() {
	console.log("Hello");
	$('.main-nav-links span').on('mouseenter mouseleave',function(){
		var element = $(this).data('element');
		console.log($(this).data('element'));
		$('.dropdown-container > div').hide();
		$('.dropdown-container div[data-element="' + element + '"]').show()
		$('.dropdown-container').slideToggle();
	});
})();