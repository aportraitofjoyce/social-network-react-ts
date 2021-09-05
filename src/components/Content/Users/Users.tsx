import React from 'react'
import s from './Users.module.css'
import {User} from './User/User'
import {UserType} from '../../../types/users-types'
import {Pagination} from '../../UI/Pagination/Pagination'

type UsersPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPaginationPageClickHandler: (page: number) => void
    followLoader: string[]
    followUser: (id: string, followed: boolean) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 20
    let pagesArray: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }

    return (
        <main className={s.wrapper}>
            {props.usersData.map(user => <User key={user.name + user.id}
                                               name={user.name}
                                               avatarSmall={user.photos.small}
                                               id={user.id}
                                               followed={user.followed}
                                               status={user.status}
                                               followLoader={props.followLoader}
                                               followUser={props.followUser}/>
            )}

            <Pagination pages={pagesArray}
                        currentPage={props.currentPage}
                        onClick={props.onPaginationPageClickHandler}/>
        </main>
    )
}