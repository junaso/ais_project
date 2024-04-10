import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'redux/store'
import { API, apiPath } from 'constant/api'

import type { Employee } from 'types/employee'
import { api } from 'utill/axios'

  export const fetchEmployeeList = createAsyncThunk('fetchEmployeeList', async () => {
    try {
      
      const response = await api.get('/employees');
      return response.data.result

    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  })


  const initialState: Employee = {
    result: '',
  }
  
  export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchEmployeeList.fulfilled, (state, action: PayloadAction<string>) => {
          state.result = action.payload
        })
        .addCase(fetchEmployeeList.rejected, (state) => {
          state.result = ''
        })
    },
  })

export const employeeSelector = (state: RootState) => state.employee
export default employeeSlice.reducer