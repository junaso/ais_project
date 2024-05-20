import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  createEmployeeList,
  selectEmployeeList,
  selectEmployeeStatus,
  selectEmployeeError
} from 'redux/modules/employee'
import { useEffect } from 'react'

const useEmployee = () => {
  const dispatch = useDispatch<AppDispatch>()

  const employeeList = useSelector(selectEmployeeList)
  const employeeStatus = useSelector(selectEmployeeStatus)
  const employeeError = useSelector(selectEmployeeError)

  useEffect(() => {
    if (employeeStatus === 'idle') {
      dispatch(createEmployeeList())
    }
  }, [dispatch, employeeStatus])

  return {
    employeeList,
    employeeStatus,
    employeeError
  }
}

export default useEmployee