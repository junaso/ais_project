import React from 'react'

import { Button, Grid, Stack, Typography } from '@mui/material'
import { ITEMS } from 'constant/items'
import HomeIcon from '@mui/icons-material/Home'
import ScrollTop from 'components/organisms/ScrollTop'

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
    <ScrollTop>
      <Grid container spacing={2} justifyContent="center" sx={{ backgroundColor: '#FFF3E2', minHeight: '100vh', padding: '40px 20px' }}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center" style={{ color: 'orange', marginBottom: '16px' }}>
            {visName}<span style={{ color: 'black' }}>{ITEMS.FINISH.FINISH_C}</span>
          </Typography>
          <Typography variant="h6" align="center" style={{ marginBottom: '32px' }}>
            {ITEMS.FINISH.FINISH_A}<br />
            {ITEMS.FINISH.FINISH_B}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Button onClick={handleCancel} variant="contained" style={{ background: '#ff7961', marginTop: '16px' }} size='large'>
              <HomeIcon sx={{ marginRight: 1, fontSize: 30 }} />
              {ITEMS.FINISH.FINISH_D}<br />
              {ITEMS.FINISH.FINISH_E}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </ScrollTop>
  )
})

export default FinishStep
