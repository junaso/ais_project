'use client'

import Table from "components/organisms/Table"
import { useEmployee } from "hooks"
import { useEffect } from "react"
import { Employee } from "types/employee"

const EmployeeList = () => {

  const { employeeList, onSearchEmployeeList } = useEmployee()

  useEffect(() => {
    onSearchEmployeeList()
  }, [])
  
  return (
    <>
      {employeeList.length > 0 &&
            <Table<Employee> list={employeeList}></Table>
      }
    </>

  )
}

export default EmployeeList
