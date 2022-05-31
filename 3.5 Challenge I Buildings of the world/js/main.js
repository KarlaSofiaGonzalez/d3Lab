var svg = d3.select("#chart-area").append("svg")
	.attr("width", 900)
	.attr("height", 900);
mHeight=0;
d3.json("data/buildings.json").then((data)=> {
	data.forEach((d)=>{
		d.height = +d.height;
        if(d.height>mHeight){
            mHeight=d.height;
        }
	});
    console.log(data);
	var buildings=svg.selectAll("rect").data(data);
    buildings.enter()
        .append("rect")
	    .attr("x",(d,i)=>{return (i*40)+30;})
	    .attr("y",(d)=>{return mHeight-d.height;})
	    .attr("width",30)
	    .attr("height", (d)=>{return d.height;})
	    .attr("fill","pink");
}).catch((error)=>{
    console.log(error);
});