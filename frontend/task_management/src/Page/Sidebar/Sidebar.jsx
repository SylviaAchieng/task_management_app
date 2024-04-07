import React from 'react'
import {Avatar} from '@mui/material'

export default function Sidebar() {
  return (
    <div className='min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
      <div className='space-y-5 h-full'>
        <div className='flex justify-center'>
            <Avatar
            sx={{width:"8rem", height:"8rem"}} 
            src='E:\task managemet\frontend\task_management\src\image\task.webp'/>
        </div>
      </div>
    </div>
  )
}
