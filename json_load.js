$.getJSON("/data.json", (data) => {
 $("#number_text").text(data.sum);
if(data.change > 0){$("#change").text("前日比：＋" + data.change + "人")}
else if(data.change == 0){$("#change").text("前日比：±" + data.change + "人")}
else if(data.change < 0){$("#change").text("前日比：－" + data.change + "人")}

$(function table_generate(){
var table_data = "";
	for (var i=0;i<=(data.city.length -1);i++){
	var change = data.city[i].change
if(change > 0){
change =  "＋" + Number(change).toLocaleString()
}
else if(change == 0){
change =  "±" + Number(change).toLocaleString()
}
else if(change < 0){
change = "－" + Number(change).toLocaleString()
}
	table_data += "<tr><td>" + data.city[i].name + "</td><td style=\"text-align: right\">" + Number(data.city[i].population).toLocaleString() + "</td><td style=\"text-align: right\">" + Number(data.city[i].patient).toLocaleString() + "</td><td style=\"text-align: right\">" + change + "</td><td>" + data.city[i].proportion + "</td></tr>";
	}
table_data = "<tr><th>居住地</th><th>人口</th><th>感染者数</th><th>前日比</th><th>感染者の割合</th></tr>" + table_data;
$("#covid_table").html(table_data)
});
});
