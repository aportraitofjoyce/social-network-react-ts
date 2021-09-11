import {v1} from 'uuid'
import {ActionsType} from '../../types/common-types'
import {DialogsType} from '../../types/dialogs-types'
import {DIALOGS_ACTIONS_TYPES} from '../actions/dialogs-actions'

const initialState: DialogsType = {
    dataForFriends: [
        {id: v1(), name: 'Me'},
        {id: v1(), name: 'Maxim'},
        {id: v1(), name: 'Andrei'},
        {id: v1(), name: 'Yura'}
    ],

    dataForMessages: [
        {id: v1(), from: 'Me', message: 'Привет, как дела?'},
        {id: v1(), from: 'Andrei', message: 'Ку-ку, отлично. А у тебя?'},
        {id: v1(), from: 'Me', message: 'Плохо, монитор из сервисного центре не отдают!'},
        {id: v1(), from: 'Me', message: 'Пользуются им уже дольше чем я'},
        {id: v1(), from: 'Andrei', message: 'Козлы'},
        {id: v1(), from: 'Me', message: 'Ага!'}
    ],
    newMessage: {
        id: v1(),
        from: 'Me',
        message: ''
    }
}

export const dialogsReducer = (state: DialogsType = initialState, action: ActionsType): DialogsType => {
    switch (action.type) {
        case DIALOGS_ACTIONS_TYPES.SEND_MESSAGE:
            return {
                ...state,
                dataForMessages: [...state.dataForMessages, {...state.newMessage, message: action.payload.text}],
            }
        default:
            return state
    }
}