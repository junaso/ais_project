import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { API } from 'constant/api'
import { RootState } from 'redux/store'
import { FormStep, LoginRequest, VisitRecord, VisitRecordState } from 'types/visitRecord'
import { api } from 'utill/axios'

export const fetchLogin = createAsyncThunk('registration/fetchLogin', async () => {
  try {

    const data:LoginRequest = {
      empId:'asiainfo',
      password:'abcd1234'
    }

    const response = await api.post(API.LOGIN, data, {
      headers: { 'Content-Type': 'application/json' }
    })

    const token = response.data.token

    localStorage.setItem('jwtToken', token)
    
  } catch (error) {
    console.error('Error fetchLogin:', error)
    throw error
  }
})

export const createVisitRecord = createAsyncThunk(
  'registration/createVisitRecord',
  async (data: VisitRecord, { rejectWithValue }
  ) => {
    try {
      const response = await api.post(API.VISIT_RECORD, data, {
        headers: { 'Content-Type': 'application/json' }
      })
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
        state.steps = [
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
          state.activeStep = initialState.activeStep
      })
  },
})


export const registrationSelector = (state: RootState) => state.registration
export default registrationSlice.reducer
