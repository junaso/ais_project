import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'redux/store'
import { API, apiPath } from 'constant/api'

import type { Employee, EmployeeList } from 'types/employee'
import { api } from 'utill/axios'

  export const fetchEmployeeList = createAsyncThunk('fetchEmployeeList', async () => {
    try {
      
      const response = await api.get('/employees');
      return response.data

    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  })


  const initialState: EmployeeList = {
    employeeList: []
  }
  
  export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchEmployeeList.fulfilled, (state, action: PayloadAction<EmployeeList>) => {
          state.employeeList = action.payload.employeeList
        })
        .addCase(fetchEmployeeList.rejected, (state) => {

          state.employeeList = []
        })
    },
  })

export const employeeSelector = (state: RootState) => state.employee
export default employeeSlice.reducer