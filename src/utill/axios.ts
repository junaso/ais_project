import axios from 'axios'
import MockAdapter from "axios-mock-adapter"
import { API } from 'constant/api'
import { mockFormData } from 'mocks/employeeMock'
import { visitRecordResponse } from 'mocks/registrationMock'

const ENV = process.env.NODE_ENV

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
})

if (ENV === 'development') {
    const mockAxios = new MockAdapter(api)
    mockAxios.onPost(API.VISIT_RECORD).reply(200, visitRecordResponse)
    mockAxios.onGet(API.EMPLOYEE_LIST).reply(200, mockFormData)
} 
