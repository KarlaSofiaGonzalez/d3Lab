var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);
d3.json("data/ages.json").then((data)=> {
	data.forEach((d)=>{
		d.age = +d.age;
	});
	console.log(data);
	var circles=svg.selectAll("circle").data(data);
    circles.enter()
        .append("circle")
	    .attr("cx",(d,i)=>{return (i*40)+20;})
	    .attr("cy",100)
	    .attr("r", (d)=>{return d.age;})
	    .attr("fill",(d)=>{if(d.age>10){return "blue";} else{return "pink";}});
}).catch((error)=>{
    console.log(error);
});