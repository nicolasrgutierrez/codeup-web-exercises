"use strict";

$(document).ready(function () {
    var seconds = 1000;
    var coordinates = {
        lat: 29.4641,
        lon: -98.4936
    }
     var startingPlace = 'San Antonio',
         markerCoordinates,
         today,
         i;

    $('#location').html(startingPlace);




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

    function forecast(weatherCoordinates) {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            appid: openWeatherAPIKey,
            lat:    weatherCoordinates.lat,
            lon:   weatherCoordinates.lon,
            units: 'imperial'
        }).done(function(data) {
            data.daily.forEach(function(day, index) {
                today = new Date(day.dt * seconds);
                i = index + 1;
                // $('#main-heading').html(`${data.name} Weather`);
                $(`#day-${i}`).html(today.toDateString());
                // $('#current-temp').html(`${data.main.temp}&deg; F`);
                 $(`#conditions-${i}`).attr('src', `http://openweathermap.org/img/w/${day.weather[0].icon}.png`);
                $(`#highLow-${i}`).html(`${day.temp.max}&deg; / ${day.temp.min}&deg;`);
                $(`#description-${i}`).html(day.weather[0].description);
                $(`#humidity-${i}`).html(`Humidity: ${day.humidity}%`);
                $(`#wind-${i}`).html(`Wind speed: ${day.wind_speed} mph`);
                $(`#pressure-${i}`).html(`Pressure: ${day.pressure} hPa`);
            });
        });
    }

    forecast(coordinates);




    $('#btn').click(function(e) {
        e.preventDefault();
        let userSearch = $('#input').val();
        //console.log(userSearch)
        geocode(userSearch, mapboxAPIKey).then(function(searchCoordinates) {
            //console.log(searchCoordinates);
            let searchLng = searchCoordinates[0];
            let searchLat = searchCoordinates[1];
            let userCoordinates = {
                lat: searchLat,
                lon: searchLng
            }
            //console.log(userCoordinates)
            $('#location').html(userSearch);
            forecast(userCoordinates);
            map.setCenter(userCoordinates);
            marker.setLngLat(userCoordinates);
        });
    });

    marker.on('dragend', function() {
        let lat = marker.getLngLat().lat
        let lon = marker.getLngLat().lng
        let updateCoordinates = {
            lat: lat,
            lon: lon
    };
        forecast(updateCoordinates);

    })

    map.on('mousemove', function(event) {
        markerCoordinates = event.lngLat;
    });

    map.on('click', function(event) {
        marker.setLngLat(markerCoordinates)
            .addTo(map);
        coordinates.lon = markerCoordinates.lng;
        coordinates.lat = markerCoordinates.lat;
        // console.log(event);
        // console.log(mouseCoords);
        forecast(coordinates);
        map.setCenter(markerCoordinates);
    });


});



