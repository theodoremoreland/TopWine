var Top10 = table10;

var varieties = [];
var avg_price = [];
var avg_rating = [];

for (var index in Top10.grape) {
    var variety = Top10.grape[index];
    if (!varieties.includes(variety)) {
        varieties.push(variety);
    }
};

var sum = 0;
var count = 0;

for (var i in varieties) {

    for (var j in Top10.price) {
        
        if (Top10.grape[j] == varieties[i]) {
            count += 1;
            sum += parseInt(Top10.price[j]);
        }
        
    };

    avg_price.push(sum/count);
};

var sum = 0;
var count = 0;

for (var i in varieties) {

    for (var j in Top10.points) {
        
        if (Top10.grape[j] == varieties[i]) {
            count += 1;
            sum += parseInt(Top10.points[j]);
        }
        
    };
    
    avg_rating.push(sum/count);
};

var trace1 = {
    x: varieties,
    y: avg_price,
    name: "Average Price",
    type: "bar",

    marker: {color: 'rgb(0,250,154)'}
  };

var trace2 = {
    x: varieties,
    y: avg_rating,
    name: "Average Rating",
    type: "bar",

    marker: {color: 'rgb(128,0,128)'}
  };

  var data = [trace1, trace2];

  var layout = {barmode: 'group', };
  
  Plotly.newPlot("bar-chart", data, layout);