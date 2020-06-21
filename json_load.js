function getJsonp_GAS() {
	$.ajax({
		type: 'GET',
		url: 'https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxx/exec',
		dataType: 'jsonp',
		jsonpCallback: 'jsondata',
		success: function(data){
        var len = data.length;
        $("#number_text").text(len);
        $("#update").text("最終更新：更新停止中");

              
                
		}
	});
}
