import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>My App</Typography> &nbsp;
                <Button variant='contained'color='success'>
                    <Link to={'/'}style={{textDecoration:"none",color:"white"}}>Log In</Link></Button> &nbsp;
                <Button variant='contained'color='error'>
                    <Link to={'/signup'} style={{textDecoration:"none",color:"white"}}>Sign up</Link></Button> 
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar