import React from 'react'
import TaskCard from '../Task/TaskCard/TaskCard'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { fetchTasks } from '../../ReduxToolKit/TaskSlice';
import store from '../../ReduxToolKit/Store';

export default function TaskList() {
  const dispatch = useDispatch();
  const {task} = useSelector(store=>store)

  useEffect(()=>{
    dispatch(fetchTasks({}))
  },[dispatch]);

  console.log("task", task)

  return (
    <div className=' w-[67vw]'>

        <div className='space-y-3'>
        {
            [1,1,1,1].map((item)=>(<TaskCard/>))
        }

        </div>

        
      
    </div>
  )
}
