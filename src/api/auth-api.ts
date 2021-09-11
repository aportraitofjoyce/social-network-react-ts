import {axiosInstance} from './axios-instance'

export const authAPI = {
    checkAuth: () => axiosInstance.get('auth/me'),

    login: (email: string, password: string, rememberMe: boolean) => {
        return axiosInstance.post('auth/login', {email, password, rememberMe})
    }
}