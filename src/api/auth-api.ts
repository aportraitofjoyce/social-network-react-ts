import {axiosInstance} from './axios-instance'
import {ServerResponse, ResultCodeForCaptcha, ResultCodes} from '../types/api-types'

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
        .get<ServerResponse<CheckAuthDataResponseType>>('auth/me')
        .then(response => response.data),

    login: (email: string, password: string, rememberMe: boolean, captcha: string) => axiosInstance
        .post<ServerResponse<LoginDataResponseType, ResultCodes & ResultCodeForCaptcha>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        })
        .then(response => response.data),

    logout: () => axiosInstance
        .delete<ServerResponse>('auth/login')
        .then(response => response.data)
}