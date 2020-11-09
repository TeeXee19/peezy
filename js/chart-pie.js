// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Redeemed Points", "UnRedeemed Points"],
    datasets: [{
      data: [1400, 806],
      backgroundColor: ['#FE9306', '#858794'],
      hoverBackgroundColor: ['#ffa52f', '#9496a1'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 50,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 0,
  },
});
