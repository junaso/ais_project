import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { API } from 'constant/api'
import { RootState } from 'redux/store'
import { FormStep, VisitRecord, VisitRecordState } from 'types/visitRecord'
import { api } from 'utill/axios'

export const createVisitRecord = createAsyncThunk(
  'registration/createVisitRecord',
  async (visitRecord: VisitRecord, { rejectWithValue }
  ) => {
    try {
      const response = await api.post(API.VISIT_RECORD, { visitRecord })
      return response.data
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.')
    }
  }
)

export const updateStep = createAction('registration/updateStep', (index: number, step: FormStep) => {
  return {
    payload: {
      index,
      step,
    },
  }
})

export const setActiveStep = createAction('registration/setActiveStep', (index: number) => {
  return {
    payload: {
      index,
    },
  }
})

export const resetVisitRecord = createAction('registration/resetVisitRecord')


const initialState: VisitRecordState = {

  steps: [
    {
      label: '入力',
      error: false,
      completed: false,
    },
    {
      label: '確認',
      error: false,
      completed: false,
    },
    {
      label: '完了',
      error: false,
      completed: false,
    },
  ],
  activeStep: 0,
}



export const registrationSlice = createSlice({
  name: 'visitRecord',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateStep, (state, action) => {
        const { index, step } = action.payload
        state.steps[index] = step
      })
      .addCase(setActiveStep, (state, action) => {
        const { index } = action.payload
        state.activeStep = index
      })
      .addCase(resetVisitRecord, (state) => {
        // visitRecord 状態を初期化するロジック追加
        state.steps = []
        state.activeStep = initialState.activeStep
      })
  },
})


export const registrationSelector = (state: RootState) => state.registration
export default registrationSlice.reducer
