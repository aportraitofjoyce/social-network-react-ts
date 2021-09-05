import s from '../Dialogs.module.css'
import React from 'react'
import {Friend} from './Friend/Friend'
import {DataForFriendsType} from '../../../../types/dialogs-types'

type FriendsContainerPropsType = {
    dataForFriends: DataForFriendsType[]
}

export const FriendsToChat: React.FC<FriendsContainerPropsType> = (props) => {
    const dialogWithFriend = props.dataForFriends.map((item) => <Friend key={item.id} id={item.id} name={item.name}/>)

    return (
        <div className={s.friendsContainer}>
            {dialogWithFriend}
        </div>
    )
}

