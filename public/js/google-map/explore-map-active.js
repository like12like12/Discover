function map(address) {
    var map;
    var latlng = new google.maps.LatLng(13.8244035, 100.5413393);
    var stylez = [{
        featureType: "all",
        elementType: "all",
        stylers: [{
            saturation: -50
        }]
    }];
    var mapOptions = {
        zoom: 17,
        center: latlng,
        scrollwheel: true,
        scaleControl: true,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
        }
    };
    map = new google.maps.Map(document.getElementById("exploreGoogleMap"), mapOptions);
    var geocoder_map = new google.maps.Geocoder();
    // address = "พระปรางค์วัดอรุณราชวรารามราชวรมหาวิหาร"
    // var address = document.getElementById("01").innerHTML;
    console.log(address)
    geocoder_map.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: map.getCenter()
            });
        } else {
            // alert("Geocode was not successful for the following reason: " + status);
        }
    });
    var mapType = new google.maps.StyledMapType(stylez, {
        name: "Grayscale"
    });
    map.mapTypes.set('gMap', mapType);
    map.setMapTypeId('gMap');
}