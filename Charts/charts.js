const ctx = document.getElementById('myChart');



new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Camilo', 'Esmeralda', 'Gabriel', 'Evangelyn', 'Hugo'],
      datasets: [{
        label: 'Ages',
        data: ['28', '32', '24', '15', '67'],
        backgroundColor: ['rgba(0,56,255,0.5)', 'rgba(23,82,1,0.5)', 'rgba(243,12,1,0.5)', 'rgba(255,0,254,0.5)', 'rgba(123,822,1,0.5)'],
        borderColor: ['rgba(0,56,255,1)', 'rgba(23,82,1,1)', 'rgba(243,12,1,1)', 'rgba(255,0,254,1)', 'rgba(123,822,1,1)'],
        borderWidth: 1.5
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });