var svg = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 500);
mHeight=0;
d3.json("data/buildings.json").then((data)=> {
	data.forEach((d)=>{
		d.height = +d.height;
	});

	bName=data.map((d)=>{return d.name});
    maxHeight=d3.max(data,(d)=>{return d.height});

    var x = d3.scaleBand()
			.domain(bName)
			.range([0,400])
			.paddingInner(.3)
			.paddingOuter(.3);

    var y = d3.scaleLinear()
    		.domain([0,828])
			.range([0,400]);

	var colors=d3.scaleOrdinal()
				.domain(bName)
    			.range(d3.schemeSet3);

 
	var buildings=svg.selectAll("rect").data(data);
    buildings.enter()
        .append("rect")
	    .attr("x",(d)=>{return x(d.name);})
	    .attr("y",(d)=>{return 500-y(d.height);})
	    .attr("width",x.bandwidth())
	    .attr("height", (d)=>{return d.height;})
	    .attr("fill",(d)=>{return colors(d.name)});
}).catch((error)=>{
    console.log(error);
});