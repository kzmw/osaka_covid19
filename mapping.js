(function(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
})(function() {
    var WIDTH = 400, HEIGHT = 500;
    var svg = d3.selectAll("#map")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);
    var g = svg.append("g");
    d3.json('/osaka.geojson').then(function(json) {
    d3.json('/data.json').then(function(data){
for(var i = 0;i <= json.features.length -1; i++){
for(var j = 1;j<=data.city.length -1;j++){
if(data.city[j].code == json.features[i].properties.N03_007){
    json.features[i].properties.color = "red"}
}
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
	return d.properties.color
	})
	    .attr('stroke', "white");
        g.selectAll('text')
            .data(json.features)
            .enter()
	    .append('text')
	    .attr('text-anchor', "middle")
	    .attr('x', function(d) {
                var p = d3.geoCentroid(d);
var q = projection((p[0] + "," + p[1]).split(","));
                return q[0];
            })
	    .attr('y', function(d) {
                var p = d3.geoCentroid(d);
var q = projection((p[0] + "," + p[1]).split(","));
                return q[1];
            })
            .text(function(d) {
                var p = d.properties;
                return p.N03_004;
            })
	    .style("fill", "black")
	    .attr("font-size","7pt");
    });
    });
});
