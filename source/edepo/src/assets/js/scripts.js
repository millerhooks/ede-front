$(document).ready(function(){
	
	//Placeholders Fix
	$('input, textarea').placeholder();

	//Hide and Show Placeholder on inputs focus
	var placeholderContent = $('.input-search').attr('placeholder');
	$('.input-search').focusin(function(){
		$(this).attr('placeholder','');
	});
	$('.input-search').focusout(function(){
		$(this).attr('placeholder', placeholderContent);
	});

	//OffCanvas initializing
	$('html').offcanvas();

	//Truncate the text
	$('.truncated-center').truncate({
		width: 'auto',
		token: '&hellip;',
		side: 'center',
		multiline: false
	});

});


$(window).load(function(){
	
});


$(window).resize(function(){
	
});