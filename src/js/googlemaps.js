$(document).on('ready', function(){

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 37.773963, lng: -122.426273},
    zoom: 13
  });

  initMap(map);

});


function initMap(map) {


  navigator.geolocation.getCurrentPosition(function(position) {

    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    map.setCenter(pos);

    // creating markers
    var markers = [];
    var marker;
    var locations = [
      ['Andrisen Morton', 39.720622, -104.950710],
      ['Armitage & McMillan', 39.757202, -105.008315],
      ['Axel\'s', 39.640907, -106.374441],
      ['Berkeley Supply', 39.774877, -105.044190],
      ["Blackland Clothing Company", 40.521796, -105.060545],
      ['Family Affair', 39.753788, -104.991790],
      ['The Garment District', 39.669606, -104.941051],
      ['Jiberish', 39.757510, -105.007335],
      ['Lawrence Covell', 39.720082, -104.950170],
      ['Nod And Rose', 40.018872, -105.279926],
      ['Players Clothing', 39.750620, -105.001291],
      ['Soul Haus', 39.743384, -104.971299],
      ['Station', 39.755390, -104.977441],
      ['Steadbrook', 39.715683, -104.987232],
      ['Sully & Co', 39.753281, -105.023863],
      ['Topo Designs Boulder', 40.017401, -105.283126],
      ['Topo Designs Denver Flagship', 39.757709, -104.986164],
      ['Topo Designs Fort Collins', 40.586244, -105.076525],
      ['Weekends Boulder', 40.017774, -105.279765],
      ['Winter Session', 39.757352, -104.974607]
    ];

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: {
          lat: locations[i][1],
          lng: locations[i][2]
        },
        map: map,
        title: locations[i][0]
      });
      markers.push(marker);
    }

    // drawing circle
    search_area = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      center : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      radius : 2200
    };

    search_area = new google.maps.Circle(search_area);
    search_area.setMap(map);

    // finding markers inside circle
    var bounds = search_area.getBounds();

    var markersWithinBounds = markers.filter(function(marker){
      return bounds.contains(marker.getPosition());
    });

    console.log(markersWithinBounds);
    closestStores(markersWithinBounds);


  });

}

function closestStores(arr){
  for(i=0;i<arr.length;i++){
    $('#closeStores').append('<li>'+arr[i]["title"]+'</li>');
  }
}
