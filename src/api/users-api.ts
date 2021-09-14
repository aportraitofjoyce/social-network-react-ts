import {axiosInstance} from './axios-instance'

export const usersAPI = {
    requestUsers: (page: number = 1, pageSize: number = 10) => axiosInstance
        .get(`users?count=${pageSize}&page=${page}`)
        .then(response => response.data)
}