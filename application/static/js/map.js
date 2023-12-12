var myData = data;
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
for (let i = 0; i < states.length; i++) {
    stateData[states[i]] = [prices[i], ratings[i], lats[i], lngs[i]];
};

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
var darkMap = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 3,
	maxZoom: 5.5,
	accessToken: API_KEY
});

var lightMap = L.tileLayer('https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 3,
	maxZoom: 5.5,
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
