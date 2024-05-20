import React from 'react'

import { Button, FormControl, Grid, Link, Stack, Typography, createTheme } from '@mui/material'
import { ITEMS } from 'constant/items'
import HomeIcon from '@mui/icons-material/Home';

interface FinishStepProps {
  visName: string | undefined
  onNext: () => void
  onResetData: () => void
}

const theme = createTheme({
  palette: {
    secondary: {
      main: '#d32f2f',
    },
  },
})


const FinishStep = React.forwardRef<HTMLButtonElement, FinishStepProps>(({ visName, onResetData }, ref) => {
  
  const handleCancel = () => {
    // 初期化するメソッド
    onResetData()
    // 初期化すると同時にagreementページで連結
    window.location.href = '/agreement'
  }
  
  return (
    <FormControl className='container'>
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
          <Stack direction="row" justifyContent="center" alignItems="center" mb={4} spacing={1}>
            <Button variant="contained" color="primary" size="medium" onClick={handleCancel} ref={ref}>
              完了
            </Button>
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Link href='https://www.ais-info.co.jp/'>
            <Button variant="contained" style={{ background: '#ff7961'}} size='large'>
              <HomeIcon sx={{ marginRight: 2, fontSize: 40 }}/>
              亜細亜情報システム<br/>
              ホームページ
            </Button>
            </Link>
            </Stack>
        </Grid>
      </Grid>
    </FormControl>
  )
})

export default FinishStep
