import React from 'react'
import s from './Users.module.css'
import {UserType} from '../../../types/types'
import {User} from './User/User'

type UsersPropsType = {
    usersData: UserType[]
    follow: (id: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPaginationPageClickHandler: (page: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) - 500
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <main className={s.wrapper}>
            {props.usersData.map(user => <User key={user.name + user.id}
                                               name={user.name}
                                               avatarSmall={user.photos.small}
                                               id={user.id}
                                               followed={user.followed}
                                               status={user.status}
                                               follow={() => props.follow(user.id)}/>
            )}

            <div className={s.paginationContainer}>
                {pages.map(p => (
                    <span className={props.currentPage === p ? s.currentPage : ''}
                          key={p}
                          onClick={() => props.onPaginationPageClickHandler(p)}>
                                {p}
                            </span>
                ))}
            </div>
        </main>
    )
}