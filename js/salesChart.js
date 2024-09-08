const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        borderColor: "#fcc100", // Line color (yellow)
        borderWidth: 4, // Line thickness (adjust as needed)
        data: yValues,
        pointBackgroundColor: "#fff", // Circle color (yellow)
        pointBorderColor: "#fcc100", // Circle outline color (white)
        pointBorderWidth: 4, // Circle outline thickness
        pointRadius: 6, // Circle size
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 7, max: 16 } }],
      xAxes: [{ ticks: { min: 50, max: 150 } }],
    },
  },
});
