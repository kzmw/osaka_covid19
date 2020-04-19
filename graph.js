window.onload = function() {
var ctx = document.getElementById("sex");
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["男性", "女性"],
      datasets: [{
          backgroundColor: [
              "#BB5179",
              "#FAFF67"
          ],
          data: [52, 48]
      }]
    },
    options: {
      title: {
        display: true,
        text: '男女比'
      }
    }
  });
  }
