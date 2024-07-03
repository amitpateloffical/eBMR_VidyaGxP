// import React from "react";
// import Chart from "react-apexcharts";

// const BatchFailureRateChart = () => {
//   const options = {
//     chart: {
//       type: "bar",
//       height: 350,
//       stacked: true,
//       toolbar: {
//         show: true,
//       },
//       zoom: {
//         enabled: true,
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         borderRadius: 10,
//       },
//     },
//     xaxis: {
//       type: "datetime",
//       categories: ["2019-03", "2019-05", "2019-07", "2019-09", "2019-11", "2019-12"],
//       labels: {
//         format: "yyyy-MM",
//       },
//     },
//     yaxis: [
//       {
//         seriesName: "Number of Batch Failure",
//         title: {
//           text: "Count",
//         },
//       },
//       {
//         seriesName: "Batch Failure Rate",
//         opposite: true,
//         title: {
//           text: "Batch Failure Rate (%)",
//         },
//       },
//     ],
//     tooltip: {
//       shared: true,
//       intersect: false,
//     },
//     legend: {
//       position: "top",
//       horizontalAlign: "left",
//     },
//     colors: ["#8E44AD", "#3498DB", "#E74C3C"],
//   };

//   const series = [
//     {
//       name: "Number of Batch Failure",
//       type: "column",
//       data: [3, 2, 1, 2, 2, 0],
//     },
//     {
//       name: "Number of Batch Success",
//       type: "column",
//       data: [9, 13, 15, 8, 7, 4],
//     },
//     {
//       name: "Batch Failure Rate",
//       type: "line",
//       data: [15.22, 8.0, 6.25, 20.0, 22.22, 0.0],
//     },
//   ];

//   return (
//     <div>
//       <h2>Batch Failure Rate [Term]</h2>
//       <Chart options={options} series={series} type="line" height={350} />
//     </div>
//   );
// };

// export default BatchFailureRateChart;

// import React from "react";
// import Chart from "react-apexcharts";

// const BatchFailureRateChart = () => {
//   const options = {
//     chart: {
//       type: "line",
//       height: 350,
//       stacked: false,
//       toolbar: {
//         show: true,
//       },
//     },
//     stroke: {
//       width: [0, 0, 2],
//       curve: "smooth",
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: "50%",
//         endingShape: "rounded",
//         dataLabels: {
//           position: "top",
//         },
//       },
//     },
//     dataLabels: {
//       enabled: true,
//       enabledOnSeries: [0, 1, 2],
//     },
//     labels: ["2019-03", "2019-05", "2019-07", "2019-09", "2019-11", "2019-12"],
//     xaxis: {
//       type: "category",
//     },
//     yaxis: [
//       {
//         seriesName: "Number of Batch Failure",
//         title: {
//           text: "Count",
//         },
//         min: 0,
//         max: 35,
//         tickAmount: 7,
//       },
//       {
//         seriesName: "Batch Failure Rate",
//         opposite: true,
//         title: {
//           text: "Batch Failure Rate (%)",
//         },
//         min: 0,
//         max: 35,
//         tickAmount: 7,
//       },
//     ],
//     legend: {
//       position: "top",
//     },
//     colors: ["#8E44AD", "#3498DB", "#E74C3C"],
//     tooltip: {
//       shared: true,
//       intersect: false,
//     },
//   };

//   const series = [
//     {
//       name: "Number of Batch Failure",
//       type: "column",
//       data: [3, 2, 1, 2, 2, 0],
//     },
//     {
//       name: "Number of Batch Success",
//       type: "column",
//       data: [9, 13, 15, 8, 7, 4],
//     },
//     {
//       name: "Batch Failure Rate",
//       type: "line",
//       data: [15.22, 8, 6.25, 20, 22.22, 0],
//     },
//   ];

//   return (
//     <div>
//       <h2>Batch Failure Rate [Term]</h2>
//       <Chart options={options} series={series} type="line" height={350} />
//     </div>
//   );
// };

// export default BatchFailureRateChart;

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Tooltip,
//   Legend
// );

// const BatchFailureRateChart = () => {
//   const data = {
//     labels: ["2019.03", "2019.05", "2019.07", "2019.09", "2019.11", "2019.12"],
//     datasets: [
//       {
//         type: "bar",
//         label: "Number of Batch Failure",
//         backgroundColor: "#8E44AD",
//         data: [3, 2, 1, 2, 2, 0],
//         yAxisID: "y",
//       },
//       {
//         type: "bar",
//         label: "Number of Batch Success",
//         backgroundColor: "#3498DB",
//         data: [9, 13, 15, 8, 7, 4],
//         yAxisID: "y",
//       },
//       {
//         type: "line",
//         label: "Batch Failure Rate",
//         borderColor: "#E74C3C",
//         backgroundColor: "#E74C3C",
//         data: [15.22, 8, 6.25, 20, 22.22, 0],
//         yAxisID: "y1",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     height: "200px", // Set the desired height here
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//     stacked: false,
//     scales: {
//       y: {
//         type: "linear",
//         display: true,
//         position: "left",
//         ticks: {
//           max: 35,
//           stepSize: 5,
//         },
//         title: {
//           display: true,
//           text: "Count",
//         },
//       },
//       y1: {
//         type: "linear",
//         display: true,
//         position: "right",
//         ticks: {
//           max: 35,
//           stepSize: 5,
//         },
//         title: {
//           display: true,
//           text: "Batch Failure Rate (%)",
//         },
//         grid: {
//           drawOnChartArea: false,
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <div style={{ width: "70%", height: "900px" ,marginTop:"5%", textAlign:"Center"}}>
//         <h2>Batch Failure Rate [Term]</h2>
//         <Bar data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default BatchFailureRateChart;


import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BatchFailureRateChart = () => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Number of Batch Failure / Success",
        },
        max: 18,
        ticks: {
          stepSize: 3,
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Batch Failure Rate",
        },
        max: 35,
        ticks: {
          stepSize: 5,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          afterBody: function (context) {
            const dataIndex = context[0].dataIndex;
            const date = data.labels[dataIndex];
            const failures = data.datasets[0].data[dataIndex];
            const successes = data.datasets[1].data[dataIndex];
            const rate = data.datasets[2].data[dataIndex];
            return [
              `${date}`,
              `Number of Batch Failure: ${failures}`,
              `Number of Batch Success: ${successes}`,
              `Batch Failure Rate: ${rate}`,
            ];
          },
        },
      },
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Batch Failure Rate [Term]",
      },
    },
  };

  const labels = ["2019.03", "2019.05", "2019.07", "2019.09", "2019.11"];

  const data = {
    labels,
    datasets: [
      {
        label: "Number of Batch Failure",
        data: [3, 2, 2, 1, 0],
        backgroundColor: "rgba(153, 102, 255, 0.8)",
      },
      {
        label: "Number of Batch Success",
        data: [9, 13, 15, 17, 4],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
      },
      {
        label: "Batch Failure Rate",
        data: [33, 15, 12, 12, 0],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div style={{ width: "800px", height: "600px", margin: "auto" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BatchFailureRateChart;