export type Employee = {
      empNo:number,
      empId:string,
      lastName:string,
      firstName:string,
      lastKanaName:string,
      firstKanaName:string,
      securityLevel:number,
      mail:string
  }

  export type EmployeeState = {
    employee : Employee[]
  }
