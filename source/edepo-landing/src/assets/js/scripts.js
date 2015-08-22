//Substitute SVG with PNG for non-svg browsers
if (!Modernizr.svg) {
	$('.svg-img').each(function(){
		$(this).attr('src', ($(this).attr('data-png-src')));
	});
}

$(document).ready(function(){
	
	//Placeholders Fix
	$('input, textarea').placeholder();

	//Parallax (Stellar) init
	$(window).stellar();

});


$(window).load(function(){
	
});


$(window).resize(function(){
	
});