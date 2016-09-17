"use strict";

mapboxgl.accessToken = 'pk.eyJ1IjoidGRpZWRlIiwiYSI6ImNpdDd1aWoyajBiZW0yb3AxM3Y1djRvaHoifQ.IOrWn38ePpSiFqIoVF6Mjw';

var layers = [{
            "id": "water",
            "type": "fill",
            "paint": {
                "fill-color": "#eeeeee",
                "fill-opacity": 0.3,
                }
            }];

var lightStyle = "mapbox://styles/mapbox/light-v9";

// This is the JSON style object, called below when creating a new instance of Map Class. Root properties.
var style = {
    "version": 8,
    "name": "Mapbox Streets",
    "sprite": "mapbox://sprites/mapbox/streets-v8",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "sources": {
            "mapboxstreets": {
                "type": "vector",
                "url": lightStyle,
                },
            },
    "transition": {
        "duration": 300,
        "delay": 0
        },
    "layers": layers,
    };


// Setting initial coordinates, zoom, pitch, bearing.
var coord = [-122.43805537700867, 37.771823592326754];
var zoom = 11.85;
var pitch = 0;
var bearing = 0;


// Set bounds to San Francisco.
var bounds = [
    [-122.1, 37], // Southwest coordinates
    [-122.6, 38]  // Northeast coordinates
];

// Check if Mapbox GL is supported by browser.
if (!mapboxgl.supported()) {
    alert('Your browser does not support Mapbox GL .');
} else {
    var map = new mapboxgl.Map({
        container: 'map-mapbox',
        style: lightStyle,  //stylesheet location
        center: coord,
        zoom: zoom,
        pitch: pitch, // pitch in degrees
        bearing: bearing, // bearing in degrees
        maxBounds: bounds,
    });
}

// map.setStyle(lightStyle);  // if want to change at future point.

var nav = new mapboxgl.Navigation({position: 'top-left'});
map.addControl(nav);

var canvas = map.getCanvasContainer();
