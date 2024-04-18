'use client'

import { useEmployee } from "hooks"
import { useEffect } from "react"

const EmployeeList = () => {

  const { employeeList, onSearchEmployeeList } = useEmployee()

  useEffect(() => {
    onSearchEmployeeList()
  }, [])
  
  return (
    <>
      {employeeList && employeeList.map((item, index) => {
        return (
          <div key={index}>
              <br />
              <div>{item.empNo}</div>
              <div>{item.empId}</div>
              <div>{item.empPassword}</div>
              <div>{item.empLastName}</div>
              <div>{item.empFirstName}</div>
              <div>{item.empLastNameKana}</div>
              <div>{item.empFirstNameKana}</div>
              <div>{item.empLevel}</div>
              <div>{item.empTel}</div>
              <div>{item.empMail}</div>
          </div>
        )
      })}
    </>
  )
}

export default EmployeeList
