import React, { useState } from 'react'

import { Grid, StepLabel, Stepper, Step, Typography } from '@mui/material'

import { ReviewStep, FinishStep, InputStep } from './StepperItems'
import type { VisitRecord } from 'types/visitRecord'
import { useVisitRecord } from 'hooks'
import 'styles/common.css'
import Agreement from './Agreement'
import { RootState, useSelector } from 'redux/store'


const Registration = () => {
  
  const employeeList = useSelector((state: RootState) => state.employee.employeeList)

  const [isOpen, setIsOpen] = useState(false)

  const {
    onUpdateStep,
    onSetActiveStep,
    onResetData,
    steps,
    activeStep,
    onCreateVisitRecord,
  } = useVisitRecord()

  const visitRecord: VisitRecord = {
    visNo: 0,
    visName: "",
    companyName: "",
    tel: "",
    numberWith: 0,
    isHost: false,
    empNo: 0,
    reason: "",
    checkIn: "default",
    checkOut: "default",
  }

  const refInput = React.createRef<HTMLButtonElement>()
  const refReview = React.createRef<HTMLButtonElement>()
  const refFinish = React.createRef<HTMLButtonElement>()

  const handlePrevious = () => {
    onSetActiveStep(activeStep - 1)
  }

  const handleNext = () => {
    onSetActiveStep(activeStep + 1)
  }

  const handleReset = () => {
    onSetActiveStep(0)
  }

  const handleStart = () => {
    setIsOpen(true)
  }

  const handleCancle = () => {
    onResetData()
    setIsOpen(false)
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <InputStep
            ref={refInput}
            step={steps[0]}
            defaultValues={visitRecord}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onCancle={handleCancle}
            onUpdateStep={onUpdateStep}
          />
        )
      case 1:
        return (
          <ReviewStep
            ref={refReview}
            data={steps[0].data}
            onNext={handleNext}
            onUpdateData={onCreateVisitRecord}
            onUpdateStep={onUpdateStep}
            onPrevious={handlePrevious}
            employeeList={employeeList}
           />
        )

      case 2:
        return (
          <FinishStep
            visName={steps[0].data?.visName}
            ref={refFinish}
            onNext={handleReset}
            onReset={handleCancle}
          />
        )
      default:
        throw new Error('Unknown step')
    }
  }

  return (
    isOpen ? (
      <Grid className='stepper' container spacing={1}>
        <Stepper alternativeLabel activeStep={activeStep} sx={{ pt: 2, pb: 3 }}>
          {steps.map((item) => {
            const stepLabelProps = {
              option: item.option,
              error: item.error
            }
            return (
              <Step key={item.label} 
              sx={{
                "& .MuiStepLabel-root .Mui-active": {
                    color: item.error ? "red" : "#ff6600"
                },
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "#ff6600"
              },
            }}
              >
                
                <StepLabel {...stepLabelProps }>
                  <Typography variant="h5">
                    {item.label}
                  </Typography>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <Grid item xs={12} textAlign="left">
          {getStepContent(activeStep)}
        </Grid>
      </Grid>) : 
      (<Agreement onStart={handleStart} />)
  )
}

export default Registration
