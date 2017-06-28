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
		var v = document.elementFromPoint(evt.pageX, evt.pageY);
		var r = $(v);
		if(r.length) {
			return;
		}
		var element = $(this).data('element');
		console.log($(this).data('element'));
		$('.dropdown-container > div').hide();
		$('.dropdown-container').slideUp();
	});
	$('.dropdown-container').on('mouseleave',function(evt)) {
		$('.dropdown-container > div').hide();
		$('.dropdown-container').slideUp();
	}

})();