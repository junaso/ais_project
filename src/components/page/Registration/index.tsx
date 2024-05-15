import React from 'react'

import { Grid, StepLabel, Stepper, Step, Typography } from '@mui/material'

import { ReviewStep, FinishStep, InputStep } from './StepperItems'
import type { VisitRecord } from 'types/visitRecord'
import { useVisitRecord } from 'hooks'
import 'styles/stepper.css'

const Registration = () => {
  const {
    onUpdateStep,
    onSetActiveStep,
    onResetData,
    steps,
    activeStep,
    onCreateVisitRecord
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

  const refInput= React.createRef<HTMLButtonElement>()
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
            onUpdateStep={onUpdateStep}/>
        )
      case 1:
        return (
          <ReviewStep
            ref={refReview}
            data={steps[0].data}
            onNext={handleNext}
            // onPrevious={handlePrevious}
            onUpdateData={onCreateVisitRecord}
            onUpdateStep={onUpdateStep}
            onResetData={onResetData}/>
        )

      case 2:
        return (
          <FinishStep
            ref={refFinish}
            onNext={handleReset}
          />
        )
      default:
        throw new Error('Unknown step')
    }
  }

  return (
    <Grid className='stepper' container spacing={1}>
      <Stepper alternativeLabel activeStep={activeStep} sx={{ pt: 2, pb: 3 }}>
        {steps.map((item) => {
          const stepLabelProps = {
            option: item.option,
            error: item.error,
          }
          return (
            <Step key={item.label}>
              <StepLabel {...stepLabelProps}>
                <Typography variant="h5">
                  {item.label}
                </Typography>
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {getStepContent(activeStep)}
    </Grid>
  )
}

export default Registration
