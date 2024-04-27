import React from 'react'
import { useState } from 'react'
import './Auth.css'
import Signin from './Signin';

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
                    <img src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg" alt="" />
                    <div className='text'>
                        <span className='text-1'>Success is built upon well-organized tasks</span>
                        <span className='text-2 text-xs'>Let's get connected</span>
                    </div>
                </div>
                <div className='back'>
                    <img src="https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg" alt="" />
                </div>
            </div>
            <div className='forms h-full'>
                <div className='form-content h-full'>

                    <div className='login-form'>
                        <Signin/>

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
