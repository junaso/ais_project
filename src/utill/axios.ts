import axios from 'axios'
import MockAdapter from "axios-mock-adapter"
import { API } from 'constant/api'
import { mockFormData } from 'mocks/employeeMock'
import { loginMock } from 'mocks/loginMock'
import { visitRecordResponse } from 'mocks/registrationMock'

const ENV = process.env.NODE_ENV

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
    withCredentials: true,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

if (ENV === 'development') {
    const mockAxios = new MockAdapter(api)
    mockAxios.onPost(API.VISIT_RECORD).reply(200, visitRecordResponse)
    mockAxios.onGet(API.EMPLOYEE_LIST).reply(200, mockFormData)
    mockAxios.onGet(API.LOGIN).reply(200, loginMock)
} 
