import {axiosInstance} from './axios-instance'
import {UserType} from '../redux/reducers/users-reducer'

type UsersResponseType = {
    totalCount: number
    error: string
    items: UserType[]
}

export const usersAPI = {
    requestUsers: (page: number, pageSize: number, term: string, followers: boolean | null) => axiosInstance
        .get<UsersResponseType>(`users?count=${pageSize}&page=${page}&term=${term}` + (followers === null ? '' : `&friend=${followers}`))
        .then(response => response.data)
}