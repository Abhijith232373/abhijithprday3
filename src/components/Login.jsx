import {Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{marginTop:"80px"}}>
        <Typography variant='h3'>Login Page</Typography><br></br>
        <TextField label="user name"variant="outlined"/> &nbsp;
        <TextField label="Age"type='number'variant="outlined"/><br></br><br></br>
        <TextField label="gmail"type='gmail'variant="outlined"/> &nbsp;
        <TextField label="password"type='password'variant='outlined'/><br></br><br></br>
        <Button variant="contained" color="success">Log In</Button>
    </div>
    
  )
}

export default Login