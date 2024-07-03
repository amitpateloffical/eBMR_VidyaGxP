import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: [
      "2019.03",
      "2019.12",
      "2019.11",
      "2019.10",
      "2019.09",
      "2019.08",
      "2019.07",
      "2019.06",
      "2019.05",
      "2019.04",
    ],
    datasets: [
      {
        label: "Extension Rate",
        data: [21, 26, 19, 30, 30, 28, 30, 26, 38, 16],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "On-Time Rate",
        data: [84, 74, 88, 81, 70, 72, 70, 74, 62, 79],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Deviation Extension Rate [Term]",
      },
    },
  };

  return (
    <div style={{ width: "600px", height: "600px", margin: "auto" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
