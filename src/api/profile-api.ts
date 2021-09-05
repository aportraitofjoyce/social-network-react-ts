import {axiosInstance} from './axios-instance'

export const profileAPI = {
    getUserProfile: (id: string = '18964') => axiosInstance.get(`profile/${id}`)
}