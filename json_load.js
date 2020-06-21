window.onload = function(){
	// 【main-script】 を実行
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

              
                
		}
	});
}
