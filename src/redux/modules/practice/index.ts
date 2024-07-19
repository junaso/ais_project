import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'constant/api'
import { RootState } from 'redux/store'
import { PracticeState } from 'types/practice'
import { api } from 'utill/axios'

export const createPracticeList = createAsyncThunk(
  'practice/createPracticeList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API.PRACTICE_TEST)
      return response.data
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.')
    }
  }
)

// 初期状態を正義
const initialState: PracticeState = {
  practiceList : []
}

// slice生成
export const practiceSlice = createSlice({
  name: 'practice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createPracticeList.fulfilled, (state, action) => {
        state.practiceList = action.payload
      })
      .addCase(createPracticeList.rejected, (state) => {
        state.practiceList = []
      })
  }
})
// selector定義
export const practiceSelector = (state: RootState) => state.practice

export default practiceSlice.reducer
