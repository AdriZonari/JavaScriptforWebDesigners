var map;
      function initMap() {
        var hotellLocation = {lat: 55.4437498, lng: 13.0310812},
            cityStore = {lat:55.6111121, lng: 12.9779265},
            centerPoint = {lat:55.55910948701171, lng: 13.029802980983959}; //in console map.getCenter().toString(); to get this position
        
        map = new google.maps.Map(document.getElementById('hplus-map'), {
            'zoom': 10,
            'center': centerPoint, 
            'mapTypeId': google.maps.MapTypeId.ROADMAP,
            'draggable': true,
            'scrollwheel': false
        });
        var contentString = '<div><h1>Ängavallen, Gårdshotell, Restaurang, Gårdsbutik, Café</h1></div>;'
        var contentCityStore = '<div><h1>Ängavallen, City Farm Shop</div>;'
        var infowindowHotell = new google.maps.InfoWindow({
        'content': contentString, 
        });
        var infowindowCity = new google.maps.InfoWindow({
            'content': contentCityStore, 
            });
        var marker = new google.maps.Marker({
        'position': hotellLocation, 
        'map': map,
        'title': 'Ängavallen',
        });

        var markerCity = new google.maps.Marker({
            'position': cityStore, 
            'map': map,
            'title': 'Ängavallen, city',
            });
        
        marker.addListener('click', function() {
            infowindowHotell.open(map, (marker));
        
        markerCity.addListener('click', function() {
                infowindowCity.open(map, (markerCity));
          });
});
      }