import { combineReducers } from '@reduxjs/toolkit'

import registrationReducer from './registrationForm'

const rootReducer = combineReducers({
  registrationForm: registrationReducer
})

export default rootReducer
