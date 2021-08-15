import React from 'react'
import {UserType} from '../../../types/types'
import s from './Users.module.css'
import axios from 'axios'

type UsersPropsType = {
    usersData: UserType[]
    followed: (id: string) => void
    setUsers: (users: UserType[]) => void
}

export class UsersCC extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props)
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const users = this.props.usersData.map(user => (
            <div key={user.name} className={s.userContainer}>

                <div className={s.avatarAndFollowContainer}>
                    <div className={s.avatar}>
                        <img
                            src={user.photos.small !== null
                                ? user.photos.small
                                : 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'}
                            alt={user.name}/>
                    </div>
                    <button onClick={() => this.props.followed(user.id)}>
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

        return (
            <main className={s.wrapper}>
                {users}
            </main>
        )
    }
}


export const UsersFC: React.FC<UsersPropsType> = (props) => {

    const getUsers = () => {
        if (!props.usersData.length) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }

    const users = props.usersData.map(user => (
        <div key={user.name} className={s.userContainer}>

            <div className={s.avatarAndFollowContainer}>
                <div className={s.avatar}>
                    <img
                        src={user.photos.small !== null
                            ? user.photos.small
                            : 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'}
                        alt={user.name}/>
                </div>
                <button onClick={() => props.followed(user.id)}>
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

    return (
        <main className={s.wrapper}>
            <button onClick={getUsers}>Get users</button>
            {users}
        </main>
    )
}
