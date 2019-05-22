
function buildCharts(min, max){ 
    // The dataset we are going to be manipulating
    var wine = data10;
    // console.log(wine);
    console.log("HI");
    // then use the max and min values to give only the most useful of data
    var winemin = [];
    wine.forEach(function(w){
        if(w.price >= min) {
            winemin.push(w);
        }
    });
    var winerange = [];
    winemin.forEach(function(w){
        if(w.price <= max) {
            winerange.push(w);
        }
    });

    // var winemin = Object.keys(wine).reduce(function (filtered, key) {
    //     if (wine.price < max) filtered.price = wine.price;
    //     return filtered;
    // });

    // var winemin = Object.keys(wine).filter(function(price) {
    //     return wine[price] <= max;
    //     }).map(function(key) {
    //         return wine[key];
    // });


    // console.log(winemin);

    // The new dataset based on the max and min
    // Object.keys(winemin).map(function(price, index) {
    //      winemin[price] >= min;
    // });
    // var winerange = Object.assign({}, winemin);
    // console.log(winemin);

    // Object.keys(winerange).map(function(price, index) {
    //     winerange[price] <= max;
    // });

    // var winemin = wine.map(price >= min);
    // var winerange = winemin.map(price <= max);
    console.log(winerange);

    // Create some variables we'll need
    // var bottle;
    // var price;
    // var rating;
    // var grape;
    // var designation;


    // Object.entries(winerange).forEach(([key, value]) => {
    //     if (key == 'id') {
    //         bottle = value;
    //     } else if (key == 'price'){
    //         price = value;
    //     } else if (key =='points'){
    //         rating = value;
    //     } else if (key =='grape'){
    //         grape = value;
    //     } else if (key =='designation'){
    //         designation = value;
    //     }
    // });


  

    // Build a scatter
    // function buildScatter(bottleData) {
    var scatterData = [{
        x: winerange.map(w => w.price),
        y: winerange.map(w => w.points),
        type: "scatter",
        mode: "markers",
        text: winerange.map(w => w.designation),
        hoverinfo: "text",
        marker: {
            color: "Crimson",
            size: 18,
            opacity: .2
        },
        }];
    // }];
    var scatterlayout = {
        xaxis: {
            title:{
                text:"Price ($)",
                size: 18}
        },
        yaxis: {
            title:{
                text:"Rating (points)",
                size: 18}
        }
    }
    Plotly.newPlot("scatter", scatterData, scatterlayout);
};



function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
    
    // Use the first sample from the list to build the initial plots
    const firstmin = 0;
    const firstmax = 100000;
    buildCharts(firstmin, firstmax);
    // buildMetadata(firstmin, firstmax);
};
init();

// Trying to get the new ranges when someone selects it on the scatter plot
function optionChanged(selectObject) {
    var ranges = selectObject.value;
    console.log(ranges);
    var maxmin = ranges.split(',')
    var newmin = maxmin[0];
    var newmax = maxmin[1];
    buildCharts(newmin, newmax);
};