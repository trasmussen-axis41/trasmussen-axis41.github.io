(function() {
	console.log("Hello");
	$('.main-nav-links span').on('click',function(){
		$('.dropdown-container').slideToggle();
		console.log($(this).data('element'));
	});
})();