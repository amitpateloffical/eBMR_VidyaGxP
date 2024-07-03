import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  const colors = [
    "#8bc34a",
    "#ffc107",
    "#03a9f4",
    "#ff9800",
    "#f44336",
    "#2196f3",
    "#9c27b0",
    "#673ab7",
    "#4caf50",
    "#cddc39",
  ];

  const labels = [
    "2019.03",
    "2019.04",
    "2019.05",
    "2019.06",
    "2019.07",
    "2019.08",
    "2019.09",
    "2019.10",
    "2019.11",
    "2019.12",
  ];

  const extensionPRsData = {
    labels,
    datasets: [
      {
        data: [10, 16, 21, 13, 16, 20, 9, 19, 6, 21],
        backgroundColor: colors,
      },
    ],
  };

  const capaPRsData = {
    labels,
    datasets: [
      {
        data: [33, 48, 60, 70, 54, 57, 26, 42, 33, 0],
        backgroundColor: colors,
      },
    ],
  };

  const extensionRateData = {
    labels,
    datasets: [
      {
        data: [27.03, 33.33, 35, 18.57, 29.63, 35.09, 34.62, 45.24, 18.18, 32.81],
        backgroundColor: colors,
      },
    ],
  };

  const onTimeRateData = {
    labels,
    datasets: [
      {
        data: [72.97, 66.67, 65, 81.43, 70.37, 64.91, 65.38, 54.76, 81.82, 67.19],
        backgroundColor: colors,
      },
    ],
  };

  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      <h2>CAPA Extension Rate [Term]</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        <div style={{ width: "45%" }}>
          <h3>[Number of Extension PR's]</h3>
          <Pie data={extensionPRsData} options={commonOptions} />
        </div>
        <div style={{ width: "45%" }}>
          <h3>[Number of CAPA PR's]</h3>
          <Pie data={capaPRsData} options={commonOptions} />
        </div>
        <div style={{ width: "45%" }}>
          <h3>[Extension Rate]</h3>
          <Pie data={extensionRateData} options={commonOptions} />
        </div>
        <div style={{ width: "45%" }}>
          <h3>[On-Time Rate]</h3>
          <Pie data={onTimeRateData} options={commonOptions} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
