window.addEventListener('DOMContentLoaded', function () {
getJsonp_GAS()
})

window.matchMedia('(prefers-color-scheme: light)').addListener((e) => {
if (e.matches == true){
sex_graph.data.datasets[0].borderColor= 'White';
sex_graph.data.datasets[0].hoverBorderColor= 'White';
sex_graph.options.title.fontColor = 'Black';
sex_graph.options.legend.labels.fontColor = 'Black'
sex_graph.update();

age_chart.options.scales.xAxes[0].gridLines.color = 'rgba(0,0,0,0.1)';
age_chart.options.scales.xAxes[0].gridLines.zeroLineColor =  'rgba(0,0,0,0.25)';
age_chart.options.scales.yAxes[0].gridLines.color = 'rgba(0,0,0,0.1)';
age_chart.options.scales.yAxes[0].gridLines.zeroLineColor =  'rgba(0,0,0,0.25)';
age_chart.options.scales.xAxes[0].ticks.fontColor = 'Black';
age_chart.options.scales.yAxes[0].ticks.fontColor = 'Black';
age_chart.options.title.fontColor = 'Black';
age_chart.update();

patient_chart.options.scales.yAxes[0].gridLines.color = 'rgba(0,0,0,0.3)';
patient_chart.options.scales.yAxes[0].gridLines.zeroLineColor =  'rgba(0,0,0,0.55)';
patient_chart.options.scales.xAxes[0].ticks.fontColor = 'Black';
patient_chart.options.scales.yAxes[0].ticks.fontColor = 'Black';
patient_chart.options.title.fontColor = 'Black';
patient_chart.update();

onset_chart.options.scales.yAxes[0].gridLines.color = 'rgba(0,0,0,0.3)';
onset_chart.options.scales.yAxes[0].gridLines.zeroLineColor =  'rgba(0,0,0,0.55)';
onset_chart.options.scales.xAxes[0].ticks.fontColor = 'Black';
onset_chart.options.scales.yAxes[0].ticks.fontColor = 'Black';
onset_chart.options.title.fontColor = 'Black';
onset_chart.update();

}
})

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
if (e.matches == true){

sex_graph.data.datasets[0].borderColor= 'Black';
sex_graph.data.datasets[0].hoverBorderColor= 'Black';
sex_graph.options.title.fontColor = 'White';
sex_graph.options.legend.labels.fontColor = 'White'
sex_graph.update();

age_chart.options.scales.xAxes[0].gridLines.color = 'rgba(255,255,255,0.3)';
age_chart.options.scales.xAxes[0].gridLines.zeroLineColor =  'rgba(255,255,255,0.55)';
age_chart.options.scales.yAxes[0].gridLines.color = 'rgba(255,255,255,0.3)';
age_chart.options.scales.yAxes[0].gridLines.zeroLineColor =  'rgba(255,255,255,0.55)';
age_chart.options.scales.xAxes[0].ticks.fontColor = 'White';
age_chart.options.scales.yAxes[0].ticks.fontColor = 'White';
age_chart.options.title.fontColor = 'White';
age_chart.update();

patient_chart.options.scales.yAxes[0].gridLines.color = 'rgba(255,255,255,0.3)';
patient_chart.options.scales.yAxes[0].gridLines.zeroLineColor =  'rgba(255,255,255,0.55)';
patient_chart.options.scales.xAxes[0].ticks.fontColor = 'White';
patient_chart.options.scales.yAxes[0].ticks.fontColor = 'White';
patient_chart.options.title.fontColor = 'White';
patient_chart.update();

onset_chart.options.scales.yAxes[0].gridLines.color = 'rgba(255,255,255,0.3)';
onset_chart.options.scales.yAxes[0].gridLines.zeroLineColor =  'rgba(255,255,255,0.55)';
onset_chart.options.scales.xAxes[0].ticks.fontColor = 'White';
onset_chart.options.scales.yAxes[0].ticks.fontColor = 'White';
onset_chart.options.title.fontColor = 'White';
onset_chart.update();

}
})

