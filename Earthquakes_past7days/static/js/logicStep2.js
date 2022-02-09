// Add console.log to check to see if our code is working.
console.log("working");

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.city + "</h2>")
//     }

//   }).addTo(map);



// // Create a polyline using the line coordinates and make the line red.
// var lineMarkerOptions = {
//     color: 'blue',
//     weight: 4,
//     opacity: 0.5
// };

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// });

// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {

    // We turn each feature into a circleMarker on the map.
    
    pointToLayer: function(feature, latlng) {
                console.log(data);
                return L.circleMarker(latlng);
            },
        }).addTo(map);
    });



//  // Grabbing our GeoJSON data.
//  L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup();
//     }
//   }).addTo(map);

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/Jonahrahn/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // Accessing the airport GeoJSON URL
// let torontoData = "https://raw.githubusercontent.com/Jonahrahn/Mapping_Earthquakes/main/torontoRoutes.json";

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data).addTo(map);
//     style:myStyle,
//     // onEachFeature: function(feature, layer) {
//     //     layer.bindPopup("<h3> Airline" + feature.properties.airline  + "</h3> <hr><h3> Destination: "
//     //      + feature.properties.dst "</h3> ");
//     // }
// // }).addTo(map);
// });

// // Get data from cities.js
// let cityData = cities;
// console.log(cityData)

// // Marker styling
// var cityMarkerOptions = {
//     color: 'red',
//     weight: 4,
//     opacity: 1,
//     fillOpacity: 0.8
// };


// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius : city.population/200000,
//         cityMarkerOptions
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });
