"use strict";

mapboxgl.accessToken = mapboxAPIKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 9,
    center: [-98.4936, 29.4641]
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4936, 29.4641])
    .addTo(map);

marker.setDraggable(true);

$(document).ready(function () {
    $.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        appid: openWeatherAPIKey,
        q:     "San Antonio, US",
        units: `imperial`
    }).done(function (data) {
        console.log('5 day forecast', data);
    })
});

