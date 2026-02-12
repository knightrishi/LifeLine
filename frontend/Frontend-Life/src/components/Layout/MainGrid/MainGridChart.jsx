import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);
const MainGridChart = () => {
 const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [35, 30, 40, 32, 28, 60, 30],
        backgroundColor: [
          "#9BD5F5",
          "#9BD5F5",
          "#9BD5F5",
          "#9BD5F5",
          "#9BD5F5",
          "#14B8A6", // Highlight Friday
          "#9BD5F5",
        ],
        borderRadius: 20,   // rounded top bars
        borderSkipped: false,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#ccc" },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
        ticks: { color: "#ccc" },
      },
    },
  };

  return (
  <div className="h-[180px]">
    <Bar data={data} options={options} />
  </div>
);
}

export default MainGridChart
