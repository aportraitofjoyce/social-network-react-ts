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
    const {dataForMessages, dataForFriends, sendMessage} = props

    return (
        <main className={s.wrapper}>
            <FriendsToChat dataForFriends={dataForFriends}/>
            <DialogsChat
                dataForMessages={dataForMessages}
                sendMessage={sendMessage}/>
        </main>
    )
}