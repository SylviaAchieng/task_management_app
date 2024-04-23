import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateTask({handleClose, open}) {

  const [formData, setFormData]=useState({
    title:"",
    image:"",
    description:"",
    tage:[],
    deadline: new Date(),
  })

  const handleChange=(e)=>{
    const {name, value}=e.target;
    setFormData({
      ...formData,
      [name]:value,
    });

  };

  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={12}>
                <TextField
                label='Title'
                fullWidth
                name='title'
                value={formData.title}
                onChange={handleChange}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
