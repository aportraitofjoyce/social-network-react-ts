import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {Dialogs} from './Dialogs'
import {StateType} from '../../../types/common-types'
import {sendMessage} from '../../../redux/actions/dialogs-actions'
import {DataForFriendsType, MessagesDataType} from '../../../types/dialogs-types'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from 'redux'

type DialogsContainerPropsType = {
    dataForMessages: MessagesDataType[]
    sendMessage: (text: string) => void
    dataForFriends: DataForFriendsType[]
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    return <Dialogs {...props}/>
}

const mapStateToProps = (state: StateType) => ({
    dataForMessages: state.dialogs.dataForMessages,
    dataForFriends: state.dialogs.dataForFriends,
})

const mapDispatchToProps = {
    sendMessage
}

export default compose<ComponentType>
(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)
(DialogsContainer)