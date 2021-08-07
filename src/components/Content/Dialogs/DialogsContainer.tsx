import {sendMessageAC, updateMessageTextAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {DispatchType, StateType} from "../../../redux/store";

const mapStateToProps = (state: StateType) => ({
    dataForMessages: state.dialogs.dataForMessages,
    textForNewMessage: state.dialogs.newMessage.message,
    dataForFriends: state.dialogs.dataForFriends
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    sendMessage: () => {
        dispatch(sendMessageAC())
        dispatch(updateMessageTextAC(''))
    },
    updateMessage: (text: string) => {
        dispatch(updateMessageTextAC(text))
    }
})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)