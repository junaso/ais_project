import React, { useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import 'styles/common.css'
import { PracticeSample } from 'types/practice'

interface TestProps {
  list: PracticeSample[]
}


const Test = ({ list }: TestProps) => {

  const [isCheckd, setIsChecked] = useState(false)

  const onClick = () => {
    if(isCheckd) {
      setIsChecked(false)
    } else {
      setIsChecked(true)
    }
  }

  return (
    <Grid>
      {list.map((item) => (
        <Typography key={item.pacticeNo}>
          {isCheckd ? item.name:item.address}
        </Typography>
      ))}
      <Button onClick={onClick}>
        변환
      </Button>
    </Grid>
  )
}

export default Test
