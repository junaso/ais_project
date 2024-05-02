'use client'

import React from 'react'
import { Stepper, Step, StepLabel, Typography, createTheme } from '@mui/material'
import StepIndicator from './StepIndicator'
import 'styles/dottedConnector.css'

const theme = createTheme({
  // テーマ設定
});

  const DottedConnector = () => {
    const [completedSteps, setCompletedSteps] = React.useState(0)
  
    React.useEffect(() => {
      // DottedConnectorが完了したとき、1番段階を完了状態で設定する（数字からイモジで変わる）
      setCompletedSteps(1)
    }, [])


    return (
      <Stepper className="stepper-container">
      <Step completed={completedSteps >= 1}>
          <StepLabel
            icon={<StepIndicator stepNumber={1} completed={completedSteps >= 1} />}
            optional={
            <Typography className='no-wrap' fontSize="sm" fontWeight="normal">
              基本情報
            </Typography>}>
            <Typography variant="h4" fontWeight="bold">
              1
            </Typography>
          </StepLabel>
        </Step>
        <Step completed={completedSteps >= 2}>
          <StepLabel
            icon={<StepIndicator stepNumber={2} completed={completedSteps >= 2} />}
            optional={
            <Typography className='no-wrap' fontSize="sm" fontWeight="normal">
              ご用件
            </Typography>}>
            <Typography variant="h4" fontWeight="bold">
              2
            </Typography>
          </StepLabel>
        </Step>
        <Step completed={completedSteps >= 3}>
          <StepLabel
            icon={<StepIndicator stepNumber={3} completed={completedSteps >= 3} />}
            optional={
            <Typography className='no-wrap' fontSize="sm" fontWeight="normal">
              確認
            </Typography>}>
            <Typography variant="h4" fontWeight="bold">
              3
            </Typography>
          </StepLabel>
        </Step>
        <Step completed={completedSteps >= 4}>
          <StepLabel
            icon={<StepIndicator stepNumber={4} completed={completedSteps >= 4} />}
            optional={
            <Typography className='no-wrap' fontSize="sm" fontWeight="normal">
              登録完了
            </Typography>}>
            <Typography variant="h4" fontWeight="bold">
              4
            </Typography>
          </StepLabel>
        </Step>
    </Stepper>
  )
  
}

export default DottedConnector
