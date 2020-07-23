window.onload = function(){
	getJsonp_GAS();
}

function getJsonp_GAS() {
var table_data = "";
var male = 0
var female = 0
var preschool = 0
var school = 0
var teens = 0
var twenties = 0
var thirties = 0
var fourties = 0
var fifties = 0
var sixties = 0
var seventies = 0
var eighties = 0
var nineties = 0
var over = 0
var out_of_prefecture = 0
var osaka = 0
var sakai = 0
var nose = 0
var toyono = 0
var ikeda = 0
var minoh = 0
var toyonaka = 0
var ibaraki = 0
var takatsuki = 0
var shimamoto = 0
var suita = 0
var settsu = 0
var hirakata = 0
var katano = 0
var neyagawa = 0
var moriguchi = 0
var kadoma = 0
var shijonawate = 0
var daitoh = 0
var higashiosaka = 0
var yao = 0
var kashiwara = 0
var matsubara = 0
var habikino = 0
var fujidera = 0
var taishi = 0
var kanan = 0
var chihayaakasaka = 0
var tondabayashi = 0
var osakasayama = 0
var kawachinagano = 0
var izumi = 0
var takaishi = 0
var izumiohtsu = 0
var tadaoka = 0
var kishiwada = 0
var kaizuka = 0
var kumatori = 0
var izumisano = 0
var tajiri = 0
var sennan = 0
var hannan = 0
var misaki = 0
var unknown = 0
fetch( 'https://script.google.com/macros/s/AKfycbyrNVl5HtIe6be_n_d2ixxEG5ABXkTb_bZI3RvfOM4MpAXYySQ/exec',)
   .then(function(response) {
    return response.json();})
   .then(data => {
    for (var i=0;i<=(data.length -1);i++){
if (data[i]["sex"] == "男"){male += 1}
else if (data[i]["sex"] == "女"){female += 1}

if (data[i]["age"] == "未就学児"){preschool += 1}
else if (data[i]["age"] == "就学児"){school += 1}
else if (data[i]["age"] == "10"){teens += 1}
else if (data[i]["age"] == "20"){twenties += 1}
else if (data[i]["age"] == "30"){thirties += 1}
else if (data[i]["age"] == "40"){fourties += 1}
else if (data[i]["age"] == "50"){fifties += 1}
else if (data[i]["age"] == "60"){sixties += 1}
else if (data[i]["age"] == "70"){seventies += 1}
else if (data[i]["age"] == "80"){eighties += 1}
else if (data[i]["age"] == "90"){nineties += 1}
else if (data[i]["age"] == "100"){over += 1}

table_data += "<tr><td>" + data[i]["no"] + "</td><td>" + data[i]["sex"] + "</td><td>" + data[i]["place"] + "</td></tr>" }
document.getElementById('covid_table').innerHTML = table_data 
var len = data.length;
$("#number_text").text(len);
$("#update").text("最終更新：更新停止中");

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
          data: [male, female]
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
  var age_chart = new Chart(age, {
    type: 'horizontalBar',
    data: {
      labels: ["未就学児", "就学児", "10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代", "90代", "100歳以上"],
      datasets: [{
          label: '人数',
backgroundColor: "#40e0d0",
          data: [preschool, school,teens,twenties,thirties,fourties,fifties,sixties,seventies,eighties,nineties,over]
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
  });
})
}
