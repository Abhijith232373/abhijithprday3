import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setCount] = useState(0)
    const inCount = () => {
        setCount(count+1)
    }
    const deCount = () => {
        setCount(count-1)
    }
  return (
    <div>
        <Typography variant='h4'>COUNTER: {count}</Typography><br />
        <Button variant='contained'color='success' onClick={inCount}>+</Button> &nbsp; &nbsp;
        <Button variant='contained'color='error' onClick={deCount}>-</Button>
    </div>
  )
}

export default Counter