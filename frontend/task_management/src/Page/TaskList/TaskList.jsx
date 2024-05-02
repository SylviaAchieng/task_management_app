import React from 'react'
import TaskCard from '../Task/TaskCard/TaskCard'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { fetchTasks } from '../../ReduxToolKit/TaskSlice';
import { useLocation } from 'react-router-dom';

export default function TaskList() {
  const dispatch = useDispatch();
  const {task, auth} = useSelector(store=>store)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterValue = queryParams.get("filter");

  useEffect(()=>{
    if(auth)
    dispatch(fetchTasks({status:filterValue}))
  },[filterValue]);

  console.log("task", task)

  return (
    <div className=' w-[67vw]'>

        <div className='space-y-3'>
        {
            task.tasks.map((item)=>(<TaskCard item={item}/>))
        }

        </div>

        
      
    </div>
  )
}
