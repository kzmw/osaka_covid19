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

 const request_patient = new XMLHttpRequest();
 request_patient.addEventListener('load', (event) => {
  const response_patient = event.target.responseText;
  const data_patient = [];
 const datastring_patient = response_patient.split('n');
 for (let i = 0; i < datastring_patient.length; i++) {
  data_patient[i] = datastring_patient[i].split(',');
 }
 outputElement.innerHTML = data_patient;
 });
 request_patient.open('GET', 'https://covid19-osaka.info/data/patients.csv', true);
 request_patient.send();
 
  const request_summary = new XMLHttpRequest();
 request_patient.addEventListener('load', (event) => {
  const response_summary = event.target.responseText;
  const data_summary = [];
 const datastring_summary = response_summary.split('n');
 for (let i = 0; i < datastring_summary.length; i++) {
  data_summary[i] = datastring_summary[i].split(',');
 }
 });
 request_summary.open('GET', 'https://covid19-osaka.info/data/summary.csv', true);
 request_summary.send();
spinner.classList.add('loaded');
}
