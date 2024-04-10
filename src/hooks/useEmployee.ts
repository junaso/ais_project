import { employeeSelector, fetchEmployeeList } from 'redux/modules/employee'
import { useDispatch, useSelector } from 'redux/store'

const useEmployee = () => {
  const dispatch = useDispatch()
  const employeeState = useSelector(employeeSelector)
  const { result } = employeeState

  const onSearchEmployeeList = async () => {
    dispatch(fetchEmployeeList())
  }

  return { onSearchEmployeeList, result }
}

export default useEmployee
