import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        position: "left",
        title: {
          display: true,
          text: "Number of EC Failure / PR's",
        },
        max: 6,
        ticks: {
          stepSize: 1,
        },
      },
      y1: {
        position: "right",
        title: {
          display: true,
          text: "EC Failure Rate",
        },
        min: 0,
        max: 1,
        ticks: {
          stepSize: 0.2,
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
            const prs = data.datasets[1].data[dataIndex];
            const rate = data.datasets[2].data[dataIndex];
            return [
              `${date}`,
              `Number of EC Failure: ${failures}`,
              `Number of EC PR's: ${prs}`,
              `EC Failure Rate: ${rate}`,
            ];
          },
        },
      },
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Effectiveness Check Failure Rate [Term]",
      },
    },
  };

  const labels = ["2019.03", "2019.05", "2019.07", "2019.09", "2019.11"];

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Number of EC Failure",
        data: [0, 0, 0, 0, 0],
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 0",
      },
      {
        type: "bar",
        label: "Number of EC PR's",
        data: [0, 1, 4, 1, 6],
        backgroundColor: "rgb(255, 205, 86)",
        stack: "Stack 0",
      },
      {
        type: "line",
        label: "EC Failure Rate",
        data: [0, 0, 0, 0, 0],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgb(54, 162, 235)",
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div style={{ width: "1000px", height: "600px", margin: "auto" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
