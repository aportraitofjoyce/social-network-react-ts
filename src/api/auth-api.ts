import {axiosInstance} from './axios-instance'
import {ResponseType} from '../types/api-types'

type CheckAuthDataResponseType = {
    id: number
    email: string
    login: string
}

type LoginDataResponseType = {
    userId: number
}

export const authAPI = {
    checkAuth: () => axiosInstance
        .get<ResponseType<CheckAuthDataResponseType>>('auth/me')
        .then(response => response.data),

    login: (email: string, password: string, rememberMe: boolean, captcha: string) => axiosInstance
        .post<ResponseType<LoginDataResponseType>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        })
        .then(response => response.data),

    logout: () => axiosInstance
        .delete<ResponseType>('auth/login')
        .then(response => response.data)
}