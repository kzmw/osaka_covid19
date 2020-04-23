$.getJSON("/data.json", (data) => {
Chart.defaults.global. defaultFontFamily = "'Noto Sans JP', sans-serif";

Chart.defaults.global.defaultFontColor = 'Black';

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
        text: '男女比'
      }
    }
  });

var age = document.getElementById("age");
  var age_chart = new Chart(age, {
    type: 'horizontalBar',
    data: {
      labels: ["未就学児", "就学児", "10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代", "90代", "100代以上"],
      datasets: [{
          label: '人数',
          backgroundColor: [
              "#BB5179"
          ],
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
        text: '年齢'
      }
    }
  });
  })
