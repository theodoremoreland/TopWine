var myData = data;

<<<<<<< HEAD
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

//Create map
var myMap = L.map("map", {
    center: [39, -98],
    zoom: 5
  });

//Create title layer centered in Kansas for full visibility
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
}).addTo(myMap);

//For each state, create two bar indicators (one each for price and rating)
Object.entries(stateData).forEach(([state, info]) => {
    //console.log(value[0]);
    var options = {
        data: {
            'Price': info[0] * 5,
            'Rating': info[1] * 5,
        },
        chartOptions: {
            'Price': {
                fillColor: '#FEE5D9',
                displayText: function (value) {
                    return value.toFixed(2)/5;
                }
            },
            'Rating': {
                fillColor: '#FCAE91',
                displayText: function (value) {
                    return value.toFixed(2)/5;
                }
            }
        },
        weight: 1,
        color: '#000000'
        // Other L.Path style options
    };
    
    var barChartMarker = new L.BarChartMarker(new L.LatLng(info[2], info[3]), options).addTo(myMap);

});
console.log(stateData);
=======
console.log(myData);
>>>>>>> e8e197111246241141bcac0ed853100ff94a590f
