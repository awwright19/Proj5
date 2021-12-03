
var trace1 = {
    type: "scatter",
    mode: "lines",
    name: "AL Total Deaths",
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'ALDATA.Death'),
    line: {color: "#21A216"}
};

 var trace2 = {
    type: "scatter",
    mode: "lines",
    name: "VA ",
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'ALDATA.DeathConfirmed'),
    line: {color: "#CA1B0D"}
 };
  
  var data = [trace1, trace2];
  
  Plotly.newPlot('myDiv', data);
 