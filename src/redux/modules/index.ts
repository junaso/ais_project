import { combineReducers } from '@reduxjs/toolkit'

import practiceReducer from './practice'

const rootReducer = combineReducers({
  practice: practiceReducer,
})

export default rootReducer
