$(document).ready(function() {
	$(".mainmenu").hide();
	$(".btn").click(function() {
		var divId = $(this).attr('data-divid');
		$('#'+divId).slideToggle();  
	});
});