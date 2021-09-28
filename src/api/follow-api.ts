import {axiosInstance} from './axios-instance'
import {ResponseType} from '../types/api-types'

export const followAPI = {
    follow: (id: number) => axiosInstance
        .post<ResponseType>(`follow/${id}`)
        .then(response => response.data),

    unfollow: (id: number) => axiosInstance
        .delete<ResponseType>(`follow/${id}`)
        .then(response => response.data)
}