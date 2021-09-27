import {axiosInstance} from './axios-instance'
import {UserType} from '../types/users-types'

type UsersResponseType = {
    totalCount: number
    error: string
    items: UserType[]
}

export const usersAPI = {
    requestUsers: (page: number = 1, pageSize: number = 10) => axiosInstance
        .get<UsersResponseType>(`users?count=${pageSize}&page=${page}`)
        .then(response => response.data)
}