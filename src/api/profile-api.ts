import {axiosInstance} from './axios-instance'

export const profileAPI = {
    getUserProfile: (id: number) => axiosInstance.get(`profile/${id}`),
    getUserStatus: (id: number) => axiosInstance.get(`profile/status/${id}`),
    updateUserStatus: (status: string) => axiosInstance.put(`profile/status`, {status})
}