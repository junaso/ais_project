import axios from 'axios'
import MockAdapter from "axios-mock-adapter"
import { API } from 'constant/api'
import { mockFormData } from 'mocks/employeeMock'

const ENV = process.env.NODE_ENV

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
})

if (ENV === 'development') {
    const mockAxios = new MockAdapter(api)
    mockAxios.onGet(API.PRACTICE_TEST).reply(200, mockFormData)
} 
