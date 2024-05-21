import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  createEmployeeList,
  employeeSelector,
} from 'redux/modules/employee'

const useEmployee = () => {
  const dispatch = useDispatch<AppDispatch>()

  const employeeState = useSelector(employeeSelector)
  const { employeeList, status, error } = employeeState

  const onCreateEmployeeList = () => {
    dispatch(createEmployeeList())
  }

  return {
    onCreateEmployeeList,
    employeeList,
    status,
    error
  }
}

export default useEmployee
