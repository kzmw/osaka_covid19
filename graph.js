$.getJSON("/data.json", (data) => {
window.onload = function() {
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
    type: 'pie',
    data: {
      labels: ["未就学児", "就学児", "10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代", "90代", "100代以上"],
      datasets: [{
          backgroundColor: [
              "#BB5179",
              "#FAFF67",
              "#FAFF67",
              "#FAFF67",
              "#FAFF67",
              "#FAFF67",
              "#FAFF67",
              "#FAFF67",
              "#FAFF67",
              "#FAFF67",
              "#FAFF67",
              "#FAFF67"
          ],
          data: [8, 6,33,255,202,209,172,102,108,59,8,1]
      }]
    },
    options: {
      title: {
        display: true,
        text: '性別'
      }
    }
  });
  }})
