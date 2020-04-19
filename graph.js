var sex = document.getElementById("sex");
var sex_graph = new Chart(sex, {
    type: 'pie',
    data: {
      labels: ["男性", "女性"],
      datasets: [{
          backgroundColor: [
              "#BB5179",
              "#FAFF67"
          ],
          data: [56, 44]
      }]
    },
    options: {
      title: {
        display: true,
        text: '男女比'
      }
    }
  });
