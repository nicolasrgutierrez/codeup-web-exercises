"use strict";

$(document).ready(function () {
    var seconds = 1000;
    var saCoordinates = {
        lat: 29.4641,
        lon: -98.4936
    }
     var startingPlace = 'San Antonio',
         today, i;

    $('span').html(startingPlace);

    var userSearch = $('#input');


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

    function forecast(coordinates) {
        $.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            appid: openWeatherAPIKey,
            lat: coordinates.lat,
            lon: coordinates.lon,
            units: `imperial`
        }).done(function(data) {
            data.daily.forEach(function(day, index) {
                today = new Date(day.dt * seconds);
                i = index + 1;
                $(`#day-${i}`).html(today.toDateString());
                $(`#highLow-${i}`).html(`${day.temp.max}&deg; / ${day.temp.min}&deg;`);
                $(`#description-${i}`).html(day.weather[0].description);
                $(`#humidity-${i}`).html(`Humidity: ${day.humidity}%`);
                $(`#wind-${i}`).html(`Wind speed: ${day.wind_speed} mph`);
                $(`#pressure-${i}`).html(`Pressure: ${day.pressure} hPa`);
            });
        });
    }

    forecast(saCoordinates);
});


