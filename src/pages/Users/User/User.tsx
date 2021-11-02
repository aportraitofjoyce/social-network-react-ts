import React, {FC, memo, useCallback} from 'react'
import {Link} from 'react-router-dom'
import s from '../Users.module.css'
import {Button} from '@mui/material'
import {PATH} from '../../../routes/routes'
import {followUser, UserType} from '../../../redux/reducers/users-reducer'
import {useDispatch} from 'react-redux'

type UserProps = {
    user: UserType
    followLoader: number[]
    isAuth: boolean
}

export const User: FC<UserProps> = memo(({user, followLoader, isAuth}) => {
    const dispatch = useDispatch()

    const onFollowButtonClickHandler =
        useCallback(() => dispatch(followUser(user.id, user.followed)), [user.id, user.followed])

    return (
        <div className={s.userContainer}>
            <div className={s.avatarAndFollowContainer}>
                <Link to={`${PATH.PROFILE}/${user.id}`}>
                    <div className={s.avatar}>
                        <img
                            src={user.photos.large || 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'}
                            alt={user.name}/>
                    </div>
                </Link>

                {!isAuth
                    ? <Button disabled variant={'outlined'}>
                        Need to login
                    </Button>
                    : <Button onClick={onFollowButtonClickHandler}
                              disabled={followLoader.includes(user.id)}
                              variant={'outlined'}>
                        {user.followed ? 'Unfollow' : 'Follow'}
                    </Button>}
            </div>

            <div className={s.userInfoContainer}>
                <div className={s.name}>{user.name}</div>
                <div>{user.followed ? 'Вы уже дружите' : 'Ждет дружбы'}</div>
                <div>{user.status || 'Место для вашего статуса'}</div>
            </div>
        </div>
    )
})