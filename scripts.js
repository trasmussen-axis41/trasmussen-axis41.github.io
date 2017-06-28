(function() {
	console.log("Hello");
	$('.main-nav-links span').on('mouseenter',function(){
		var element = $(this).data('element');
		console.log($(this).data('element'));
		$('.dropdown-container > div').hide();
		$('.dropdown-container div[data-element="' + element + '"]').show();
		$('.dropdown-container').stop().slideDown();
	});
	$('.main-nav-links span').on('mouseleave',function(evt){
		var v = document.elementFromPoint(evt.pageX, evt.pageY);
		var r = $(v).closest('.dropdown-container');
		if(r.length) {
			return;
		}
		var element = $(this).data('element');
		console.log($(this).data('element'));
		$('.dropdown-container').stop().slideUp();
	});
	$('.dropdown-container').on('mouseleave',function(evt) {
		var v = document.elementFromPoint(evt.pageX, evt.pageY);
		var r = $(v).closest('.main-nav');
		if(r.length) {
			return;
		}
		$('.dropdown-container').stop().slideUp();
	});

})();