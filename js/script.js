$(document).ready(function() {
	$(".mainmenu").hide();
	$("#entrees").show();
	$(".btn").click(function() {
		var divId = $(this).attr('data-divid');
		$('#'+divId).slideToggle();  
	});
});