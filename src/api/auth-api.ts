import {axiosInstance} from './axios-instance'

export const authAPI = {
    checkAuth: () => axiosInstance.get('auth/me')
}