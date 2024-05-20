import { combineReducers } from '@reduxjs/toolkit'

import registrationReducer from './visitRecord'
import employeeReducer from './employee'

const rootReducer = combineReducers({
  registration: registrationReducer,
  employee: employeeReducer,
})

export default rootReducer
