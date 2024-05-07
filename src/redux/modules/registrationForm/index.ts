import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from 'redux/store'
import { VisitRecord } from 'types/VisitRecord'

interface RegistrationState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  formData: VisitRecord | null // 今までのデータをセーブ
}

const initialState: RegistrationState = {
  status: 'idle',
  error: null,
  formData: null, // 初期データはnull
}

export const submitRegistration = createAsyncThunk(
  'registration/submitRegistration',
  async (registrationData: VisitRecord): Promise<VisitRecord> => {
    try {
      // サーバーへの要請無しで、単純に状態をupdateする作業
      // Thunkが返還することは入力されたregistrationDataと同じ
      return registrationData
    } catch (error) {
      throw error
    }
  }
)


export const mergeAndSubmitRegistration = createAsyncThunk(
  'registration/mergeAndSubmitRegistration',
  async (registrationData: VisitRecord, { getState }): Promise<void> => {
    try {
      const { formData } = (getState() as RootState).registrationForm // 現在の状態持ってくる
      const mergedData = { ...formData, ...registrationData } // 前のデータと新しいデータを合体する
      // サーバーへの要請
      await axios.post('/visit-record', mergedData)
    } catch (error) {
      throw error
    }
  }
)

export const registrationSlice = createSlice({
  name: 'VisitRecord',
  initialState,
  reducers: {
    storeFormData: (state, action) => {
      state.formData = action.payload // 今までのデータをセーブ
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitRegistration.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(submitRegistration.fulfilled, state => {
        state.status = 'succeeded'
      })
      .addCase(submitRegistration.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  },
})

export const { storeFormData } = registrationSlice.actions // storeFormData action露出

export default registrationSlice.reducer

export const selectRegistrationStatus = (state: RootState) => state.registrationForm.status
export const selectRegistrationError = (state: RootState) => state.registrationForm.error
export const selectFormData = (state: RootState) => state.registrationForm.formData
