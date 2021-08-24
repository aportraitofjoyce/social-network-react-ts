import {connect} from 'react-redux'
import {Dialogs} from './Dialogs'
import {DispatchType, StateType} from '../../../types/types'
import {sendMessageAC, updateMessageTextAC} from '../../../redux/actions/dialogsActions'


const mapStateToProps = (state: StateType) => ({
    dataForMessages: state.dialogs.dataForMessages,
    textForNewMessage: state.dialogs.newMessage.message,
    dataForFriends: state.dialogs.dataForFriends
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    sendMessage: () => dispatch(sendMessageAC()),
    updateMessage: (text: string) => dispatch(updateMessageTextAC(text))
})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)