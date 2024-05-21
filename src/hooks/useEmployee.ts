import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  createEmployeeList,
  employeeSelector,
} from 'redux/modules/employee'
import { useEffect } from 'react'

const useEmployee = () => {
  const dispatch = useDispatch<AppDispatch>()

  const employeeState = useSelector(employeeSelector)
  const { employeeList, status, error } = employeeState

  useEffect(() => {
    if (status === 'idle') {
      dispatch(createEmployeeList())
    }
  }, [dispatch, status])

  return {
    employeeList,
    status,
    error
  }
}

export default useEmployee
