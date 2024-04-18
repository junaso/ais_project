export type Employee = {
    empNo : number,
    empId : string,
    empPassword : string,
    empLastName : string,
    empFirstName : string,
    empLastNameKana : string,
    empFirstNameKana : string,
    empLevel : string,
    empTel : string,
    empMail : string
  }

  export type EmployeeList = {
    employeeList : Employee[]
  }