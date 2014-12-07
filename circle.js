// This example creates circles on the map, representing
// populations in North America.

// First, create an object containing LatLng and population for each city.
var citymap = {};
citymap['chicago'] = {
  center: new google.maps.LatLng(41.878113, -87.629798),
  population: 2714856
};
citymap['newyork'] = {
  center: new google.maps.LatLng(40.714352, -74.005973),
  population: 8405837
};
citymap['losangeles'] = {
  center: new google.maps.LatLng(34.052234, -118.243684),
  population: 3857799
};
citymap['vancouver'] = {
  center: new google.maps.LatLng(49.25, -123.1),
  population: 603502
};

var cityCircle;

function chooseColors(amount){
  if (amount / 1000000 < 3){
    return "#FF0000"
  } else if (amount / 1000000 < 5) {
    return "#FFFF00" //YELLOW
  } else {
    return "#00FF00"
  }
}

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(37.09024, -95.712891),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
  var infowindow = new google.maps.InfoWindow({
      content: ""
  });
  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {

    var marker = new google.maps.Marker({
      position: citymap[city].center,
      map: map,
      title: city
    });
//    google.maps.event.addListener(marker, 'click', function() {
//      infowindow.open(map,marker);
//      console.log(infowindow)
//    });
    var stringInWindow = '<div id="content">'+
      '<div id="siteNotice">'+ city + '<br>' + 
      " water "  + citymap[city].population + '<br>' +
      '<a href="http://hackathon1234.azurewebsites.net/input.htm">'+
      'http://hackathon1234.azurewebsites.net/input.htm</a>' + 
      '</div>' + '</div>';
    bindInfoWindow(marker, map, infowindow, stringInWindow);
    var color = chooseColors(citymap[city].population)
    var populationOptions = {
      strokeColor: color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: 30000000000 / (Math.sqrt(citymap[city].population) * 100)
    };
    
    
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);
  }
  
  function bindInfoWindow(marker, map, infowindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(strDescription);
        infowindow.open(map, marker);
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
