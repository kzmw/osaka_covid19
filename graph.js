  // データ --- (*1)
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      label: '国語のテスト',
      data: [78, 64, 35, 90, 83]
    }]}
  // グラフを描画 --- (*2)
  const ctx = document.getElementById('sex')
  const chart_cv = new Chart(ctx, {
    type: 'bar', // グラフの種類
    data: data, // データ
    options: {}}) // オプション
