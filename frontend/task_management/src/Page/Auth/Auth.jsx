import React from 'react'
import { useState } from 'react'

const Auth = () => {

    const [isRegister, setIsRegister]=useState(false);
    const togglePanel=()=>{
        setIsRegister(!isRegister)
    }

  return (
    <div className='flex justify-center h-screen items-center overflow-hidden'>
        <div className='box lg:max-w-4xl'>
            <div className={`cover ${isRegister?"rotate-active":""}`}>
                <div className='front'>
                    <img src="https://pixabay.com/photos/laptop-digital-device-technology-5673901/" alt="" />
                    <div className='text'>
                        <span className='text-1'>Success is built upon well-organized tasks</span>
                        <span className='text-2 text-xs'>Let's get connected</span>
                    </div>
                </div>
                <div className='back'>
                    <img src="https://pixabay.com/photos/laptop-office-hand-writing-3196481/" alt="" />
                </div>
            </div>
            <div className='forms h-full'>
                <div className='form-content h-full'>

                    <div className='login-form'>
                        signin

                    </div>
                    <div className='signup-form'>
                        signup

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Auth
