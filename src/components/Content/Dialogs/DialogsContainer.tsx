import {connect} from 'react-redux'
import {Dialogs} from './Dialogs'
import {StateType} from '../../../types/types'
import {sendMessage, updateMessage} from '../../../redux/actions/dialogs-actions'


const mapStateToProps = (state: StateType) => ({
    dataForMessages: state.dialogs.dataForMessages,
    textForNewMessage: state.dialogs.newMessage.message,
    dataForFriends: state.dialogs.dataForFriends
})

const mapDispatchToProps = {
    sendMessage,
    updateMessage
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)