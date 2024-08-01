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
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     tooltip: {
//       callbacks: {
//         label: function (context) {
//           return `${context.dataset.label}: ${context.raw}`;
//         },
//       },
//     },
//   },

//   scales: {
//     x: {
//       ticks: {
//         autoSkip: true,
//         maxRotation: 0, // Ensures labels are horizontal
//         minRotation: 0, // Ensures labels are horizontal
//       },
//       title: {
//         display: true,
//         text: "Months",
//       },
//     },
//     y: {
//       title: {
//         display: true,
//         text: "Values",
//       },
//     },
//   },
// };

const BloodPressureChart = ({ graphData }) => {
  console.log("gr", graphData);
  const labels = graphData.map((gp) => gp.xAxisLabel).filter((f, i) => i < 6);
  const datasetA = graphData
    .map((ds) => ds.bloodPressure.diastolic.value)
    .filter((f, i) => i < 6);

  const datasetB = graphData
    .map((ds) => ds.bloodPressure.systolic.value)
    .filter((f, i) => i < 6);

  console.log("gr", datasetA);

  const data = {
    labels: [...labels],
    datasets: [
      {
        label: "Diastolic",
        data: [...datasetA],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Systolic",
        data: [...datasetB],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
        },
      },
    },
  };

  return <Line data={data} options={options} style={{ height: "298px" }} />;
};

export default BloodPressureChart;
