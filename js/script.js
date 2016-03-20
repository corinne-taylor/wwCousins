$(document).ready(function() {
	$(".mainmenu").hide();
	$(".btn").on('click', function() {
		var divId = $(this).attr('data-divid');
		$('#'+divId).slideToggle();  
	});
});