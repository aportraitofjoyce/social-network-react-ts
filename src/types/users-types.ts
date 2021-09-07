export type UsersType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followLoader: string[]
}
export type UserType = {
    id: string
    name: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}