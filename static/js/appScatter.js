var wine = data10;

console.log(wine);

var bottle;
var price;
var rating;
var grape;
var designation;

Object.entries(wine).forEach(([key, value]) => {
    if (key == 'id') {
        bottle = value;
    } else if (key == 'price'){
        price = value;
    } else if (key =='points'){
        rating = value;
    } else if (key =='grape'){
        grape = value;
    } else if (key =='designation'){
        designation = value;
    }
});

var bottleData = {};
//Create new object with states as keys and info as values
for (i=0; i < bottle.length; i++) {
    bottleData[id[i]] = [price[i], rating[i], grape[i]];
};

console.log(bottleData);

// Build a scatter
function buildScatter(bottleData) {
    var scatterData = [{
        x: bottleData.map(d => d.price),
        y: bottleData.map(d => d.rating),
        type: "scatter",
        mode: "markers",
        text: bottleData.map(d => d.designation),
        hoverinfo: "text"
    }];
    Plotly.newPlot("scatter", scatterData);
}
  