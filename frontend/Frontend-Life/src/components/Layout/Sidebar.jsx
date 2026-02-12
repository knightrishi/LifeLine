import React from 'react'
import {LayoutDashboard} from 'lucide-react'
import {Hospital} from 'lucide-react'
import {CalendarHeart } from 'lucide-react'
import {Trophy } from 'lucide-react'
import {Siren  } from 'lucide-react'

const Sidebar = () => {
  return (
   <div className="
  bg-[#0A1A2F]
  w-30
  h-[calc(100vh-2.5rem)]
  fixed
  top-6
  left-6
  flex flex-col
  items-center
  justify-center
  gap-6
  rounded-2xl
    z-10
">
    <span className=
    'flex items-center justify-center w-12 h-12 text-white rounded-full transition hover:bg-white hover:text-teal-900'><LayoutDashboard /></span>  

    <span className=
    'flex items-center justify-center w-12 h-12 text-white rounded-full transition hover:bg-white hover:text-teal-900'><Hospital /></span>  

    <span className=
    'flex items-center justify-center w-12 h-12 text-white rounded-full transition hover:bg-white hover:text-teal-900'><CalendarHeart /></span>  

    <span className=
    'flex items-center justify-center w-12 h-12 text-white rounded-full transition hover:bg-white hover:text-teal-900'><Trophy /></span>  

    <span className=
    'flex items-center justify-center w-12 h-12 text-white rounded-full transition hover:bg-white hover:text-teal-900'><Siren /></span>  
    </div>
  )
}

export default Sidebar
