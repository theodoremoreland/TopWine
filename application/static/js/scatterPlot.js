function buildCharts(min, max) {
  // The dataset we are going to be manipulating
  var wine = data10;
  // then use the max and min values to give only the most useful of data
  var winemin = [];
  wine.forEach(function (w) {
    if (w.price >= min) {
      winemin.push(w);
    }
  });
  var winerange = [];
  winemin.forEach(function (w) {
    if (w.price <= max) {
      winerange.push(w);
    }
  });

  // Build a scatter
  // function buildScatter(bottleData) {
  var scatterData = [
    {
      x: winerange.map((w) => w.price),
      y: winerange.map((w) => w.points),
      type: "scatter",
      mode: "markers",
      text: winerange.map((w) => w.designation),
      hoverinfo: "text",
      marker: {
        color: "rgb(148,0,211)",
        size: 18,
        opacity: 0.2,
      },
    },
  ];

  var scatterlayout = {
    xaxis: {
      title: {
        text: "Price ($)",
        size: 18,
      },
    },
    yaxis: {
      title: {
        text: "Rating (points)",
        size: 18,
      },
    },
  };
  Plotly.newPlot("scatter", scatterData, scatterlayout, { responsive: true });
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the first sample from the list to build the initial plots
  const firstmin = 0;
  const firstmax = 100000;

  buildCharts(firstmin, firstmax);
  // buildMetadata(firstmin, firstmax);
}

init();

// Trying to get the new ranges when someone selects it on the scatter plot
function optionChanged(selectObject) {
  var ranges = selectObject.value;
  var maxmin = ranges.split(",");
  var newmin = maxmin[0];
  var newmax = maxmin[1];

  buildCharts(newmin, newmax);
}
