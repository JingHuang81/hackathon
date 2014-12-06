var myLatlng = new google.maps.LatLng(-34.397, 150.644);
var mapOptions = {
  zoom: 8,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
    
var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title:"Hello World!"
});

marker.setMap(map);
