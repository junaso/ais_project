import { employeeSelector, fetchEmployeeList } from 'redux/modules/employee'
import { useDispatch, useSelector } from 'redux/store'

const useEmployee = () => {
  const dispatch = useDispatch()
  const employeeState = useSelector(employeeSelector)
  const { employeeList } = employeeState

  const onSearchEmployeeList = async () => {
    dispatch(fetchEmployeeList())
  }

  return { onSearchEmployeeList, employeeList }
}

export default useEmployee
