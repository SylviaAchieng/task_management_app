import {Avatar} from '@mui/material'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10, flex justify-between items-center'>

        <p className='font-bold text-lg'>Task Manager Application</p>
      
        <div className='flex items-center gap-5'>
            <p>taskmanager</p>
            <Avatar sx={{backgroundColor:"#c24dd0"}} className='bg-[#c24dd0]' src='https://yt3.googleusercontent.com/ytc/AIdro_l5B0RFDAaRdg6t7d-Z9wY1AivF86w1HmzAA-2myLSCuH0=s176-c-k-c0x00ffffff-no-rj'/>
        </div>
    </div>
  )
}

export default Navbar