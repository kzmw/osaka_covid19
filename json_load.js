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

}
})

function getJsonp_GAS() {
const spinner = document.getElementById('loading');
spinner.classList.remove('loaded');
var table_data = "";
fetch( 'https://script.google.com/macros/s/AKfycbyrNVl5HtIe6be_n_d2ixxEG5ABXkTb_bZI3RvfOM4MpAXYySQ/exec',)
   .then(function(response) {
    return response.json();})
   .then(data => {
$("#number_text").text(data.sum);
$("#update").text("最終更新：更新停止中");
if (data.signal == "yellow") {
          $("#signal_frame").html("<div class=\"signal_off\"></div><div class=\"signal_yerrow\"></div><div class=\"signal_off\"></div>")
        } else if (data.signal == "green") {
          $("#signal_frame").html("<div class=\"signal_green\"></div><div class=\"signal_off\"></div><div class=\"signal_off\"></div>")
        } else if (data.signal == "red") {
          $("#signal_frame").html("<div class=\"signal_off\"></div><div class=\"signal_off\"></div><div class=\"signal_red\"></div>")
        }
table_data = "<tr><th>居住地</th><th>人口</th><th>感染者数</th><th>前日比</th><th>感染者の割合<div class=\"proportion_select\"><input type=\"radio\" name=\"proportion1\" id=\"person\" value=\"人\" checked=\"\" onclick=\"person()\"><label for=\"person\" class=\"proportion_person\">人</label><input type=\"radio\" id=\"percent\" name=\"proportion1\" value=\"%\" onclick=\"percent()\"><label for=\"percent\" class=\"proportion_percent\">%</label></div></th><th style=\"display:none\">感染者の割合<div class=\"proportion_select\"><input type=\"radio\" name=\"proportion2\" id=\"person\" value=\"人\" onclick=\"person()\"><label for=\"person\" class=\"proportion_person\">人</label><input type=\"radio\" id=\"percent\" name=\"proportion2\" value=\"%\" checked=\"\" onclick=\"percent()\"><label for=\"percent\" class=\"proportion_percent\">%</label></div></th></tr>";
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

Chart.defaults.global.defaultFontFamily = "'Noto Sans JP', sans-serif";
Chart.defaults.global.defaultFontColor = defaultFontColor;
Chart.defaults.global.title.fontSize = 18;

var sex = document.getElementById("sex");
  window.sex_graph = new Chart(sex, {
    type: 'pie',
    data: {
      labels: ["男性", "女性"],
      datasets: [{
          backgroundColor: [
              "#1e90ff",
              "#ff69b4"
          ],
          borderColor:borderColor,
          hoverBorderColor:hoverBorderColor,
          data: [data.sex[0], data.sex[1]]
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
for (var daily = 0; daily <= length; daily++){
date.setDate(date.getDate() + 1);
var month = date.getMonth() + 1;
var day2 = date.getDate();
day[daily] = month + "/" + day2;
}
for (var announce_count = 0; announce_count <= length; announce_count++){
if(data.announce[announce_count] == null){
data.announce[announce_count] = 0
}
}
var patient_can = document.getElementById("patient");
  window.patient_chart = new Chart(patient_can, {
    type: 'bar',
    data: {
      labels: day,
      datasets: [{
          label: '人数',
backgroundColor: "#40e0d0",
          data: data.announce
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
  })
})
.then(function(){
const spinner = document.getElementById('loading');
spinner.classList.add('loaded');
  })
}
