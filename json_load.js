$.getJSON("/data.json", (data) => {
 $("#number_text").text(data.sum);
 $("#citizen").text("うち大阪府民：" + data.citizen + "人");
 $("#change").text("前日比：" + data.change + "人");
 $("#men").text("男性：" + data.sex[0] + "%");
 $("#women").text("女性：" + data.sex[1] + "%");
 $("#preschool").text("未就学児：" + data.age[0] + "人");
 $("#school").text("就学児：" + data.age[1] + "人");
 $("#teens").text("10代：" + data.age[2] + "人");
 $("#twenties").text("20代：" + data.age[3] + "人");
 $("#thirties").text("30代：" + data.age[4] + "人");
 $("#fourties").text("40代：" + data.age[5] + "人");
 $("#fifties").text("50代：" + data.age[6] + "人");
 $("#sixties").text("60代：" + data.age[7] + "人");
 $("#seventies").text("70代：" + data.age[8] + "人");
 $("#eighties").text("80代：" + data.age[9] + "人");
 $("#nineties").text("90代：" + data.age[10] + "人");
 $("#over").text("100代以上：" + data.age[11] + "人");
 $("#fever").text("発熱：" + data.symptom[0] + "人");
 $("#cough").text("咳：" + data.symptom[1] + "人");
 $("#sputum").text("痰：" + data.symptom[2] + "人");
 $("#nose").text("鼻汁：" + data.symptom[3] + "人");
 $("#close_nose").text("鼻閉：" + data.symptom[4] + "人");
 $("#sneeze").text("くしゃみ：" + data.symptom[5] + "人");
 $("#head").text("頭痛：" + data.symptom[6] + "人");
 $("#chest").text("胸痛：" + data.symptom[7] + "人");
 $("#pharynx").text("咽頭痛：" + data.symptom[8] + "人");
 $("#joint").text("関節痛：" + data.symptom[9] + "人");
 $("#diarrhea").text("下痢：" + data.symptom[10] + "人");
 $("#breath").text("呼吸困難：" + data.symptom[11] + "人");
 $("#malaise").text("倦怠感：" + data.symptom[12] + "人");
 $("#eye").text("目のかゆみ：" + data.symptom[13] + "人");
 $("#taste").text("味覚障害：" + data.symptom[14] + "人");
 $("#smell").text("嗅覚障害：" + data.symptom[15] + "人");
 $("#pneumonia").text("肺炎：" + data.symptom[16] + "人");
 $("#asymptomatic").text("無症状：" + data.symptom[17] + "人");
$(
function(){
var table_data = "";
	for (var i=0;i<=(data.city.length -1);i++){
	table_data += "<tr><td>" + data.city[i].name + "</td><td style=""text-align: right"">" + Number(data.city[i].population).toLocaleString() + "</td><td style=""text-align: right"">" + Number(data.city[i].patient).toLocaleString() + "</td><td style=""text-align: right"">" + Number(data.city[i].change).toLocaleString() + "</td><td>" + data.city[i].proportion + "</td></tr>";
	}
table_data = "<tr><th>居住地</th><th>人口</th><th>感染者数</th><th>前日比</th><th>感染者の割合</th></tr>" + table_data;
$("#covid_table").html(table_data)
});
});
