import {axiosInstance} from './axios-instance'

export const profileAPI = {
    getUserProfile: (id: string) => axiosInstance.get(`profile/${id}`),
    getUserStatus: (id: string) => axiosInstance.get(`profile/status/${id}`),
    updateUserStatus: (status: string) => axiosInstance.put(`profile/status`, {status})
}