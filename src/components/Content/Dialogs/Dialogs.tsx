import React from "react";
import s from './Dialogs.module.css'
import {FriendsContainer} from "./FriendsContainer/FriendsContainer";
import {DialogsContainer} from "./DialogsContainer/DialogsContainer";

const dataForFriends: Array<DataForFriendsType> = [
    {id: 1, name: 'Me'},
    {id: 2, name: 'Maxim'},
    {id: 3, name: 'Andrei'},
    {id: 4, name: 'Yura'}
]

export type DataForFriendsType = {
    id: number
    name: string
}

const messagesData: Array<MessagesDataType> = [
    {id: 1, from: 'Me', message: 'А собаку выебал бы?'},
    {id: 2, from: 'Andrei', message: 'Ну еще бы))))'},
    {id: 3, from: 'Me', message: 'Крассссиво!'},
    {id: 4, from: 'Me', message: 'А собаку выебал бы?'},
    {id: 5, from: 'Andrei', message: 'Ну еще бы))))'},
    {id: 6, from: 'Me', message: 'Крассссиво!'},
    {id: 7, from: 'Me', message: 'А собаку выебал бы?'},
    {id: 8, from: 'Andrei', message: 'Ну еще бы))))'},
    {id: 9, from: 'Me', message: 'Крассссиво!'},
]

export type MessagesDataType = {
    id: number
    from: string
    message: string
}

export function Dialogs() {
    return (
        <main className={s.wrapper}>
            <FriendsContainer data={dataForFriends}/>
            <DialogsContainer data={messagesData}/>
        </main>
    )
}