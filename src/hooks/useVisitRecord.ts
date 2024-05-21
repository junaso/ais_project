import { useState } from 'react'
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

  // 選択した面会者(empNo)をセーブするobject
  const [selectedEmployeeEmpNo, setSelectedEmployeeEmpNo] = useState<number | null>(null) 

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

  // 選択した面会者のempNoを設定する関数
  const onSelectedEmployeeChange = (empNo: number | null) => {
    setSelectedEmployeeEmpNo(empNo)
  }


  return {
    onUpdateStep,
    onSetActiveStep,
    steps,
    activeStep,
    onCreateVisitRecord,
    onResetData,
    selectedEmployeeEmpNo,
    onSelectedEmployeeChange,
  }
}

export default useVisitRecord
