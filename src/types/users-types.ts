export type UsersType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followLoader: number[]
    search: SearchParamsType
}

export type SearchParamsType = {
    term: string
    followers: boolean | null
}

export type UserType = {
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}