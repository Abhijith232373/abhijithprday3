import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  // var name="Abhijith"
  var [name,setName] = useState("Abhijith")
  var [value,setValue] = useState()
  const changeName =()=>{
  console.log("Clicked")
  setName(value)
  }
  const inputHandler = (e)=>{
    console.log(e.target.value)
    setValue(e.target.value)
  }
  return (
    <div>
      <Typography variant='h4'>Welcome {name}</Typography><br></br>
      <TextField label="Enter Name"variant='outlined'onChange={inputHandler}></TextField><br></br><br></br>
      <Button variant='contained'color='error' onClick={changeName}>change</Button>
    </div>
  )
}

export default Statebasics