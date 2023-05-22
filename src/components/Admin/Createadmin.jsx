import { FormControl, InputLabel, TextField, Typography, Select, MenuItem, Box, Button, Divider} from '@mui/material'
import React  from 'react'
import "typeface-roboto"
import { useState } from 'react';

const Createadmin = () => {
    const [poll, polltype] =useState('');
    const handleChange = (event) => {
      polltype(event.target.value);
    };

  return (
    <div style={{ padding: "40px",textAlign:"center"}} class='create' >
        <Typography style={{color:"#519ece",fontFamily:"Roboto",fontSize:"40px"}}>Create a Tag of your choice</Typography><br/><Divider/><br/>
        <TextField  variant='outlined' label='Tag Name' placeholder='Tag Name' sx={{width:400,"& .MuiInputBase-root":{height:50}}} style={{fontFamily:"Roboto",boxShadow:"4px 3px rgba(19, 18, 18, 0.149)",borderRadius:"5px"}}></TextField><br/><br/>
        <Box>
        <FormControl variant='outlined' sx={{width:400,"& .MuiInputBase-root":{height:50}}} style={{boxShadow:"4px 3px rgba(19, 18, 18, 0.149)",borderRadius:"5px"}}>
            <InputLabel id="poll">PollType</InputLabel>
            <Select labelId='poll' id='POLL' label='PollType' value={poll} onChange={handleChange}>
            <MenuItem value={1} >Public</MenuItem>
            <MenuItem value={2} >Private</MenuItem>
            </Select>
        </FormControl>
        </Box> <br/>
        <TextField  variant='outlined' placeholder='Description' label='Description' sx={{width:400}} style={{boxShadow:"4px 3px rgba(19, 18, 18, 0.149)",borderRadius:"5px"}} multiline rows={5} rowsMax={10}></TextField><br/><br/>
        <Button variant='contained' set sx={{ color: '#e3e6d8' }} style={{color:"#e3e6d8",fontFamily:"Roboto",boxShadow:"4px 3px rgba(19, 18, 18, 0.149)",borderRadius:"10px", minWidth: '400px'}}>Submit</Button>
    </div>
  )
}

export default Createadmin