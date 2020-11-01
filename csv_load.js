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

patient_chart.options.scales.yAxes[0].gridLines.color = 'rgba(0,0,0,0.1)';
patient_chart.options.scales.yAxes[0].gridLines.zeroLineColor =  'rgba(0,0,0,0.25)';
patient_chart.options.scales.xAxes[0].ticks.fontColor = 'Black';
patient_chart.options.scales.yAxes[0].ticks.fontColor = 'Black';
patient_chart.options.title.fontColor = 'Black';
patient_chart.options.scales.yAxes[1].gridLines.color = 'rgba(0,0,0,0.1)';
patient_chart.options.scales.yAxes[1].gridLines.zeroLineColor = 'rgba(0,0,0,0.25)';
patient_chart.options.scales.yAxes[1].ticks.fontColor = 'Black';
patient_chart.options.legend.labels.fontColor = 'Black';
patient_chart.update();

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
patient_chart.options.scales.yAxes[1].ticks.fontColor = 'White';
patient_chart.options.scales.yAxes[1].gridLines.color = 'rgba(255,255,255,0.3)';
patient_chart.options.scales.yAxes[1].gridLines.zeroLineColor = 'rgba(255,255,255,0.55)';
patient_chart.options.title.fontColor = 'White';
patient_chart.options.legend.labels.fontColor = 'White';
patient_chart.update();
}
})

function getJsonp_GAS() {
const spinner = document.getElementById('loading');
spinner.classList.remove('loaded');
var table_data = "";
var data_patient = '';
 const request_patient = new XMLHttpRequest();
 request_patient.open('GET', 'https://covid19-osaka.info/data/patients.csv', true);
 request_patient.send(null);
 request_patient.onload = function(){
 data_patient = convertCSVtoArray(request_patient.responseText);
 };

function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
}
