import {axiosInstance} from './axios-instance'

export const profileAPI = {
    getUserProfile: (id: number | null) => axiosInstance.get(`profile/${id}`),
    getUserStatus: (id: number | null) => axiosInstance.get(`profile/status/${id}`),
    updateUserStatus: (status: string) => axiosInstance.put(`profile/status`, {status}),
    updateUserAvatar: (avatarFile: File) => {
        const formData = new FormData()
        formData.append('image', avatarFile)
        return axiosInstance.put(`profile/photo`, formData)
    }
}