
const labels = ["mon","tues","wed","thur","fri","sat","sun"];

const data = {
  labels: labels,
  datasets: [
      {
    data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
    borderRadius: 6,
    backgroundColor: [
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(186, 34%, 60%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)"],
    },
],
};


const config = {
  type: "bar",
  data: data,
  options: {
        animation: {
          duration: 3000,
        },
    scales: {
        x:{
            grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                font: {
                  family: "DM Sans",
                  size: 14,
                },
                color: "hsl(28, 10%, 53%)",
              },
            },
      y: {
        display: false,
      },
    },
    plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: () => null,
            label: function (context) {
              let label = context.dataset.label || "";
  
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(context.parsed.y);
              }
              return label;
            },
          },
        },
      },
    },
  };

const myChart = new Chart(
    document.getElementById("myChart").getContext("2d"),
    config
  );
