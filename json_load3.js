window.addEventListener('DOMContentLoaded', function () {
  getJsonp_GAS()
})
window.matchMedia('(prefers-color-scheme: light)').addListener((e) => {
  if (e.matches == true) {
    patient_chart.options.scales.yAxes[0].gridLines.color = 'rgba(0,0,0,0.1)';
    patient_chart.options.scales.yAxes[0].gridLines.zeroLineColor = 'rgba(0,0,0,0.25)';
    patient_chart.options.scales.xAxes[0].ticks.fontColor = 'Black';
    patient_chart.options.scales.yAxes[0].ticks.fontColor = 'Black';
    patient_chart.options.title.fontColor = 'Black';
    patient_chart.options.scales.yAxes[1].gridLines.color = 'rgba(0,0,0,0.1)';
    patient_chart.options.scales.yAxes[1].gridLines.zeroLineColor = 'rgba(0,0,0,0.25)';
    patient_chart.options.scales.yAxes[1].ticks.fontColor = 'Black';
    patient_chart.options.legend.labels.fontColor = 'Black';
    patient_chart.update();
    onset_chart.options.scales.yAxes[0].gridLines.color = 'rgba(0,0,0,0.1)';
    onset_chart.options.scales.yAxes[0].gridLines.zeroLineColor = 'rgba(0,0,0,0.25)';
    onset_chart.options.scales.xAxes[0].ticks.fontColor = 'Black';
    onset_chart.options.scales.yAxes[0].ticks.fontColor = 'Black';
    onset_chart.options.title.fontColor = 'Black';
    onset_chart.update();
  }
})
window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
  if (e.matches == true) {
    patient_chart.options.scales.yAxes[0].gridLines.color = 'rgba(255,255,255,0.3)';
    patient_chart.options.scales.yAxes[0].gridLines.zeroLineColor = 'rgba(255,255,255,0.55)';
    patient_chart.options.scales.xAxes[0].ticks.fontColor = 'White';
    patient_chart.options.scales.yAxes[0].ticks.fontColor = 'White';
    patient_chart.options.scales.yAxes[1].ticks.fontColor = 'White';
    patient_chart.options.scales.yAxes[1].gridLines.color = 'rgba(255,255,255,0.3)';
    patient_chart.options.scales.yAxes[1].gridLines.zeroLineColor = 'rgba(255,255,255,0.55)';
    patient_chart.options.title.fontColor = 'White';
    patient_chart.options.legend.labels.fontColor = 'White';
    patient_chart.update();
    onset_chart.options.scales.yAxes[0].gridLines.color = 'rgba(255,255,255,0.3)';
    onset_chart.options.scales.yAxes[0].gridLines.zeroLineColor = 'rgba(255,255,255,0.55)';
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
  fetch('https://script.google.com/macros/s/AKfycbye_6bGPTwcBE-xsTPNnQUpDs6xle34MHcTTBYfdIFb-YhguaA/exec', )
    .then(function (response) {
    return response.json();})
    .then(data => {
    $("#load_status").text("データを書き出し中");
    $("#number_text").text(data.sum);
    var last_update = new Date(data.last_update);
    var last_update_minute = ('00' + last_update.getMinutes()).slice(-2)
    $("#update").text("最終更新：" + last_update.getFullYear() + "/" + (last_update.getMonth() + 1) + "/" + last_update.getDate() + " " + last_update.getHours() + ":" + last_update_minute);
    $("#change").text("前日比：" + data.dod);
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
    for (var i = 0; i <= (data.city.length - 1); i++) {
      var patient = data.city[i].patient;
      if (patient > 0) {
        proportion_per = Number(Math.round(data.city[i].population / data.city[i].patient)).toLocaleString() + "人に1人";
        proportion_percent = Math.floor(data.city[i].patient / data.city[i].population * 100 * Math.pow(10, 3)) / Math.pow(10, 3) + "%";
      } else {
        proportion_per = "";
        proportion_percent = "";
      }
      if (data.city[i].name == "大阪府外" || data.city[i].name == "不明") {
        table_data += "<tr><td>" + data.city[i].name + "</td><td style=\"text-align: right\"></td><td style=\"text-align: right\">" + Number(data.city[i].patient).toLocaleString() + "</td><td style=\"text-align: right\">" + Number(data.city[i].dod).toLocaleString() + "</td><td></td><td style=\"display:none\"></td></tr>";
      } else {
        table_data += "<tr><td>" + data.city[i].name + "</td><td style=\"text-align: right\">" + Number(data.city[i].population).toLocaleString() + "</td><td style=\"text-align: right\">" + Number(data.city[i].patient).toLocaleString() + "</td><td style=\"text-align: right\">" + Number(data.city[i].dod).toLocaleString() + "</td><td>" + proportion_per + "</td><td style=\"display:none\">" + proportion_percent + "</td></tr>";
      }
    }
    table_data = "<tr><th>居住地</th><th>人口</th><th>感染者数</th><th>前日比</th><th>感染者の割合<div class=\"proportion_select\"><input type=\"radio\" name=\"proportion1\" id=\"person\" value=\"人\" checked=\"\" onclick=\"person()\"><label for=\"person\" class=\"proportion_person\">人</label><input type=\"radio\" id=\"percent\" name=\"proportion1\" value=\"%\" onclick=\"percent()\"><label for=\"percent\" class=\"proportion_percent\">%</label></div></th><th style=\"display:none\">感染者の割合<div class=\"proportion_select\"><input type=\"radio\" name=\"proportion2\" id=\"person\" value=\"人\" onclick=\"person()\"><label for=\"person\" class=\"proportion_person\">人</label><input type=\"radio\" id=\"percent\" name=\"proportion2\" value=\"%\" checked=\"\" onclick=\"percent()\"><label for=\"percent\" class=\"proportion_percent\">%</label></div></th></tr>" + table_data;
    document.getElementById('covid_table').innerHTML = table_data
    var defaultFontColor = 'Black';
    var gridColor = 'rgba(0,0,0,0.1)';
    var zeroLineColor = 'rgba(0,0,0,0.25)';
    var borderColor = 'White';
    var hoverBorderColor = 'White';
    if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
      defaultFontColor = 'White';
      gridColor = 'rgba(255,255,255,0.3)';
      zeroLineColor = 'rgba(255,255,255,0.55)';
      borderColor = 'Black';
      hoverBorderColor = 'Black';
    }
    Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
    Chart.defaults.global.defaultFontColor = defaultFontColor;
    Chart.defaults.global.title.fontSize = 18;
    var length = data.announce.length;
    var day = new Array(length);
    var date;
    var announce = new Array(length);
    var announce2 = new Array(length);
    var month;
    var day2;
    for (var announce_count = 0; announce_count <= length - 1; announce_count++) {
      if (data.announce[announce_count]["positive"] == null) {
        data.announce[announce_count]["positive"] = 0
      }
      if (data.announce[announce_count]["tests-conducted"] == null) {
        data.announce[announce_count]["tests-conducted"] = 0
      }
      announce[announce_count] = data.announce[announce_count]["positive"];
      announce2[announce_count] = (data.announce[announce_count]["positive"])/(data.announce[announce_count]["tests-conducted"])*100;
      date = new Date(data.announce[announce_count]["date"])
      month = date.getMonth() + 1;
      day2 = date.getDate();
      day[announce_count] = month + "/" + day2;
    }
    var patient_can = document.getElementById("patient_can");
    window.patient_chart = new Chart(patient_can, {
      data: {
        labels: day,
        datasets: [{
          type: 'bar',
          label: '人数',
          backgroundColor: "#40e0d0",
          yAxisID: "y-axis-patient",
          data: announce
        }, {
          type: 'line',
          label: '陽性者率',
          borderColor: "#ba55d3",
          borderWidth: 1,
          hoverBorderWidth: 1,
          pointBackgroundColor: "#ba55d3",
          radius: 1.5,
          hoverRadius: 3,
          fill: false,
          yAxisID: "y-axis-proportion",
          data: announce2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            id: "y-axis-patient",
            type: "linear",
            position: "left",
            gridLines: {
              color: gridColor,
              zeroLineColor: zeroLineColor
            },
            ticks: {
              min: 0
            }
          }, {
            id: "y-axis-proportion",
            type: "linear",
            position: "right",
            gridLines: {
              color: gridColor,
              zeroLineColor: zeroLineColor,
              drawOnChartArea: false
            },
            ticks: {
              min: 0,
              max: 30,
              stepSize: 3
            }
          }]
        },
        title: {
          display: true,
          text: '発表日別感染者数と陽性者率'
        }
      }
    })
    var length2 = data.onset.length;
    var day3 = new Array(length2);
    var onset = new Array(length2);;
    var date2;
    var month2;
    var day4;
    for (var onset_count = 0; onset_count <= length2 - 1; onset_count++) {
      if (data.onset[onset_count] == null) {
        data.onset[onset_count] = 0
      }
      onset[onset_count] = data.onset[onset_count]["number"];
      date2 = new Date(data.onset[onset_count]["date"])
      month2 = date2.getMonth() + 1;
      day4 = date2.getDate();
      day3[onset_count] = month2 + "/" + day4;
    }
    var onset_can = document.getElementById("onset_can");
    window.onset_chart = new Chart(onset_can, {
      type: 'bar',
      data: {
        labels: day3,
        datasets: [{
          label: '人数',
          backgroundColor: "#40e0d0",
          data: onset
        }]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              color: gridColor,
              zeroLineColor: zeroLineColor
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
    if (window.outerWidth >= 530) {
      var WIDTH = 500;
      var HEIGHT = 600;
    } else {
      var WIDTH = window.outerWidth - 30;
      var HEIGHT = ((window.outerWidth) * 1.2);
    }
    if (window.outerWidth >= 530) {
      var scale = 36000;
    } else {
      var scale = window.outerWidth * 72;
    }
    var min_value = 100;
    var max_value = 0;
    var svg2 = d3.selectAll("#map2").attr("width", WIDTH).attr("height", HEIGHT);
    var g2 = svg2.append("g");
    d3.json('/osaka.geojson').then(function (json2) {
      for (var i = 0; i <= json2.features.length - 1; i++) {
        for (var j = 1; j <= data.city.length - 1; j++) {
          if (data.city[j].code == json2.features[i].properties.N03_007) {
            json2.features[i].properties.proportion = Math.floor(data.city[j].patient / data.city[j].population * 100 * Math.pow(10, 3)) / Math.pow(10, 3)
            if (min_value > json2.features[i].properties.proportion) {
              min_value = json2.features[i].properties.proportion
            }
            if (max_value < json2.features[i].properties.proportion) {
              max_value = json2.features[i].properties.proportion
            }
          }
        }
      }
      var color = d3.scaleSequential(d3.interpolateReds).domain([min_value, max_value]);
      var projection2 = d3.geoMercator().scale(scale).center([135.45, 34.662]).translate([WIDTH / 2, HEIGHT / 2]);
      var path2 = d3.geoPath().projection(projection2);
      g2.selectAll('path').data(json2.features).enter().append('path').attr('d', path2).attr('fill', function (d) {
        var value = d.properties.proportion;
        if (value > 0) {
          return color(value);
        }
        if (value == 0) {
          return "#FFF";
        }
      }).attr("stroke-width", 2).attr('stroke', "rgb(127,127,127)").on("mouseover", function (d) {
        var selection = d3.select("#tooltip")
        selection.html(d.properties.N03_004 + "<br>感染者の割合：" + d.properties.proportion + "%").style("visibility", "visible")
      }).on("mousemove", function (d) {
        var selection = d3.select("#tooltip").style("top", (event.pageY - 20) + "px").style("left", (event.pageX + 10) + "px");
      }).on("mouseout", function (d) {
        var selection = d3.select("#tooltip")
        selection.html("").style("visibility", "hidden")
      });
    });
  }).then(function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  })
}
