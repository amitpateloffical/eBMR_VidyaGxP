// import React from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";

// const DeviationChart = () => {
//   const data = {
//     labels: ["2019.03", "2019.05", "2019.07", "2019.09", "2019.11"],
//     datasets: [
//       {
//         label: "Class 1, Number of Deviation PR's",
//         data: [15, 9, 10, 11, 12],
//         borderColor: "red",
//         backgroundColor: "red",
//         fill: false,
//         tension: 0.1,
//         pointHoverRadius: 7, // Increase the point size on hover
//       },
//       {
//         label: "Class 2, Number of Deviation PR's",
//         data: [20, 37, 29, 23, 33],
//         borderColor: "orange",
//         backgroundColor: "orange",
//         fill: false,
//         tension: 0.1,
//         pointHoverRadius: 7,
//       },
//       {
//         label: "Class 3, Number of Deviation PR's",
//         data: [3, 9, 4, 2, 2],
//         borderColor: "green",
//         backgroundColor: "green",
//         fill: false,
//         borderDash: [5, 5],
//         tension: 0.1,
//         pointHoverRadius: 7,
//       },
//       {
//         label: "Class 4, Number of Deviation PR's",
//         data: [0, 0, 0, 0, 0],
//         borderColor: "blue",
//         backgroundColor: "blue",
//         fill: false,
//         tension: 0.1,
//         pointHoverRadius: 7,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       title: {
//         display: true,
//         text: "Number of Deviation PR's per Batch per Class [Term]",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Number of Deviation PR's",
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: "Term",
//         },
//       },
//     },
//     hover: {
//       mode: "nearest", // Nearest data point will be highlighted
//       intersect: true,
//     },
//     responsive: false, // Disable responsiveness to set fixed size
//   };

//   return (
//     <div style={{ width: "70%", height: "900px" }}>
//       <Line data={data} options={options} width={500} height={500} />
//     </div>
//   );
// };

// export default DeviationChart;

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DeviationChart = () => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Number of Deviation PR's",
        },
        min: 0,
        max: 40,
        ticks: {
          stepSize: 10,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          afterBody: function (context) {
            const dataIndex = context[0].dataIndex;
            const date = data.labels[dataIndex];
            return [
              `${date}`,
              `Class 1,Number of Deviation PR's: ${data.datasets[0].data[dataIndex]}`,
              `Class 2,Number of Deviation PR's: ${data.datasets[1].data[dataIndex]}`,
              `Class 3,Number of Deviation PR's: ${data.datasets[2].data[dataIndex]}`,
              `Class 4,Number of Deviation PR's: ${data.datasets[3].data[dataIndex]}`,
            ];
          },
        },
      },
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Number of Deviation PR's per Batch per Class [Term]",
      },
    },
  };

  const labels = ["2019.03", "2019.05", "2019.07", "2019.09", "2019.10", "2019.11"];

  const data = {
    labels,
    datasets: [
      {
        label: "Class 1,Number of Deviation PR's",
        data: [15, 9, 4, 4, 11, 12],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Class 2,Number of Deviation PR's",
        data: [20, 37, 37, 23, 33, 33],
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
      },
      {
        label: "Class 3,Number of Deviation PR's",
        data: [3, 5, 1, 3, 5, 2],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderDash: [5, 5],
      },
      {
        label: "Class 4,Number of Deviation PR's",
        data: [0, 0, 0, 0, 0, 0],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div style={{ width: "800px", height: "600px", margin: "auto" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default DeviationChart;
