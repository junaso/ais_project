import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  fetchEmployeeList,
  employeeSelector,
} from 'redux/modules/employee'
import { useEffect, useState } from 'react'

const useEmployee = () => {
  const dispatch = useDispatch<AppDispatch>()

  const employeeState = useSelector(employeeSelector)
  const { employee } = employeeState

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        await dispatch(fetchEmployeeList()).unwrap()
      } catch (err) {
        setError(err as string)
      }
      setLoading(false)
    }

    fetchData()
  }, [dispatch])

  return {
    employee,
    loading,
    error,
  }
}

export default useEmployee
