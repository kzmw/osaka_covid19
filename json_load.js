window.addEventListener('DOMContentLoaded', function () {
getJsonp_GAS()
})

function getJsonp_GAS() {
const spinner = document.getElementById('loading');
spinner.classList.remove('loaded');
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

if (data[i]["place"] == "大阪府外"){out_of_prefecture += 1}
else if (data[i]["place"] == "大阪市"){osaka += 1}
else if (data[i]["place"] == "堺市"){sakai += 1}
else if (data[i]["place"] == "能勢町"){nose += 1}
else if (data[i]["place"] == "豊能町"){toyono += 1}
else if (data[i]["place"] == "池田市"){ikeda += 1}
else if (data[i]["place"] == "箕面市"){minoh += 1}
else if (data[i]["place"] == "豊中市"){toyonaka += 1}
else if (data[i]["place"] == "茨木市"){ibaraki += 1}
else if (data[i]["place"] == "高槻市"){takatsuki += 1}
else if (data[i]["place"] == "島本町"){shimamoto += 1}
else if (data[i]["place"] == "吹田市"){suita += 1}
else if (data[i]["place"] == "摂津市"){settsu += 1}
else if (data[i]["place"] == "枚方市"){hirakata += 1}
else if (data[i]["place"] == "交野市"){katano += 1}
else if (data[i]["place"] == "寝屋川市"){neyagawa += 1}
else if (data[i]["place"] == "守口市"){moriguchi += 1}
else if (data[i]["place"] == "門真市"){kadoma += 1}
else if (data[i]["place"] == "四條畷市"){shijonawate += 1}
else if (data[i]["place"] == "大東市"){daitoh += 1}
else if (data[i]["place"] == "東大阪市"){higashiosaka += 1}
else if (data[i]["place"] == "八尾市"){yao += 1}
else if (data[i]["place"] == "柏原市"){kashiwara += 1}
else if (data[i]["place"] == "松原市"){matsubara += 1}
else if (data[i]["place"] == "羽曳野市"){habikino += 1}
else if (data[i]["place"] == "藤井寺市"){fujidera += 1}
else if (data[i]["place"] == "太子町"){taishi += 1}
else if (data[i]["place"] == "河南町"){kanan += 1}
else if (data[i]["place"] == "千早赤阪村"){chihayaakasaka += 1}
else if (data[i]["place"] == "富田林市"){tondabayashi += 1}
else if (data[i]["place"] == "大阪狭山市"){osakasayama += 1}
else if (data[i]["place"] == "河内長野市"){kawachinagano += 1}
else if (data[i]["place"] == "和泉市"){izumi += 1}
else if (data[i]["place"] == "高石市"){takaishi += 1}
else if (data[i]["place"] == "泉大津市"){izumiohtsu += 1}
else if (data[i]["place"] == "忠岡町"){tadaoka += 1}
else if (data[i]["place"] == "岸和田市"){kishiwada += 1}
else if (data[i]["place"] == "貝塚市"){kaizuka += 1}
else if (data[i]["place"] == "熊取町"){kumatori += 1}
else if (data[i]["place"] == "泉佐野市"){izumisano += 1}
else if (data[i]["place"] == "田尻町"){tajiri += 1}
else if (data[i]["place"] == "泉南市"){sennan += 1}
else if (data[i]["place"] == "阪南市"){hannan += 1}
else if (data[i]["place"] == "岬町"){misaki += 1}
else if (data[i]["place"] == "不明"){unknown += 1}
}
var len = data.length;
$("#number_text").text(len);
$("#update").text("最終更新：更新停止中");

table_data = "<tr><th>居住地</th><th>人口</th><th>感染者数</th><th>前日比</th><th>感染者の割合<div class=\"proportion_select\"><input type=\"radio\" name=\"proportion1\" id=\"person\" value=\"人\" checked=\"\" onclick=\"person()\"><label for=\"person\" class=\"proportion_person\">人</label><input type=\"radio\" id=\"percent\" name=\"proportion1\" value=\"%\" onclick=\"percent()\"><label for=\"percent\" class=\"proportion_percent\">%</label></div></th><th style=\"display:none\">感染者の割合<div class=\"proportion_select\"><input type=\"radio\" name=\"proportion2\" id=\"person\" value=\"人\" onclick=\"person()\"><label for=\"person\" class=\"proportion_person\">人</label><input type=\"radio\" id=\"percent\" name=\"proportion2\" value=\"%\" checked=\"\" onclick=\"percent()\"><label for=\"percent\" class=\"proportion_percent\">%</label></div></th></tr>";
document.getElementById('covid_table').innerHTML = table_data 
var defaultFontColor = 'Black';
var gridColor = 'Black';

if (window.matchMedia('(prefers-color-scheme: dark)').matches == true){
defaultFontColor = 'White';
gridColor = 'White';
}

Chart.defaults.global.defaultFontFamily = "'Noto Sans JP', sans-serif";
Chart.defaults.global.defaultFontColor = defaultFontColor;
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
           gridLines:{
           color: gridColor
           },
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
  })
})
.then(function(){
const spinner = document.getElementById('loading');
spinner.classList.add('loaded');
  })
}
