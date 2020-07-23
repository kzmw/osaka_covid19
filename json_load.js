window.onload = function(){
	getJsonp_GAS();
}

function getJsonp_GAS() {
var table_data = ""
fetch( 'https://script.google.com/macros/s/AKfycbyrNVl5HtIe6be_n_d2ixxEG5ABXkTb_bZI3RvfOM4MpAXYySQ/exec',)
   .then(function(response) {
    return response.json();})
   .then(data => {
    for (var i=0;i<=(data.length -1);i++){
 table_data += "<tr><td>" + data[i]["no"] + "</td><td>" + data[i]["sex"] + "</td><td>" + data[i]["place"] + "</td></tr>" }
document.getElementById('covid_table').innerHTML = table_data 
var len = data.length;
$("#number_text").text(len);
$("#update").text("最終更新：更新停止中");
var male;
var female;
var preschool;
var school;
var teens;
var twenties;
var thirties;
var fourties;
var fifties;
var sixties;
var seventies;
var eighties;
var nineties;
var over;
var out_of_prefecture;
var osaka;
var sakai;
var nose;
var toyono;
var ikeda;
var minoh;
var toyonaka;
var ibaraki;
var takatsuki;
var shimamoto;
var suita;
var settsu;
var hirakata;
var katano;
var neyagawa;
var moriguchi;
var kadoma;
var shijonawate;
var daitoh;
var higashiosaka;
var yao;
var kashiwara;
var matsubara;
var habikino;
var fujidera;
var taishi;
var kanan;
var chihayaakasaka;
var tondabayashi;
var osakasayama;
var kawachinagano;
var izumi;
var takaishi;
var izumiohtsu;
var tadaoka;
var kishiwada;
var kaizuka;
var kumatori;
var izumisano;
var tajiri;
var sennan;
var hannan;
var misaki;
var unknown;
})
}
