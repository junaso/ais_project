'use client'

import { useEmployee } from "hooks"
import { useEffect } from "react"

const EmployeeList = () => {

  const { result, onSearchEmployeeList } = useEmployee()

  useEffect(() => {
    onSearchEmployeeList()
  }, [])
  
  return (
    <div>{result}</div>
  )
}

export default EmployeeList
