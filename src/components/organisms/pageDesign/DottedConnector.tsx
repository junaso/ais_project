'use client'

import React from 'react'
import { Stepper, Step, StepLabel, Typography } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import StepIndicator from './StepIndicator'
import 'styles/stepIndicator.css'

const DottedConnector = () => {
  return (
    <Stepper className="stepper-container">
      <Step completed>
        {/* 後で段階的にiconが出るよう設定 */}
        <StepLabel
          icon={<CheckRoundedIcon />}
          StepIconComponent={(props) => <StepIndicator {...props} />}
          optional={
            <Typography fontSize="sm" fontWeight="normal">
              基本情報
            </Typography>
          }
        >
          <Typography variant="h4" fontWeight="bold">1</Typography>
        </StepLabel>
      </Step>
      <Step completed>
        <StepLabel
          icon={<CheckRoundedIcon />}
          StepIconComponent={(props) => <StepIndicator {...props} />}
          optional={
            <Typography fontSize="sm" fontWeight="normal">
             ご用件
            </Typography>
          }
        >
          <Typography variant="h4" fontWeight="bold">2</Typography>
        </StepLabel>
      </Step>
      <Step active>
        <StepLabel
          icon={<KeyboardArrowDownRoundedIcon />}
          StepIconComponent={(props) => <StepIndicator {...props} />}
          optional={
            <Typography fontSize="sm" fontWeight="normal">
              確認
            </Typography>
          }
        >
          <Typography variant="h4" fontWeight="bold">3</Typography>
        </StepLabel>
      </Step>
      <Step disabled>
        <StepLabel
          StepIconComponent={(props) => <StepIndicator {...props} />}
          optional={
            <Typography fontSize="sm" fontWeight="normal">
              登録完了
            </Typography>
          }
        >
          <Typography variant="h4" fontWeight="bold">4</Typography>
        </StepLabel>
      </Step>
    </Stepper>
  )
}

export default DottedConnector
