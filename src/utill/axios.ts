import axios from 'axios'
import MockAdapter from "axios-mock-adapter"
import { mockFormData } from 'mocks/employeeMock'
import { mockApiResponse, visitRecordmockData } from 'mocks/registrationMock'

const ENV = process.env.NODE_ENV

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
})

if (ENV === 'development') {
    const mockAxios = new MockAdapter(api)
    mockAxios.onGet("/employees").reply(200, mockFormData)
    mockAxios.onGet("/visitRecords").reply(200, visitRecordmockData)
    mockAxios.onPost("/visit-record").reply(200, mockApiResponse)
} 
