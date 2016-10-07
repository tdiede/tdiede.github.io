"use strict";

mapboxgl.accessToken = 'pk.eyJ1IjoidGRpZWRlIiwiYSI6ImNpdDd1aWoyajBiZW0yb3AxM3Y1djRvaHoifQ.IOrWn38ePpSiFqIoVF6Mjw';

var tdiedeStyle = "mapbox://styles/tdiede/ciqt08rgj0005bjkn8qkc8axo";

// Setting initial coordinates, zoom, pitch, bearing.
var coord = [-122.43805537700867, 37.771823592326754];
var zoom = 5;
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

var canvas = map.getCanvasContainer();
