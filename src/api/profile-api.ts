import {axiosInstance} from './axios-instance'
import {UserProfileType} from '../types/profile-types'

export const profileAPI = {
    getUserProfile: (id: number | null) => axiosInstance.get(`profile/${id}`),
    getUserStatus: (id: number | null) => axiosInstance.get(`profile/status/${id}`),
    updateUserStatus: (status: string) => axiosInstance.put(`profile/status`, {status}),
    updateUserAvatar: (avatarFile: File) => {
        const formData = new FormData()
        formData.append('image', avatarFile)
        return axiosInstance.put(`profile/photo`, formData)
    },
    updateUserDescription: (description: UserProfileType) => axiosInstance.put(`profile`, description)
}