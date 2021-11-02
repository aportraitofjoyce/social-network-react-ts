import React, {useEffect, useMemo} from 'react'
import s from './Users.module.css'
import {User} from './User/User'
import {SearchParamsType, UserType} from '../../types/users-types'
import {UsersSearchForm} from './UsersSearchForm/UsersSearchForm'
import {PaginationControlled} from '../../components/UI/Pagination/PaginationControlled'

type UsersPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    changeCurrentPage: (page: number) => void
    followLoader: number[]
    followUser: (id: number, followed: boolean) => void
    isAuth: boolean
    searchUsers: (term: string, followers: boolean | null) => void
    searchParams: SearchParamsType
}

export const Users: React.FC<UsersPropsType> = React.memo(props => {
    const {
        usersData,
        pageSize,
        totalUsersCount,
        currentPage,
        changeCurrentPage,
        followLoader,
        followUser,
        isAuth,
        searchUsers,
        searchParams
    } = props

    let pagesCount = useMemo(() => Math.ceil(totalUsersCount / pageSize), [totalUsersCount, pageSize])

    const mappedUsers = usersData.map(user => <User key={user.name + user.id}
                                                    name={user.name}
                                                    avatar={user.photos.large}
                                                    id={user.id}
                                                    followed={user.followed}
                                                    status={user.status}
                                                    followLoader={followLoader}
                                                    followUser={followUser}
                                                    isAuth={isAuth}/>)

    return (
        <main className={s.wrapper}>
            <UsersSearchForm onSubmit={searchUsers}
                             searchParams={searchParams}/>

            <PaginationControlled pagesCount={pagesCount}
                                  currentPage={currentPage}
                                  onClick={changeCurrentPage}/>
            {mappedUsers}
        </main>
    )
})