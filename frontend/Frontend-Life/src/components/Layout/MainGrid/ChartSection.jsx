import React from 'react'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MainGridChart from "./MainGridChart"



const ChartSection = () => {
const [open, setOpen] = useState(false);

  return (
    <div className="
        w-[800px]
        bg-[#213b4e]/80
        backdrop-blur-2xl
        h-[300px]
        border border-white/20
        ml-16 mt-8 p-6
        rounded-2xl
        flex flex-col
        shadow-xl
      ">
      
        <h4 className="font-medium text-white text-lg">
         Donation Timeline
      </h4>
     
     
        <div className="absolute top-4 right-4 flex items-center gap-1 text-white text-sm">
  <button
    onClick={() => setOpen(!open)}
    className="flex items-center gap-2 px-3 py-1.5
      rounded-lg bg-white/10 border border-white/20
      text-white text-sm"
  >
    Weekly
    <ChevronDown size={16} />
  </button>

   {open && (
    <div className="absolute right-0 mt-2 w-32
      bg-[#213b4e]
      border border-white/20
      rounded-lg shadow-lg
      text-sm text-white">
      <div onClick={() => setOpen(!open)} className="px-3 py-2 hover:bg-white/10 cursor-pointer">Daily</div>
      <div onClick={() => setOpen(!open)} className="px-3 py-2 hover:bg-white/10 cursor-pointer">Weekly</div>
      <div onClick={() => setOpen(!open)} className="px-3 py-2 hover:bg-white/10 cursor-pointer">Monthly</div>
    </div>
  )}
</div>
      <hr className="w-full border-t border-white/20 my-4" />

       <div className="flex justify-between items-center flex-1 mt-4">

  {/* Left Side - Percentage */}
  <div className="flex flex-col items-start">
    <h3 className="text-4xl font-bold text-white">
      20%
    </h3>
    <p className="text-sm text-white/70 mt-2">
      More Donations This Year
    </p>
  </div>

  {/* Right Side - Chart */}
  <div className="w-[500px] h-[180px]">
    <MainGridChart />
  </div>

</div>

    </div>
  )
}

export default ChartSection
