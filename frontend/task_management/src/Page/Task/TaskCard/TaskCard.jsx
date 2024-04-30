import React, { useState } from 'react'
import {IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UserList from '../UserList';
import SubmissionList from './SubmissionList';
import EditTaskCard from './EditTaskCard';


const role ="ROLE_ADMIN"
export default function TaskCard() {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList] = useState(false);
  const handleCloseUserList=()=>{
    setOpenUserList(false);
  }
  const handleOpenUserList=()=>{
    setOpenUserList(true);
    handleMenuClose();
  };

  const [openSubmissionList, setOpenSubmissionList] = useState(false);
  const handleCloseSubmissionList=()=>{
    setOpenSubmissionList(false);
  }
  const handleOpenSubmissionList=()=>{
    setOpenSubmissionList(true);
    handleMenuClose();
  };

  const [openUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);
  const handleCloseUpdateTaskForm=()=>{
    setOpenUpdateTaskForm(false);
  }
  const handleOpenUpdateTaskModel=()=>{
    setOpenUpdateTaskForm(true);
    handleMenuClose();
  };

  const handleDeleteTask=()=>{
    handleMenuClose();
  };



  return (
    <div>
      <div className='card lg:flex justify-between'>
        <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
            <div className=''>
                <img className='lg:w-[7rem] lg:h-[7rem] object-cover' src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
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
        <IconButton  id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleMenuClick}>
          <MoreVertIcon/>
        </IconButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        {
          role==="ROLE_ADMIN"?<>
          <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
          <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
          <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
          <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
          </>:<>
          </>
        }
     </Menu>

        <div>

        </div>

      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList}/>
      <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList}/>
      <EditTaskCard open={openUpdateTaskForm} handleClose={handleCloseUpdateTaskForm}/>
    </div>
  );
};
