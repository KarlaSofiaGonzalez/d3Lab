var svg = d3.select("#chart-area").append("svg")
	.attr("width", 600)
	.attr("height", 600);
var circle = svg.append("circle")
	.attr("cx", 250)
	.attr("cy", 250)
	.attr("r", 68)
	.attr("fill", "orange");
var rect = svg.append("rect")
	.attr("x", 225)
	.attr("y", 225)
	.attr("width", 50)
	.attr("height", 50)
	.attr("fill","pink");
	
