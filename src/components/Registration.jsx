import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div style={{marginTop:"80px"}}>
        <Typography variant='h3'>Registration Page</Typography><br></br><br></br>
        <TextField label="first name"variant='outlined'/> &nbsp;
        <TextField label="last name"variant='outlined'/><br></br><br></br>
        <TextField label="Gmail"type='gmail'variant='outlined'/> &nbsp;
        <TextField label="password"type='password'variant='outlined'/> <br></br><br></br>
        <Button variant="contained"color='info'>Sign Up</Button>

    </div>
    

  )
}

export default Registration