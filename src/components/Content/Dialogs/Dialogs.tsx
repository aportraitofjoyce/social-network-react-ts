import React from 'react'
import s from './Dialogs.module.css'
import {FriendsToChat} from './FriendsToChat/FriendsToChat'
import {DialogsChat} from './DialogsChat/DialogsChat'
import {DataForFriendsType, MessagesDataType} from '../../../types/dialogs-types'

type DialogsPropsType = {
    dataForMessages: MessagesDataType[]
    sendMessage: (text: string) => void
    dataForFriends: DataForFriendsType[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <main className={s.wrapper}>
            <FriendsToChat dataForFriends={props.dataForFriends}/>
            <DialogsChat
                dataForMessages={props.dataForMessages}
                sendMessage={props.sendMessage}/>
        </main>
    )
}