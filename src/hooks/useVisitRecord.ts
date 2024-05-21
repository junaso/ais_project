import {
  createVisitRecord,
  updateStep,
  setActiveStep,
  registrationSelector,
  resetVisitRecord,
} from 'redux/modules/visitRecord'
import { useDispatch, useSelector } from 'redux/store'
import { FormStep, VisitRecord } from 'types/visitRecord'

const useVisitRecord = () => {
  const dispatch = useDispatch()
  const visitRecordState = useSelector(registrationSelector)
  const { steps, activeStep } = visitRecordState

  const onCreateVisitRecord = (data: VisitRecord) => {
    dispatch(createVisitRecord(data))
  }

  const onUpdateStep = (index: number, step: FormStep) => {
    dispatch(updateStep(index, step))
  }

  const onSetActiveStep = (index: number) => {
    dispatch(setActiveStep(index))
  }

  // visitRecordの状態を初期化する関数
  const onResetData = () => {
    dispatch(resetVisitRecord())
  }

  return {
    onUpdateStep,
    onSetActiveStep,
    steps,
    activeStep,
    onCreateVisitRecord,
    onResetData,
  }
}

export default useVisitRecord
