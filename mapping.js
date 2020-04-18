(function(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
})(function() {
    var svg = d3.selectAll("#map")
        .attr("width", "100%")
        .attr("height", "auto")
        .attr("max-width", "500px")
        .attr("min-width", "250px");
    var g = svg.append("g");
    d3.json('/osaka.geojson').then(function(json) {
    d3.json('/data.json').then(function(data){
for(var i = 0;i <= json.features.length -1; i++){
for(var j = 1;j<=data.city.length -1;j++){
if(data.city[j].code == json.features[i].properties.N03_007){
    json.features[i].properties.patient_color = "rgb(" + data.city[j].color[0][0] + "," + data.city[j].color[0][1] + "," + data.city[j].color[0][2] +")"
    json.features[i].properties.patient = data.city[j].patient
}}
}
	    var projection = d3.geoMercator()
            .scale(30000)
            .center(d3.geoCentroid(json))
            .translate([WIDTH / 2, HEIGHT / 2]);
        var path = d3.geoPath()
            .projection(projection);
        g.selectAll('path')
            .data(json.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', function(d){
	return d.properties.patient_color
	})
	    .attr("stroke-width",2)
	    .attr('stroke', "rgb(127,127,127)")
	     .on("mouseover", function (d) {
                var selection = d3.select( "#tooltip" )
		 selection.html(d.properties.N03_004 + "<br>感染者数：" + d.properties.patient + d3.geoCentroid(json) )
                .style("visibility", "visible")
        })
        .on("mousemove", function (d) {
                var selection = d3.select( "#tooltip" )
                .style("top", (event.pageY - 20) + "px")
                .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function (d) {
                var selection = d3.select( "#tooltip" )
		 selection.html("" )
                .style("visibility", "hidden")
        });
    });
    });
});
