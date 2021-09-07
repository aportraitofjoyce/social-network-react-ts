import {axiosInstance} from './axios-instance'

export const profileAPI = {
    getUserProfile: (id: number = 18964) => axiosInstance.get(`profile/${id}`),
    getUserStatus: (id: number = 18964) => axiosInstance.get(`profile/status/${id}`),
    updateUserStatus: (status: string) => axiosInstance.put(`profile/status`, {status})
}