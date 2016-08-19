$(document).ready(function(){
  $(".glyphicon-circle-arrow-left").click(function(){
    $(".tweet").html("<h4><strong>@xyztwitter: </strong>Some tweet on clicking left</h4>");
  });
  $(".glyphicon-circle-arrow-right").click(function(){
    $(".tweet").html("<h4><strong>@blahtwitter: </strong>Some tweet on clicking right</h4>");
  });
	//Google Maps JS
	//Set Map
	function initialize() {
			var myLatlng = new google.maps.LatLng(53.3333,-3.08333);
			var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
			var mapOptions = {
				zoom: 11,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		//Callout Content
		var contentString = "<h2>Contact us</h2><h4>bhh@gmail.com</h4><small>Your address goes here</small>";
		//Set window width + content
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 500
		});

		//Add Marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: imagePath,
			title: 'image title'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

		//Resize Function
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});
