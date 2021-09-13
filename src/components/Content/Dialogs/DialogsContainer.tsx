import React, {ComponentType} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Dialogs} from './Dialogs'
import {StateType} from '../../../types/common-types'
import {sendMessage} from '../../../redux/actions/dialogs-actions'
import {DialogsType} from '../../../types/dialogs-types'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from 'redux'

const DialogsContainer: React.FC = () => {
    const {dataForMessages, dataForFriends} = useSelector<StateType, DialogsType>(state => state.dialogs)
    const dispatch = useDispatch()

    const sendMessageHandler = (text: string) => dispatch(sendMessage(text))

    return <Dialogs dataForMessages={dataForMessages}
                    dataForFriends={dataForFriends}
                    sendMessage={sendMessageHandler}/>
}

export default compose<ComponentType>(withAuthRedirect)(DialogsContainer)