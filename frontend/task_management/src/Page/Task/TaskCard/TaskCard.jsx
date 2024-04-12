import React from 'react'

export default function TaskCard() {
  return (
    <div>
      <div className='card lg:flex justify-between'>
        <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
            <div className=''>
                <img className='lg:w-[7rem] lg:h-[] object-cover' src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>

            <div className='space-y-5'>
                <div className='space-y-2'>
                    <h1 className='font-bold text-lg'>Car Rental Website</h1>
                    <p className='text-gray-500 text-sm'>use latest framework and technolgoy to make this website</p>

                </div>

                <div className='flex flex-wrap gap-2 items-center'>

                    {[1,1,1,1].map((item)=><span className='py-1 px-5 rounded-full techStack'>
                        Angular
                    </span>)}

                </div>

            </div>
        </div>

      </div>
    </div>
  )
}
