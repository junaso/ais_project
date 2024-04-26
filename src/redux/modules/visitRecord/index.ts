import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'redux/store'

import type { VisitRecordList } from 'types/visitRecord'
import { api } from 'utill/axios'

  export const fetchVisitRecordList = createAsyncThunk('fetchVisitRecordList', async () => {
    try {
      
      const response = await api.get('/visitRecords')
      return response.data

    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  })


  const initialState: VisitRecordList = {
    visitRecordList : []
  }
  
  export const visitRecordSlice = createSlice({
    name: 'visitRecord',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchVisitRecordList.fulfilled, (state, action: PayloadAction<VisitRecordList>) => {
          state.visitRecordList = action.payload.visitRecordList
        })
        .addCase(fetchVisitRecordList.rejected, (state) => {
        state.visitRecordList = []
        })
    },
  })

export const visitRecordSelector = (state: RootState) => state.visitRecord
export default visitRecordSlice.reducer
