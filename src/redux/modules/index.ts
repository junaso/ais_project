import { combineReducers } from '@reduxjs/toolkit'

import registrationReducer from './visitRecord'

const rootReducer = combineReducers({
  registration: registrationReducer
})

export default rootReducer
