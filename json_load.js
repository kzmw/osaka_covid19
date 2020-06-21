window.onload = function(){
	getJsonp_GAS();
}

function getJsonp_GAS() {
$.ajax({
type: 'GET',
url: 'https://script.google.com/macros/s/AKfycbyrNVl5HtIe6be_n_d2ixxEG5ABXkTb_bZI3RvfOM4MpAXYySQ/exec',
dataType: 'jsonp',
jsonpCallback: 'jsondata',
success: function(data){
var len = data.length;

$("#number_text").text(len);
$("#update").text("最終更新：更新停止中");

<!--
if(data.signal == "yellow"){
$("#signal_frame").html("<div class=\"signal_off\"></div><div class=\"signal_yerrow\"></div><div class=\"signal_off\"></div>")
}
else if(data.signal == "green"){
$("#signal_frame").html("<div class=\"signal_green\"></div><div class=\"signal_off\"></div><div class=\"signal_off\"></div>")
}
else if(data.signal == "red"){
$("#signal_frame").html("<div class=\"signal_off\"></div><div class=\"signal_off\"></div><div class=\"signal_red\"></div>")
}
-->

if(data.change > 0){$("#change").text("前日比：＋" + data.change + "人")}
else if(data.change == 0){$("#change").text("前日比：±" + data.change + "人")}
else if(data.change < 0){$("#change").text("前日比：－" + data.change + "人")}
$(function table_generate(){
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

	if( data.city[i].name == "大阪府外" || data.city[i].name == "不明"){
        table_data += "<tr><td>" + data.city[i].name + "</td><td style=\"text-align: right\"></td><td style=\"text-align: right\">" + Number(data.city[i].patient).toLocaleString() + "</td><td style=\"text-align: right\">" + change + "</td><td></td><td style=\"display:none\"></td></tr>";
	}
	else{
	table_data += "<tr><td>" + data.city[i].name + "</td><td style=\"text-align: right\">" + Number(data.city[i].population).toLocaleString() + "</td><td style=\"text-align: right\">" + Number(data.city[i].patient).toLocaleString() + "</td><td style=\"text-align: right\">" + change + "</td><td>" + proportion_per + "</td><td style=\"display:none\">" + proportion_percent + "</td></tr>";
	}
table_data = "<tr><th>居住地</th><th>人口</th><th>感染者数</th><th>前日比</th><th>感染者の割合<div class=\"proportion_select\"><input type=\"radio\" name=\"proportion1\" id=\"person\" value=\"人\" checked=\"\" onclick=\"person()\"><label for=\"person\" class=\"proportion_person\">人</label><input type=\"radio\" id=\"percent\" name=\"proportion1\" value=\"%\" onclick=\"percent()\"><label for=\"percent\" class=\"proportion_percent\">%</label></div></th><th style=\"display:none\">感染者の割合<div class=\"proportion_select\"><input type=\"radio\" name=\"proportion2\" id=\"person\" value=\"人\" onclick=\"person()\"><label for=\"person\" class=\"proportion_person\">人</label><input type=\"radio\" id=\"percent\" name=\"proportion2\" value=\"%\" checked=\"\" onclick=\"percent()\"><label for=\"percent\" class=\"proportion_percent\">%</label></div></th></tr>" + table_data;
$("#covid_table").html(table_data)

Chart.defaults.global.defaultFontFamily = "'Noto Sans JP', sans-serif";
Chart.defaults.global.defaultFontColor = 'Black';
Chart.defaults.global.title.fontSize = 18;

var sex = document.getElementById("sex");
  var sex_graph = new Chart(sex, {
    type: 'pie',
    data: {
      labels: ["男性", "女性"],
      datasets: [{
          backgroundColor: [
              "#1e90ff",
              "#ff69b4"
          ],
          data: [data.sex[0], data.sex[1]]
      }]
    },
    options: {
      title: {
        display: true,
        text: '男女別感染者数'
      }
    }
  });

var age = document.getElementById("age");
  var age_chart = new Chart(age, {
    type: 'horizontalBar',
    data: {
      labels: ["未就学児", "就学児", "10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代", "90代", "100歳以上"],
      datasets: [{
          label: '人数',
backgroundColor: "#40e0d0",
          data: [data.age[0], data.age[1],data.age[2],data.age[3],data.age[4],data.age[5],data.age[6],data.age[7],data.age[8],data.age[9],data.age[10],data.age[11]]
      }]
    },
    options: {scales: {
        xAxes: [{
            ticks: {
                min: 0
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
  });}
	});
}
