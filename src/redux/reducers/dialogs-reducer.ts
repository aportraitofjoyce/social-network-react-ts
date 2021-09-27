import {v1} from 'uuid'
import {DialogsType} from '../../types/dialogs-types'
import {DIALOGS_ACTIONS_TYPES, DialogsActionsType} from '../actions/dialogs-actions'

const initialState: DialogsType = {
    dataForFriends: [
        {id: v1(), name: 'Me'},
        {id: v1(), name: 'Maxim'},
        {id: v1(), name: 'Andrei'},
    ],

    dataForMessages: [
        {id: v1(), from: 'Me', message: 'Привет, как дела?'},
        {id: v1(), from: 'Andrei', message: 'Ку, отлично.'},
        {id: v1(), from: 'Me', message: 'Посмотрим вместе аниме?'},
        {id: v1(), from: 'Andrei', message: 'С удовольствием, прямо сейчас?'},
        {id: v1(), from: 'Me', message: 'Ага!'}
    ],
    newMessage: {
        id: v1(),
        from: 'Me',
        message: ''
    }
}

export const dialogsReducer = (state = initialState, action: DialogsActionsType): DialogsType => {
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