import {axiosInstance} from './axios-instance'

export const profileAPI = {
    getUserProfile: (id: string) => {
        return axiosInstance.get(`profile/${id}`)
    }
}