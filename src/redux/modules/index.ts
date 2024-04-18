import { combineReducers } from '@reduxjs/toolkit'

import employeeReducer from './employee'
import visitRecordReducer from './visitRecord'

const rootReducer = combineReducers({
  employee: employeeReducer,
  visitRecord: visitRecordReducer
})

export default rootReducer
