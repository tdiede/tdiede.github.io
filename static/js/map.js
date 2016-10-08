"use strict";

mapboxgl.accessToken = 'pk.eyJ1IjoidGRpZWRlIiwiYSI6ImNpdDd1aWoyajBiZW0yb3AxM3Y1djRvaHoifQ.IOrWn38ePpSiFqIoVF6Mjw';

var tdiedeStyle = "mapbox://styles/tdiede/ciqt08rgj0005bjkn8qkc8axo";

// Setting initial coordinates, zoom, pitch, bearing.
var coord = [-185.81130846264423, 14.489482196592917];
var zoom = 1.6;
var pitch = 0;
var bearing = 0;

// Check if Mapbox GL is supported by browser.
if (!mapboxgl.supported()) {
    alert('Your browser does not support Mapbox GL .');
} else {
    var map = new mapboxgl.Map({
        container: 'map-mapbox',
        style: tdiedeStyle,  //stylesheet location
        center: coord,
        zoom: zoom,
        pitch: pitch, // pitch in degrees
        bearing: bearing, // bearing in degrees
    });
}

// map.setStyle(lightStyle);  // if want to change at future point.

var nav = new mapboxgl.Navigation({position: 'top-left'});
map.addControl(nav);

map.scrollZoom.disable();

var canvas = map.getCanvas();

canvas.style.position = 'relative';
canvas.style.height = 'inherit';
canvas.style.width = '100%';

var locations_data = '../../data/locations.geojson';

map.on('load', function () {
    map.addSource("points", {
        "type": "geojson",
        "data": locations_data
    });

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": "points",
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
});