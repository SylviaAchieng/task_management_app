import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import {TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../ReduxToolKit/AuthSlice';
import Home from '../Home/Home';

const Signin = ({togglePanel}) => {
  const dispatch = useDispatch();

  //const loggedIn = useSelector((state) => state.auth.loggedIn);

  const [formData, setFormData]=useState({
      email:"",
      password:""
  })
  const handleChange=(e)=>{
      const {name, value}=e.target;
      setFormData({...formData, [name]:value})
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(login(formData))
      console.log("login success")
      console.log("login form", formData)
  }

  //if (loggedIn) {
   // return <Home />;
  //}

  return (
    <div>
      <h1 className='text-lg font-bold text-center pb-8'>Login</h1>
      <form className='space-y-3' onSubmit={handleSubmit}>
        <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="enter your email address"
        />
        <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="enter password"
        />

        <div>
            <Button fullWidth
            className="customeButton"
            type="submit"
            sx={{padding:".9rem"}}
            >
                Login
            </Button>
        </div>
      </form>
      <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
        <span>don't have an account?</span>
        <Button onClick={togglePanel}>Signup</Button>
      </div>
    </div>
  )
}

export default Signin;
