var accessToken = 'pk.eyJ1IjoibXNob2RpcXVsIiwiYSI6ImNqbWJyeXRjajA0bDEzdm9jMHdmeTk4MW4ifQ.57IqT00U7YsiiEBBXnG5Dw';

var map = L.map('mapid').setView([-6.7560931,111.5814625], 16.2);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + accessToken, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: accessToken
}).addTo(map);

var markers = [
    [-6.755578, 111.582282],
    [-6.758964, 111.580516],
    [-6.755823, 111.581552],
    [-6.754492, 111.582464],
    [-6.754702, 111.583947],
    [-6.757000, 111.582315],
    [-6.757188, 111.583779]
]

markers.forEach(function (m) {
    L.marker(m).addTo(map);
});

let popup = L.popup()
    .setLatLng([-6.755578, 111.582282])
    .setContent("<img src=\"/assets/img/logo.png\" width=\"100%\"/><b><font color=\"#1E003D\">Restoran Terbaik</font></b><br/><small>This is a awesome restoran in Rembang City</small>")
    .openOn(map)