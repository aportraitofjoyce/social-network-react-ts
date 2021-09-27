import {axiosInstance} from './axios-instance'
import {UserProfilePhotosType, UserProfileType} from '../types/profile-types'
import {ResponseType} from '../types/api-types'

export const profileAPI = {
    getUserProfile: (id: number | null) => axiosInstance
        .get<UserProfileType>(`profile/${id}`)
        .then(response => response.data),

    getUserStatus: (id: number | null) => axiosInstance
        .get<string>(`profile/status/${id}`)
        .then(response => response.data),

    updateUserStatus: (status: string) => axiosInstance
        .put<ResponseType>(`profile/status`, {status})
        .then(response => response.data),

    updateUserAvatar: (avatarFile: File) => {
        const formData = new FormData()
        formData.append('image', avatarFile)

        return axiosInstance
            .put<ResponseType<{ photos: UserProfilePhotosType }>>(`profile/photo`, formData)
            .then(response => response.data)
    },

    updateUserDescription: (description: UserProfileType) => axiosInstance
        .put<ResponseType>(`profile`, description)
        .then(response => response.data)
}