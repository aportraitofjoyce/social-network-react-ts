import React, {useMemo} from 'react'
import s from './Users.module.css'
import {User} from './User/User'
import {UserType} from '../../../types/users-types'
import {Pagination} from '../../UI/Pagination/Pagination'

type UsersPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    changeCurrentPage: (page: number) => void
    followLoader: string[]
    followUser: (id: string, followed: boolean) => void
    isAuth: boolean
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
        isAuth
    } = props

    const paginationPages = useMemo(() => {
        let pagesCount = Math.ceil(totalUsersCount / pageSize) / 20
        let pagesArray: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesArray.push(i)
        }
        return pagesArray
    }, [pageSize, totalUsersCount])

    const mappedUsers = usersData.map(user => <User key={user.name + user.id}
                                                    name={user.name}
                                                    avatarSmall={user.photos.small}
                                                    id={user.id}
                                                    followed={user.followed}
                                                    status={user.status}
                                                    followLoader={followLoader}
                                                    followUser={followUser}
                                                    isAuth={isAuth}/>)

    return (
        <main className={s.wrapper}>
            <Pagination pages={paginationPages}
                        currentPage={currentPage}
                        onClick={changeCurrentPage}/>
            {mappedUsers}
        </main>
    )
})