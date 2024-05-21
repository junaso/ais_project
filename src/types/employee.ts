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
    employeeList : Employee[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
  }
