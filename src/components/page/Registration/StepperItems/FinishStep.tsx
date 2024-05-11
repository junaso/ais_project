import React from 'react'

import { Button, Grid, Stack, Typography } from '@mui/material'

interface FinishStepProps {
  onNext: () => void
}

const FinishStep = React.forwardRef<HTMLButtonElement, FinishStepProps>(({ onNext }, ref) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center" mt={6} mb={8}>
          完了
        </Typography>
      </Grid>
      <Grid item xs={12} mt={4} mb={4}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Button variant="contained" color="primary" size="large" onClick={onNext} ref={ref}>
          完了
          </Button>
        </Stack>
      </Grid>
    </Grid>
  )
})

export default FinishStep
