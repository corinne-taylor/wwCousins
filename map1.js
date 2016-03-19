function intialize() {
	var mapProp = {
		center: new google.maps.LatLng (-85.639928, 38.234914),
		zoom: 15;
		mapTypeId: google.maps.MatTypeId.ROADMAP
	};
}

var map=new
google.maps.Map(document.getElementByID("googleMap"),
	mapProp);

google.maps.event.addDomListener(window, 'load', intialize);

function loadScript() {
	var script = document.createElement("script");
	script.src = "http://maps.googleapis.com/maps/api.js?callback=intialize";
	document.body.appendChild(script);
}

window.onload = loadScript;