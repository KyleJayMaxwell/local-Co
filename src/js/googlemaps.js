$(document).on('ready', function(){

  //map options
  var options = {
    center: {
      lat: 37.773963,
      lng: -122.426273
    },
    zoom: 11,
  },
  
  element = document.getElementById('map-canvas');
  //map itself

  var map = new google.maps.Map(element, options);

  // User location
  var latLong = {
    "url": "https://freegeoip.net/json/",
    "method": "GET",
  };

  $.ajax(latLong).done(function (response) {
    var userLat = response.latitude;
    var userLon = response.longitude;
    console.log(userLat,userLon);
//re center for users location
  var pos = {
    lat: userLat,
    lng: userLon
  };

    map.setCenter(pos);
  });

// pin address

    var locations = [
      ['Andrisen Morton', 39.720622, -104.950710],
      ['Armitage & McMillan', 39.757202, -105.008315],
      ['Axel\'s', 39.640907, -106.374441],
      ['Berkeley Supply', 39.774877, -105.044190],
      ['Family Affair', 39.753788, -104.991790],
      ['The Garment District', 39.669606, -104.941051],
      ['Jiberish', 39.757510, -105.007335],
      ['Lawrence Covell', 39.720082, -104.950170],
      ['Nod And Rose', 40.018872, -105.279926],
      ['Players Clothing', 39.750620, -105.001291],
      ['Soul Haus', 39.743384, -104.971299],
      ['Station', 39.755390, -104.977441],
      ['Lawrence Covell', 39.720082, -104.950170],
      ['Lawrence Covell', 39.720082, -104.950170],
    ];

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      var marker = new google.maps.Marker({
        position: {
          lat: locations[i][1],
          lng: locations[i][2]
        },
        map: map,
        title: locations[i][0]
      });

      //   marker = new google.maps.Marker
      //   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      //   map: map
      // }
    };


  // var jibLocation = new google.maps.Marker({
  //   position: {
  //     lat: 39.757750,
  //     lng: -105.007347
  //   },
  //   map: map,
  //   title: 'Jiberish'
  // });


});
