import React, {useCallback} from 'react'
import {Link} from 'react-router-dom'
import s from '../Users.module.css'
import {PATH} from '../../../../types/common-types'

type UserPropsType = {
    name: string
    avatarSmall: string
    id: string
    followed: boolean
    status: string
    followLoader: string[]
    followUser: (id: string, followed: boolean) => void
    isAuth: boolean
}

export const User: React.FC<UserPropsType> = React.memo(props => {
    const {name, avatarSmall, id, followed, status, followLoader, followUser, isAuth} = props

    const onFollowButtonClickHandler = useCallback(() => followUser(id, followed), [followUser, id, followed])

    return (
        <div key={props.name} className={s.userContainer}>
            <div className={s.avatarAndFollowContainer}>
                <Link to={`${PATH.PROFILE}/${id}`}>
                    <div className={s.avatar}>
                        <img
                            src={avatarSmall !== null
                                ? avatarSmall
                                : 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'}
                            alt={name}/>
                    </div>
                </Link>

                {!isAuth
                    ? <button disabled>Need to login</button>
                    : <button onClick={onFollowButtonClickHandler}
                              disabled={followLoader.includes(id)}>
                        {followed ? 'Unfollow' : 'Follow'}
                    </button>}

            </div>
            <div className={s.userInfoContainer}>
                <div className={s.name}>{name}</div>
                <div>{followed ? 'Вы уже дружите' : 'Ждет дружбы'}</div>
                <div>{status !== null ? status : 'Место для вашего статуса'}</div>
            </div>
        </div>
    )
})