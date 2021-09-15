import s from '../Dialogs.module.css'
import React from 'react'
import {Friend} from './Friend/Friend'
import {DataForFriendsType} from '../../../../types/dialogs-types'

type FriendsContainerPropsType = {
    dataForFriends: DataForFriendsType[]
}

export const FriendsToChat: React.FC<FriendsContainerPropsType> = React.memo(props => {
    const {dataForFriends} = props

    const dialogWithFriend = dataForFriends.map(friend => <Friend key={friend.id}
                                                                  name={friend.name}/>)

    return (
        <div className={s.friendsContainer}>
            {dialogWithFriend}
        </div>
    )
})

