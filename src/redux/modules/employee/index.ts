import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'constant/api'
import { RootState } from 'redux/store'
import { EmployeeState } from 'types/Employee'
import { api } from 'utill/axios'

// 非同期アクションを処理
export const fetchEmployeeList = createAsyncThunk(
  'employee/fetchEmployeeList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API.EMPLOYEE_LIST)
      return response.data
    } catch (error) {
      // 直接エラーメッセージを返す
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.')
    }
  }
)

// 初期状態を定義
const initialState: EmployeeState = {
  employee: []
}

// slice生成
export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEmployeeList.fulfilled, (state, action) => {
        state.employee = action.payload
      })
  }
})

// selector定義
export const employeeSelector = (state: RootState) => state.employee

export default employeeSlice.reducer
