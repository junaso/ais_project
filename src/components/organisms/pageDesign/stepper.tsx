'use client'
import * as React from 'react';
import { Stepper, Step, StepLabel, Typography } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import StepIndicator from './stepIndicator';


export default function DottedConnector() {
  return (
    <Stepper
      sx={{
        width: '500px',
        margin: 'auto',
        marginTop: '40px',
        marginBottom: '40px',
        display: 'flex',
        alignItems: 'center',
        '& .MuiStep-root': {
          flexDirection: 'column-reverse',
          '&::after': {
            top: 'unset',
            bottom: 'calc(var(--StepIndicator-size) / 2 - var(--Step-connectorThickness) / 2)',
          },
        },
        '& .MuiStep-completed::after': {
          bgcolor: 'primary.500',
        },
        '& .MuiStep-active .MuiStepIcon-root': {
          borderColor: 'primary.500',
        },
        '& .MuiStep-root:has(+ .MuiStep-active)::after': {
          color: 'primary.500',
          backgroundColor: 'transparent',
          backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)',
          backgroundSize: '7px 7px',
          backgroundPosition: 'center left',
        },
        '& .MuiStep-disabled *': {
          color: 'neutral.plainDisabledColor',
        },
      }}
    >
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
  );
}