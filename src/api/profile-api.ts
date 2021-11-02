import {axiosInstance} from './axios-instance'
import {ServerResponse} from '../types/api-types'
import {UserProfilePhotosType, UserProfileType} from '../redux/reducers/profile-reducer'

export const profileAPI = {
    getUserProfile: (id: number | null) => axiosInstance
        .get<UserProfileType>(`profile/${id}`)
        .then(response => response.data),

    getUserStatus: (id: number | null) => axiosInstance
        .get<string>(`profile/status/${id}`)
        .then(response => response.data),

    updateUserStatus: (status: string) => axiosInstance
        .put<ServerResponse>(`profile/status`, {status})
        .then(response => response.data),

    updateUserAvatar: (avatarFile: File) => {
        const formData = new FormData()
        formData.append('image', avatarFile)

        return axiosInstance
            .put<ServerResponse<{ photos: UserProfilePhotosType }>>(`profile/photo`, formData)
            .then(response => response.data)
    },

    updateUserDescription: (description: UserProfileType) => axiosInstance
        .put<ServerResponse>(`profile`, description)
        .then(response => response.data)
}