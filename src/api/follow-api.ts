import {axiosInstance} from './axios-instance'
import {ServerResponse} from '../types/api-types'

export const followAPI = {
    follow: (id: number) => axiosInstance
        .post<ServerResponse>(`follow/${id}`)
        .then(response => response.data),

    unfollow: (id: number) => axiosInstance
        .delete<ServerResponse>(`follow/${id}`)
        .then(response => response.data)
}