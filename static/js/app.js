var myData = data;

console.log(myData);

var states;
var prices;
var ratings;
var lats;
var lngs;

//Store each set of state-level data in a variable
Object.entries(myData).forEach(([key, value]) => {
    if (key == 'state') {
        states = value;
    } else if (key == 'avg_price'){
        prices = value;
    } else if (key =='avg_score'){
        ratings = value;
    } else if (key == 'lat'){
        lats = value;
    } else {
        lngs = value;
    }
});

var stateData = {};

//Create new object with states as keys and info as values
for (i=0; i < states.length; i++) {
    stateData[states[i]] = [prices[i], ratings[i], lats[i], lngs[i]];
};

console.log(stateData);

//For each state, create two bar indicators (one each for price and rating)
var barMarkers = [];

Object.entries(stateData).forEach(([state, info]) => {
    //console.log(value[0])
    var options = {
        data: {
             'Price': info[0] * 5,
            'Rating': info[1] * 5
        },
        chartOptions: {

            'Price': {
                fillColor: '#0cff45',
                displayText: function (value) {
                    return value.toFixed(2)/5;
                }
            },
            'Rating': {
                fillColor: '#b21ac9',
                displayText: function (value) {
                    return value.toFixed(2)/5;
                }
            }
        },
        weight: 1,
        color: '#000000'
        // Other L.Path style options
    };
    
    var barChartMarker = new L.BarChartMarker(new L.LatLng(info[2], info[3]), options);
    barMarkers.push(barChartMarker);
});

var stateMarkers = [];
Object.entries(stateData).forEach(([state, info]) => {
    //console.log(value[0]);
    var ratingPriceRatio = (info[1]/info[0]).toFixed(2);

    var circleColor;
    if (ratingPriceRatio <= 3){
        circleColor = '#FCF3CF'
    } else if (ratingPriceRatio <= 5) {
        circleColor = '#F7DC6F'
    } else {
        circleColor = '#F1C40F'
    };

    var markerOptions = {
        stroke: false,
        fillOpacity: 0.9,
        color: 'white', 
        fillColor: circleColor, 
        radius: ratingPriceRatio * 5
    };
    var stateMarker = L.circleMarker([info[2], info[3]], 
        markerOptions).bindPopup(state + ": " + ratingPriceRatio + " pts/$");

    stateMarkers.push(stateMarker);
});

var barLayer = L.layerGroup(barMarkers);
var stateLayer = L.layerGroup(stateMarkers);

//Create title layers for light and dark maps
var darkMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
});

var lightMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
});

var overlayMaps = {
    'Price vs. Ratings': barLayer, 
    'State Rating/Price Ratio': stateLayer
};

var baseMaps = {
    'Dark Map': darkMap,
    'Light Map': lightMap
};

//Create map
var myMap = L.map("map", {
    center: [39, -98],
    zoom: 3, 
    layers: [darkMap, barLayer]
});

L.control.layers(baseMaps, overlayMaps, {
    collapsed: false,
    position:'topleft'
}).addTo(myMap);





console.log(stateData);
console.log(myData);

