
var aa ={}; //query für js entsprechung der dumpdaten

var Alert = ReactBootstrap.Alert; //Pseudo Import für react bootstrap alert klasse
var Accordion = ReactBootstrap.Accordion; //Pseudo Import für react bootstrap Accodion klasse
var Button = ReactBootstrap.Button; //Pseudo Import für react bootstrap Accodion klasse

$( document ).ready(function() { //beim ersten Webseite laden

  document.title = "bbi-D3-Plotter #" + window.opener.idAT_1;

  aa=window.opener.trendfile1;// schon verfügbar, und muss nicht neu geparst werden...
  
  console.log(aa);
  
  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 40, bottom: 30, left: 30},
  width = 450 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  var sVg = d3.select("#drawArea")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  // translate this svg element to leave some margin.
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  console.log("d3", d3.select("#drawArea"));
  console.log("sVG", sVg);
  
  // X scale and Axis
  //var xlen=aa.line.length;
  //alert(aa.line[0].time);

  var data = [];   //datenreihe 6 der eingänge (temp)
  var xvalue,yvalue;
  for (var i=0; i < aa.line.length; i++){
    xvalue = aa.line[i].time;
    yvalue = aa.line[i].data.cI[6];
    if (yvalue=== undefined) yvalue = data[i-1].y;
    data.push({x:xvalue, y:yvalue});
    //die rohdatenarrays könne lücken enthalten. Undefined bedeutet, der wert hat sich nicht geändert, dann den vorherigen wert verwenden 
  }


  var x = d3.scaleTime()
  .domain([aa.line[0].time, aa.line[aa.line.length - 1].time])         // This is the min and the max of the data: 0 to 100 if percentages
  .range([0, width]);       // This is the corresponding value I want in Pixel
  
  sVg
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

  // y scale and Axis
  var y = d3.scaleLinear()
  .domain([0, 150])         // This is the min and the max of the data: 0 to 100 if percentages
  .range([height, 0]);       // This is the corresponding value I want in Pixel
  
  sVg
  .append('g')
  .call(d3.axisLeft(y));

  sVg
  .selectAll("whatever")
  .data(data)
  .enter()
  .append("g")
  .append("circle")
    .attr("cx", function(d){ return x(d.x) })
    .attr("cy", function(d){ return y(d.y) })
    .attr("r", 2)
  .style("fill", "rgb(12, 240, 233)")

    var data2 = [];   //datenreihe 6 der eingänge (temp)
    var xvalue2,yvalue2;
    for (var i=0; i < aa.line.length; i++){
      xvalue2 = aa.line[i].time;
      yvalue2 = aa.line[i].data.cI[5];
      if (yvalue2=== undefined) yvalue2 = data2[i-1].y;
      data2.push({x:xvalue2, y:yvalue2});
      //die rohdatenarrays könne lücken enthalten. Undefined bedeutet, der wert hat sich nicht geändert, dann den vorherigen wert verwenden 
    }
  
    sVg
    .selectAll("whatever")
    .data(data2)
    .enter()
    .append("circle")
      .attr("cx", function(d2){ return x(d2.x) })
      .attr("cy", function(d2){ return y(d2.y) })
      .attr("r", 2)
    .style("fill", "rgb(255, 128, 0)")

 
  ReactDOM.render(
    <MyDummy/>,
    document.getElementById('myDummyID')
  );

  ReactDOM.render(
    <MyList/>,
    document.getElementById('myListID')
  );

  ReactDOM.render(
    <Button variant="secondary">Secondary</Button>,
    document.getElementById('myReactBootstrap')
  );
});

