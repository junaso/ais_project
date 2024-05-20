import { EmployeeList } from "types/Employee"

export const mockFormData: EmployeeList = {
      
        employeeList: [
            
            {
            empNo:1,
            empId:'asdf',
            lastName:'kim',
            firstName:'hoho',
            lastKanaName:'ホホ',
            firstKanaName:'キム',
            securityLevel:1,
            mail:'asdf@ais-info.co.jp'
            },
            {
            empNo:2,
            empId:'qwer',
            lastName:'son',
            firstName:'haha',
            lastKanaName:'ハハ',
            firstKanaName:'ソン',
            securityLevel:3,
            mail:'qwer@ais-info.co.jp'
            },
            {
            empNo:3,
            empId:'zcxv',
            lastName:'han',
            firstName:'kuku',
            lastKanaName:'クク',
            firstKanaName:'ハン',
            securityLevel:1,
            mail:'zxcv@ais-info.co.jp'
            }
        ],
        status: 'idle', // 状態
        error: null // error
  }