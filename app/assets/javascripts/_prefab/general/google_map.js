// TECHDEBT - Google Maps needs to work with require JS and jasmine

pf.googleMap = {
  styles: [
  {
    "featureType": "landscape.man_made",
    "stylers": [
      { "color": "#EFEFED" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#FFB680" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#FFB680" },
      { "saturation": -57 }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#FFB680" },
      { "saturation": -45 }
    ]
  },{
    "featureType": "transit.line",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.station.bus",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.station.airport",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "water"  }
],
  conventions: {
    center:               new google.maps.LatLng(51.517156,-0.07081),
    customMarker:         "/assets/_prefab/skin/google_maps/pin.png",
    mapContainer:         "google_map",
    headingLevel:         "h2",
    headingClass:         "strong",
    contentStringClasses: "unbalanced section with our office location",
    title:                "Our Head Office",
    description:          "<p>We're based at 88-94 Wentworth Street, just off Brick Lane.</p>" +
                          "<p>Did you know, the first <a href=\"http://en.wikipedia.org/wiki/Jack_the_Ripper\">Jack the Ripper</a> murder happened just yards from our office, and we're just up the road from the school where the <a href=\"http://en.wikipedia.org/wiki/Kray_twins\">Kray twins</a> went?</p>" +
                          "<p>Luckily, these days Brick Lane is far more chilled out and cosmopolitan, which is why all the cool kids hang out here.</p>" +
                          "<small>Image &copy; <a href=\"http://www.flickr.com/photos/71776010@N04/6484008655/in/photolist-aSYeSF-axfeKk-cnYutq-ee7LNY-ee26EF-7XjV17-cZAFLN-e3KNEM-bk4VTf-7ZzkJC-88esye-8wBJPk-fbJ8nW-fbtXZ2-8CFVkH-7M5ii8-awFCsj-fc3h6P-eC4tdQ-9xPFcb-eueUqo-bvyRDK-dF5otx-ayMvXQ-7N9aBn-bFNe8F-9xPKoh-d7TVdd-82TM4H-bZgTf5-dFuhFJ-bsTe79-eubJit-bFNdPD-bAboje-eubDfn-dFujFf-aPrU5M-7Extgq-bsTk9E-bvydbB-aPrTE2-8qeFVc-8qhRrj-9H6BP3-bwk77C-7S6hx8-7S6oLB-ee7LxW-ee24bB-aPrVL6\">" +
                          "Alex" +
                          "</a>. Used under <a href=\"http://creativecommons.org/licenses/by/2.0/\">Creative Commons</a> license.</small>"
  },
  options: {
    center: new google.maps.LatLng(51.519156,-0.07081),
    zoom: 16,
    panControl: false,
    zoomControl: true,
    scaleControl: false,
    mapTypeId: 'Styled',
    mapTypeControlOptions: {
        mapTypeIds: ['Styled']
    }
  },
  setupGoogleMap: function() {
    var map_container = document.getElementById(pf.googleMap.conventions.mapContainer);
    var map = new google.maps.Map(map_container, pf.googleMap.options);
    var marker = new google.maps.Marker({
      position: pf.googleMap.conventions.center,
      map: map,
      title: pf.googleMap.conventions.title,
      icon: pf.googleMap.conventions.customMarker
    });
    var contentString = '<div class="' + pf.googleMap.conventions.contentStringClasses + '">'+
      '<' + pf.googleMap.conventions.headingLevel + ' class="' + pf.googleMap.conventions.headingClass + '">' + pf.googleMap.conventions.title + '</' + pf.googleMap.conventions.headingLevel + '>'+
      pf.googleMap.conventions.description +
      '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var styledMapType = new google.maps.StyledMapType(pf.googleMap.styles, { name: 'Styled' });
    map.mapTypes.set('Styled', styledMapType);
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }
};

define(['jquery','common'], function() {
  pf.googleMap.setupGoogleMap();
});
