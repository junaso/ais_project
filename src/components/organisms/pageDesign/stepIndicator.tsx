import React from 'react';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface StepIndicatorProps {
  icon: ReactNode; // ReactNode type 指定
}

const StepIndicatorRoot = styled('div')(({ theme }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  border: `2px solid ${theme.palette.background.paper}`,
  color: theme.palette.common.white,
}));

const StepIndicator = ({ icon }: StepIndicatorProps) => { // StepIndicatorPropsをinterfaceで使う
  return (
    <StepIndicatorRoot>
      {icon}
    </StepIndicatorRoot>
  );
};

export default StepIndicator;
