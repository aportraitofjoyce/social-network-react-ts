import React from 'react'
import {Link} from 'react-router-dom'
import s from '../Users.module.css'
import {followAPI} from '../../../../api/follow-api'

type UserPropsType = {
    name: string
    avatarSmall: string
    id: string
    followed: boolean
    status: string
    follow: (id: string) => void
}

export const User: React.FC<UserPropsType> = (props) => {
    const onButtonClickHandler = () => {
        if (!props.followed) {
            followAPI.follow(props.id).then(() => {
                props.follow(props.id)
            })
        }

        if (props.followed) {
            followAPI.unfollow(props.id).then(() => {
                props.follow(props.id)
            })
        }
    }

    return (
        <div key={props.name} className={s.userContainer}>
            <div className={s.avatarAndFollowContainer}>
                <Link to={`/profile/${props.id}`}>
                    <div className={s.avatar}>
                        <img
                            src={props.avatarSmall !== null
                                ? props.avatarSmall
                                : 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'}
                            alt={props.name}/>
                    </div>
                </Link>

                <button onClick={onButtonClickHandler}>
                    {props.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>

            <div className={s.userInfoContainer}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div>
                    {props.followed ? 'Вы уже дружите' : 'Ждет дружбы'}
                </div>
                <div>
                    {props.status !== null ? props.status : 'Место для вашего статуса'}
                </div>
            </div>

        </div>
    )
}