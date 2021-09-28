import React from 'react'
import s from './Users.module.css'
import {User} from './User/User'
import {UserType} from '../../../types/users-types'
import {Pagination} from '../../UI/Pagination/Pagination'
import {UsersSearchForm} from './UsersSearchForm/UsersSearchForm'

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
        searchUsers
    } = props

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
            <UsersSearchForm onSubmit={searchUsers}/>
            <Pagination totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        portionSize={25}
                        onClick={changeCurrentPage}/>
            {mappedUsers}
        </main>
    )
})