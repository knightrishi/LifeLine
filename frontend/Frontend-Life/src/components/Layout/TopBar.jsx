import React from 'react'
import {CircleUserRound} from "lucide-react"
import {Bell} from "lucide-react"
import {Mail} from "lucide-react"
const TopBar = () => {
  return (
    <div className='bg-linear-to-br from-blue-100/60 to-blue-200/90 flex w-full items-center justify-between text-white h-16 rounded-2xl'>
      
      <div className="relative w-96">
  <input
    type="text"
    placeholder="Search"
    className="
      w-full
      rounded-full
      bg-white/60
      backdrop-blur-md
      py-2 pl-10 ml-48 pr-4
      text-sm
      text-slate-700
      placeholder-slate-400
      outline-none
      focus:ring-2 focus:ring-blue-300
    "
  />    

      </div>
        <div className='text-gray-600 pl-12 pt-4 pr-14 flex  gap-6 mb-4 items-center justify-center   '>
            <CircleUserRound />
            <Mail />
              <Bell />
        </div>
        

    </div>
  )
}

export default TopBar
