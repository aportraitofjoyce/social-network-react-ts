import {axiosInstance} from './axios-instance'

export const authAPI = {
    checkAuth: () => {
        return axiosInstance.get('auth/me')
    }
}