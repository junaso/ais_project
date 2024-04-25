'use client'

import Table from "components/organisms/Table"
import { useEmployee } from "hooks"
import { useEffect } from "react"
import { Employee } from "types/employee"

const EmployeeList = () => {

  const { employeeList, onSearchEmployeeList } = useEmployee()

  useEffect(() => {
    onSearchEmployeeList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
