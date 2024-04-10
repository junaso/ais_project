import { combineReducers } from '@reduxjs/toolkit'

import employeeReducer from './employee'

const rootReducer = combineReducers({
  employee: employeeReducer,
})

export default rootReducer
