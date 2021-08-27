import React from 'react'
import s from './Users.module.css'
import {UserType} from '../../../types/types'

type UsersPropsType = {
    usersData: UserType[]
    follow: (id: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPaginationPageClickHandler: (page: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <main className={s.wrapper}>
            {
                props.usersData.map(user => (
                    <div key={user.name} className={s.userContainer}>

                        <div className={s.avatarAndFollowContainer}>
                            <div className={s.avatar}>
                                <img
                                    src={user.photos.small !== null
                                        ? user.photos.small
                                        : 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'}
                                    alt={user.name}/>
                            </div>
                            <button onClick={() => props.follow(user.id)}>
                                {user.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>

                        <div className={s.userInfoContainer}>
                            <div className={s.name}>
                                {user.name}
                            </div>
                            <div>
                                {user.followed ? 'Вы уже дружите' : 'Ждет дружбы'}
                            </div>
                            <div>
                                {user.status !== null ? user.status : 'Место для вашего статуса'}
                            </div>
                        </div>

                    </div>
                ))
            }
            <div className={s.paginationContainer}>
                {
                    pages.map(p => (
                        <span className={props.currentPage === p ? s.currentPage : ''}
                              key={p}
                              onClick={() => props.onPaginationPageClickHandler(p)}
                        >
                                {p}
                            </span>
                    ))
                }
            </div>
        </main>
    )
}