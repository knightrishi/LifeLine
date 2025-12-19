import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function FeaturesCard() {
  const [activeChart, setActiveChart] = useState("donations");

  const donationData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May","June","July","Aug","Sept","Oct","Nov"],
    datasets: [
      {
        label: "Blood Donations",
        data: [120, 190, 150, 220, 180, 100, 160, 140, 210, 200, 130,],
        borderWidth: 2,
        tension: 0.4,
        borderColor: "#2563EB",
      },
    ],
  };

  const demandData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May","June","July","Aug","Sept","Oct","Nov"],
    datasets: [
      {
        label: "Life Saved",
        data: [100, 160, 140, 210, 200, 130, 170, 140, 230, 190, 110],
        borderWidth: 2,
        tension: 0.3,
        borderColor: "#2563EB",
        fill: true,
       backgroundColor: "rgba(37, 99, 235, 0.15)",
       
      },
    ],
  };

  return (
    <section className="bg-[#F4F9FF] border border-blue-100 min-h-[80vh] w-screen flex flex-col items-center justify-center gap-8  mt-10">
        <h2 className="text-[rgb(13,28,53)] text-5xl font-bold text-center mb-10 mt-10">
        Work So Far
      </h2>
    
      <div className="flex gap-4">
        <button
          onClick={() => setActiveChart("donations")}
          className={`px-6 py-2 rounded-md font-semibold transition ${
            activeChart === "donations"
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          Donations
        </button>

        <button
          onClick={() => setActiveChart("demand")}
          className={`px-6 py-2 rounded-md font-semibold transition ${
            activeChart === "demand"
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          Life Saved
        </button>
      </div>

      {/* Chart */}
      <div className="w-[600px] max-w-6xl mx-auto mb-4 pb-2 ">
        {activeChart === "donations" && <Line data={donationData} />}
        {activeChart === "demand" && <Line data={demandData} />}
      </div>

    </section>
  );
}

export default FeaturesCard;
