import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'constant/api'
import { RootState } from 'redux/store'
import { EmployeeState } from 'types/employee'
import { api } from 'utill/axios'

// 非同期　actionを処理
export const createEmployeeList = createAsyncThunk(
  'employee/fetchEmployeeList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API.EMPLOYEE_LIST)
      return response.data
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.')
    }
  }
)

// 初期状態を正義
const initialState: EmployeeState = {
  employeeList: [],
  status: 'idle',
  error: null
}

// slice生成
export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createEmployeeList.pending, state => {
        state.status = 'loading'
      })
      .addCase(createEmployeeList.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.employeeList = action.payload
      })
      .addCase(createEmployeeList.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  }
})
// selector定義
export const employeeSelector = (state: RootState) => state.employee

export default employeeSlice.reducer
