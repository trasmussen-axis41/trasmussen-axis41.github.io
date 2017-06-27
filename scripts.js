(function() {
	console.log("Hello");
	$('.main-nav-links span').on('click',function(){
		var element = $(this).data('element');
		console.log($(this).data('element'));
		$('.dropdown-container div').hide();
		$('.dropdown-container div:not[data-element="' + element + '"]').show()
		$('.dropdown-container').slideToggle();
	});
})();