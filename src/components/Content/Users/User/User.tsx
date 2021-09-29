import React, {useCallback} from 'react'
import {Link} from 'react-router-dom'
import s from '../Users.module.css'
import {PATH} from '../../../../types/common-types'
import {Button} from '@mui/material'

type UserPropsType = {
    name: string
    avatar: string
    id: number
    followed: boolean
    status: string
    followLoader: number[]
    followUser: (id: number, followed: boolean) => void
    isAuth: boolean
}

export const User: React.FC<UserPropsType> = React.memo(props => {
    const {name, avatar, id, followed, status, followLoader, followUser, isAuth} = props

    const onFollowButtonClickHandler = useCallback(() => followUser(id, followed), [followUser, id, followed])

    return (
        <div key={props.name} className={s.userContainer}>
            <div className={s.avatarAndFollowContainer}>
                <Link to={`${PATH.PROFILE}/${id}`}>
                    <div className={s.avatar}>
                        <img
                            src={avatar || 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'}
                            alt={name}/>
                    </div>
                </Link>

                {!isAuth
                    ? <Button disabled variant={'outlined'}>
                        Need to login
                    </Button>

                    : <Button onClick={onFollowButtonClickHandler}
                              disabled={followLoader.includes(id)}
                              variant={'outlined'}>
                        {followed ? 'Unfollow' : 'Follow'}
                    </Button>}
            </div>

            <div className={s.userInfoContainer}>
                <div className={s.name}>{name}</div>
                <div>{followed ? 'Вы уже дружите' : 'Ждет дружбы'}</div>
                <div>{status || 'Место для вашего статуса'}</div>
            </div>
        </div>
    )
})