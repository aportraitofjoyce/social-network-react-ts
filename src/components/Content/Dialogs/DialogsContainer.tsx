import React from 'react'
import {connect} from 'react-redux'
import {Dialogs} from './Dialogs'
import {PATH, StateType} from '../../../types/common-types'
import {sendMessage, updateMessage} from '../../../redux/actions/dialogs-actions'
import {DataForFriendsType, MessagesDataType} from '../../../types/dialogs-types'
import {Redirect} from 'react-router-dom'

type DialogsContainerPropsType = {
    dataForMessages: MessagesDataType[]
    sendMessage: () => void
    updateMessage: (text: string) => void
    textForNewMessage: string
    dataForFriends: DataForFriendsType[]
    isAuth: boolean
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    if (!props.isAuth) return <Redirect to={PATH.LOGIN}/>

    return (
        <Dialogs {...props}/>
    )
}

const mapStateToProps = (state: StateType) => ({
    dataForMessages: state.dialogs.dataForMessages,
    textForNewMessage: state.dialogs.newMessage.message,
    dataForFriends: state.dialogs.dataForFriends,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    sendMessage,
    updateMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer)