fetch('https://opensky-network.org/api/states/all?lamin=27.4&lomin=85.0&lamax=28.0&lomax=86.0')
    .then(response => response.json())
    .then(data => {
        console.log(data); // You can loop through this to display on a map
    })
    .catch(error => console.log(error));


    
    // Initialize the map with minZoom and maxZoom settings
var map = L.map('map', {
    center: [27.7000, 85.3667], // KTM Coordinates
    zoom: 10,                   // Initial zoom level
    minZoom: 5,                 // Minimum zoom level (zoomed out)
    maxZoom: 15                 // Maximum zoom level (zoomed in)
});

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,   // Max tile zoom level
}).addTo(map);
