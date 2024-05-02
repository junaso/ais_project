import React from 'react'
import { styled, useTheme } from '@mui/material/styles'

interface StepIndicatorProps {
  stepNumber: number
  completed: boolean
}

const StepIndicatorRoot = styled('div')(({ theme, completed }: { theme: any, completed: boolean }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: completed ? theme.palette.primary.main : theme.palette.background.paper,
  border: `2px solid ${theme.palette.background.paper}`,
  color: completed ? theme.palette.common.white : theme.palette.text.primary,
}))

const CheckIcon = () => (
  // Icon Path
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0V0z"/>
    <path d="M9 16.2l-3.5-3.5c-.39-.39-1.03-.39-1.42 0s-.39 1.02 0 1.41l4.61 4.61c.39.39 1.02.39 1.41 0L20.3 9.7c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0L9 16.2z"/>
  </svg>
)

const StepIndicator = ({ stepNumber, completed }: StepIndicatorProps) => {
  const theme = useTheme(); // テーマの情報を持って来る
  return (
    <StepIndicatorRoot theme={theme} completed={completed}>
      {completed ? <CheckIcon /> : stepNumber}
    </StepIndicatorRoot>
  )
}

export default StepIndicator
