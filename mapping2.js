(function(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
})(function() {
    if (window.innerWidth >= 530){
	var WIDTH = 500;
	var HEIGHT = 600;}
	else{
	var WIDTH = window.innerWidth;
	var HEIGHT = (window.innerWidth * 1.2);
	}
	if (window.innerWidth >= 500){
	var scale = 36000;}
	else{
	var scale = window.innerWidth * 72;
	}
    var svg = d3.selectAll("#map2")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);
    var g = svg.append("g");
    d3.json('/osaka.geojson').then(function(json) {
    d3.json('/data.json').then(function(data){
for(var i = 0;i <= json.features.length -1; i++){
for(var j = 1;j<=data.city.length -1;j++){
if(data.city[j].code == json.features[i].properties.N03_007){
json.features[i].properties.proportion = Math.floor(data.city[j].patient / data.city[j].population * 100 * Math.pow(10,3)) / Math.pow(10,3)
if(Math.floor(data.city[j].patient / data.city[j].population * 100 * Math.pow(10,3)) / Math.pow(10,3) == 0){
    json.features[i].properties.patient_color = "rgb(" + data.color[4][0] + "," + data.color[4][1] + "," + data.color[4][2] +")"
}
else if(Math.floor(data.city[j].patient / data.city[j].population * 100 * Math.pow(10,3)) / Math.pow(10,3) >= 0.015){
    json.features[i].properties.patient_color = "rgb(" + data.color[0][0] + "," + data.color[0][1] + "," + data.color[0][2] +")"
}
else if(Math.floor(data.city[j].patient / data.city[j].population * 100 * Math.pow(10,3)) / Math.pow(10,3) >= 0.01){
    json.features[i].properties.patient_color = "rgb(" + data.color[1][0] + "," + data.color[1][1] + "," + data.color[1][2] +")"
}
else if(Math.floor(data.city[j].patient / data.city[j].population * 100 * Math.pow(10,3)) / Math.pow(10,3) >= 0.006){
    json.features[i].properties.patient_color = "rgb(" + data.color[2][0] + "," + data.color[2][1] + "," + data.color[2][2] +")"
}
else if(Math.floor(data.city[j].patient / data.city[j].population * 100 * Math.pow(10,3)) / Math.pow(10,3) > 0){
    json.features[i].properties.patient_color = "rgb(" + data.color[3][0] + "," + data.color[3][1] + "," + data.color[3][2] +")"
}
}}
}
	    var projection = d3.geoMercator()
            .scale(scale)
            .center([135.45,34.662])
            .translate([WIDTH / 2, HEIGHT / 2]);
        var path = d3.geoPath()
            .projection(projection);
        g.selectAll('path')
            .data(json.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', function(d){
	return d.properties.proportion_color
	})
	    .attr("stroke-width",2)
	    .attr('stroke', "rgb(127,127,127)")
	     .on("mouseover", function (d) {
                var selection = d3.select( "#tooltip" )
		 selection.html(d.properties.N03_004 + "<br>感染者の割合：" + d.properties.proportion )
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
