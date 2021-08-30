import {axiosInstance} from './axios-instance'

export const usersAPI = {
    getUsers: (pageSize: number = 10, currentPage: number = 1) => {
        return axiosInstance
            .get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    }
}