import {axiosInstance} from './axios-instance'

export const followAPI = {
    follow: (id: string) => axiosInstance
        .post(`follow/${id}`)
        .then(response => {
                return response.data.responseCode === 0 ? response.data : null
            }
        ),

    unfollow: (id: string) => axiosInstance
        .delete(`follow/${id}`)
        .then(response => {
                return response.data.responseCode === 0 ? response.data : null
            }
        )
}