import React from 'react'
import {connect} from 'react-redux'
import {Dialogs} from './Dialogs'
import {StateType} from '../../../types/common-types'
import {sendMessage, updateMessage} from '../../../redux/actions/dialogs-actions'
import {DataForFriendsType, MessagesDataType} from '../../../types/dialogs-types'
import {withAuthRedirectHOC} from '../../../hoc/WithAuthRedirectHOC'

type DialogsContainerPropsType = {
    dataForMessages: MessagesDataType[]
    sendMessage: () => void
    updateMessage: (text: string) => void
    textForNewMessage: string
    dataForFriends: DataForFriendsType[]
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    return (
        <Dialogs {...props}/>
    )
}

const mapStateToProps = (state: StateType) => ({
    dataForMessages: state.dialogs.dataForMessages,
    textForNewMessage: state.dialogs.newMessage.message,
    dataForFriends: state.dialogs.dataForFriends,
})

const mapDispatchToProps = {
    sendMessage,
    updateMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectHOC(DialogsContainer))