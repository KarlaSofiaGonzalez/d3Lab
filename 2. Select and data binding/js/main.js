var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);
var data = [25, 20, 15, 10, 5];
var rectangles=svg.selectAll("rect").data(data);
rectangles.enter()
    .append("rect")
	.attr("x",(d,i)=> {return (i*50);})
	.attr("y",(d,i)=> {return (i*5)+50;})
	.attr("height", (d)=>{return d;})
	.attr("width", 40)
	.attr("fill","pink");