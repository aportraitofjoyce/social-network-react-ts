import React, {useEffect} from 'react'
import {UserType} from '../../../types/types'
import s from './Users.module.css'
import {v1} from 'uuid'

type UsersPropsType = {
    usersData: UserType[]
    follow: (id: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    useEffect( () => props.setUsers([
        {
            id: v1(),
            name: 'Andrei Tretyakov',
            location: {
                country: 'Ukraine',
                city: 'Kiev'
            },
            avatar: 'https://9tailedkitsune.com/wp-content/uploads/2021/04/zero-two_-cute.jpg',
            status: 'LF DD 15+',
            follow: false
        },
        {
            id: v1(),
            name: 'Yura Kereichyk',
            location: {
                country: 'Japan',
                city: 'Tokio'
            },
            avatar: 'https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s900-c-k-c0x00ffffff-no-rj',
            status: 'It\'s a Guuuura',
            follow: false
        }
    ]), [])

    const users = props.usersData.map(user => (
        <div key={user.id} className={s.userContainer}>

            <div className={s.avatarAndFollowContainer}>
                <div className={s.avatar}>
                    <img src={user.avatar} alt={user.name}/>
                </div>
                <button onClick={() => props.follow(user.id)}>
                    {user.follow ? 'Unfollow' : 'Follow'}
                </button>
            </div>

            <div className={s.userInfoContainer}>
                <div className={s.nameAndLocationContainer}>
                    <span>
                        {user.name}
                    </span>
                    <span>
                        {user.location.country}/{user.location.city}
                    </span>
                </div>

                <div>
                    {user.status}
                </div>
            </div>

        </div>
    ))

    return (
        <main className={s.wrapper}>
            {users}
        </main>
    )
}