function getJsonp_GAS() {
const spinner = document.getElementById('loading');
spinner.classList.remove('loaded');
$("#load_status").text("感染者情報を読み込み中");
var table_data = "";
fetch( 'https://script.google.com/macros/s/AKfycbyrNVl5HtIe6be_n_d2ixxEG5ABXkTb_bZI3RvfOM4MpAXYySQ/exec',)
   .then(function(response) {
    return response.json();})
   .then(data => {
$("#load_status").text("データを書き出し中");
$("#number_text").text(data.sum);
if(data.change > 0){$("#change").text("前日比：＋" + data.change + "人")}
else if(data.change == 0){$("#change").text("前日比：±" + data.change + "人")}
else if(data.change < 0){$("#change").text("前日比：－" + data.change + "人")}
var last_update = new Date(data.last_update);
var last_update_minute = ('00' + last_update.getMinutes()).slice(-2)
$("#update").text("最終更新：" + last_update.getFullYear() + "/" + (last_update.getMonth() + 1) + "/" + last_update.getDate() + " " + last_update.getHours() + ":" + last_update_minute);
if (data.signal == "yellow") {
          $("#signal_frame").html("<div class=\"signal_off\"></div><div class=\"signal_yerrow\"></div><div class=\"signal_off\"></div>")
        } else if (data.signal == "green") {
          $("#signal_frame").html("<div class=\"signal_green\"></div><div class=\"signal_off\"></div><div class=\"signal_off\"></div>")
        } else if (data.signal == "red") {
          $("#signal_frame").html("<div class=\"signal_off\"></div><div class=\"signal_off\"></div><div class=\"signal_red\"></div>")
        }

var table_data = "";
var proportion_per = "";
var proportion_percent = "";
for (var i=0;i<=(data.city.length -1);i++){
var change = data.city[i].change;
var patient = data.city[i].patient;
if(change > 0){
change =  "＋" + Number(change).toLocaleString()
}
else if(change == 0){
change = Number(change).toLocaleString()
}
else if(change < 0){
change = "－" + Number(change).toLocaleString()
}
if(patient > 0){
proportion_per = Number(Math.round(data.city[i].population / data.city[i].patient)).toLocaleString() + "人に1人";
proportion_percent = Math.floor(data.city[i].patient / data.city[i].population * 100 * Math.pow(10,3)) / Math.pow(10,3) + "%";
}
else{
proportion_per = "";
proportion_percent = "";
}
 
if (data.city[i].name == "大阪府外" || data.city[i].name == "不明") {
        table_data += "<tr><td>" + data.city[i].name + "</td><td style=\"text-align: right\"></td><td style=\"text-align: right\">" + Number(data.city[i].patient).toLocaleString() + "</td><td style=\"text-align: right\">" + change + "</td><td></td><td style=\"display:none\"></td></tr>";
	}
	else{
	table_data += "<tr><td>" + data.city[i].name + "</td><td style=\"text-align: right\">" + Number(data.city[i].population).toLocaleString() + "</td><td style=\"text-align: right\">" + Number(data.city[i].patient).toLocaleString() + "</td><td style=\"text-align: right\">" + change + "</td><td>" + proportion_per + "</td><td style=\"display:none\">" + proportion_percent + "</td></tr>";
	}}
table_data = "<tr><th>居住地</th><th>人口</th><th>感染者数</th><th>前日比</th><th>感染者の割合<div class=\"proportion_select\"><input type=\"radio\" name=\"proportion1\" id=\"person\" value=\"人\" checked=\"\" onclick=\"person()\"><label for=\"person\" class=\"proportion_person\">人</label><input type=\"radio\" id=\"percent\" name=\"proportion1\" value=\"%\" onclick=\"percent()\"><label for=\"percent\" class=\"proportion_percent\">%</label></div></th><th style=\"display:none\">感染者の割合<div class=\"proportion_select\"><input type=\"radio\" name=\"proportion2\" id=\"person\" value=\"人\" onclick=\"person()\"><label for=\"person\" class=\"proportion_person\">人</label><input type=\"radio\" id=\"percent\" name=\"proportion2\" value=\"%\" checked=\"\" onclick=\"percent()\"><label for=\"percent\" class=\"proportion_percent\">%</label></div></th></tr>" + table_data;
document.getElementById('covid_table').innerHTML = table_data 
var defaultFontColor = 'Black';
var gridColor = 'rgba(0,0,0,0.1)';
var zeroLineColor = 'rgba(0,0,0,0.25)';
var borderColor = 'White';
var hoverBorderColor = 'White';

if (window.matchMedia('(prefers-color-scheme: dark)').matches == true){
defaultFontColor = 'White';
gridColor = 'rgba(255,255,255,0.3)';
zeroLineColor = 'rgba(255,255,255,0.55)';
borderColor = 'Black';
hoverBorderColor = 'Black';
}

Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
Chart.defaults.global.defaultFontColor = defaultFontColor;
Chart.defaults.global.title.fontSize = 18;

var sex = document.getElementById("sex");
  window.sex_graph = new Chart(sex, {
    type: 'pie',
    data: {
      labels: ["男性", "女性","不明"],
      datasets: [{
          backgroundColor: [
              "#1e90ff",
              "#ff69b4",
	      "#d8d8d8"
          ],
          borderColor:borderColor,
          hoverBorderColor:hoverBorderColor,
          data: [data.sex[0], data.sex[1], data.sex[2]]
      }]
    },
    options: {
      title: {
        display: true,
        text: '男女別感染者の割合'
      }
    }
  });

var age = document.getElementById("age");
  window.age_chart = new Chart(age, {
    type: 'horizontalBar',
    data: {
      labels: ["未就学児", "就学児", "10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代", "90代", "100歳以上"],
      datasets: [{
          label: '人数',
backgroundColor: "#40e0d0",
          data: [data.age[0], data.age[1],data.age[2],data.age[3],data.age[4],data.age[5],data.age[6],data.age[7],data.age[8],data.age[9],data.age[10],data.age[11]]
      }]
    },
    options: {
       scales: {
        xAxes: [{
           gridLines:{
           color: gridColor,
           zeroLineColor : zeroLineColor
           },
            ticks: {
                min: 0
            }
        }],
       yAxes: [{
           gridLines:{
           color: gridColor,
           zeroLineColor : zeroLineColor
           }
        }]
    },
      title: {
        display: true,
        text: '年齢別感染者数'
      },
legend: {
            display: false
         }

    }
  });
var length = data.announce.length;
var day = new Array(length);
var date = new Date(2020, 0, 28);
for (var daily = 0; daily <= length -1; daily++){
date.setDate(date.getDate() + 1);
var month = date.getMonth() + 1;
var day2 = date.getDate();
day[daily] = month + "/" + day2;
}
for (var announce_count = 0; announce_count <= length -1; announce_count++){
if(data.announce[announce_count] == null){
data.announce[announce_count] = 0
}
}
var patient_can = document.getElementById("patient_can");
  window.patient_chart = new Chart(patient_can, {
    data: {
      labels: day,
      datasets: [{
	  type: 'bar',
          label: '人数',
backgroundColor: "#40e0d0",
          data: data.announce
      },
		{
          type: 'line',
          label: '陽性率',
          borderColor: "#ba55d3",
	  pointBackgroundColor: "#ba55d3",
	  fill:false,
          data: data.daily_proportion
      }]
    },
    options: {
       scales: {
        xAxes: [{
           gridLines:{
           display: false
           }
        }],
       yAxes: [{
           gridLines:{
           color: gridColor,
           zeroLineColor : zeroLineColor
           },
            ticks: {
                min: 0
            }
        }]
    },
      title: {
        display: true,
        text: '発表日別感染者数'
      },
legend: {
            display: false
         }

    }
  })
var length2 = data.onset.length;
var day3 = new Array(length2);
var date2 = new Date(2020, 0, 19);
for (var daily2 = 0; daily2 <= length2 -1; daily2++){
date2.setDate(date2.getDate() + 1);
var month2 = date2.getMonth() + 1;
var day4 = date2.getDate();
day3[daily2] = month2 + "/" + day4;
}
for (var onset_count = 0; onset_count <= length2 -1; onset_count++){
if(data.onset[onset_count] == null){
data.onset[onset_count] = 0
}
}
var onset_can = document.getElementById("onset_can");
  window.onset_chart = new Chart(onset_can, {
    type: 'bar',
    data: {
      labels: day3,
      datasets: [{
          label: '人数',
backgroundColor: "#40e0d0",
          data: data.onset
      }]
    },
    options: {
       scales: {
        xAxes: [{
           gridLines:{
           display: false
           }
        }],
       yAxes: [{
           gridLines:{
           color: gridColor,
           zeroLineColor : zeroLineColor
           },
            ticks: {
                min: 0
            }
        }]
    },
      title: {
        display: true,
        text: '発症日別感染者数'
      },
legend: {
            display: false
         }

    }
  })
	if (window.outerWidth >= 530){
	var WIDTH = 500;
	var HEIGHT = 600;}
	else{
	var WIDTH = window.outerWidth - 30;
	var HEIGHT = ((window.outerWidth) * 1.2);
	}
	if (window.outerWidth >= 530){
	var scale = 36000;}
	else{
	var scale = window.outerWidth * 72;
	}	
	var min_value = 100;
	var max_value = 0;
    var svg2 = d3.selectAll("#map2")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);
    var g2 = svg2.append("g");
    d3.json('/osaka.geojson').then(function(json2) {

for(var i = 0;i <= json2.features.length -1; i++){
for(var j = 1;j <= data.city.length -1;j++){
if(data.city[j].code == json2.features[i].properties.N03_007){
json2.features[i].properties.proportion = Math.floor(data.city[j].patient / data.city[j].population * 100 * Math.pow(10,3)) / Math.pow(10,3)
	if (min_value > json2.features[i].properties.proportion){
	min_value = json2.features[i].properties.proportion
	}
	if (max_value < json2.features[i].properties.proportion){
	max_value = json2.features[i].properties.proportion
	}
}}
}
	var color = d3.scaleSequential(d3. interpolateReds).domain([min_value, max_value]);
	    var projection2 = d3.geoMercator()
            .scale(scale)
            .center([135.45,34.662])
            .translate([WIDTH / 2, HEIGHT / 2]);
        var path2 = d3.geoPath()
            .projection(projection2);
        g2.selectAll('path')
            .data(json2.features)
            .enter()
            .append('path')
            .attr('d', path2)
            .attr('fill', function(d){
	var value = d.properties.proportion;
        if (value > 0) {
            return color(value);
        }
        if (value == 0){
	return "#FFF";
	}
	})
	    .attr("stroke-width",2)
	    .attr('stroke', "rgb(127,127,127)")
	     .on("mouseover", function (d) {
                var selection = d3.select( "#tooltip" )
		 selection.html(d.properties.N03_004 + "<br>感染者の割合：" + d.properties.proportion + "%" )
                .style("visibility", "visible")
        })
        .on("mousemove", function (d) {
                var selection = d3.select( "#tooltip" )
                .style("top", (event.pageY - 20) + "px")
                .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function (d) {
                var selection = d3.select( "#tooltip" )
		 selection.html("")
                .style("visibility", "hidden")
        });
    });
})
.then(function(){
const spinner = document.getElementById('loading');
spinner.classList.add('loaded');
  })
}
