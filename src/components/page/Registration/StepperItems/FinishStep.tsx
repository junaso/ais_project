import React from 'react'

import { Button, FormControl, Grid, Stack, Typography } from '@mui/material'
import { ITEMS } from 'constant/items'
import HomeIcon from '@mui/icons-material/Home'

interface FinishStepProps {
  visName: string | undefined
  onNext: () => void
  onReset: () => void
}

const FinishStep = React.forwardRef<HTMLButtonElement, FinishStepProps>(({ visName, onReset }) => {

  const handleCancel = () => {
    onReset()
    window.location.href = 'https://www.ais-info.co.jp/'
  }

  return (
    <FormControl>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center" style={{ color: 'orange' }} mt={6} mb={8}>
            {visName}<span style={{ color: 'black' }}>様</span>
          </Typography>
          <Typography variant="h6" align="center" mt={6} mb={8}>
            {ITEMS.FINISH.FINISH_A}<br />
            {ITEMS.FINISH.FINISH_B}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={4} mb={4}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Button onClick={handleCancel} variant="contained" style={{ background: '#ff7961' }} size='large'>
              <HomeIcon sx={{ marginRight: 2, fontSize: 40 }} />
              亜細亜情報システム<br />
              ホームページ
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </FormControl>
  )
})

export default FinishStep
