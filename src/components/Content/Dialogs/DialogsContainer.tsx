import React, {ComponentType, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Dialogs} from './Dialogs'
import {StateType} from '../../../types/common-types'
import {sendMessage} from '../../../redux/actions/dialogs-actions'
import {DialogsType} from '../../../types/dialogs-types'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from 'redux'

const DialogsContainer: React.FC = React.memo(() => {
    const {dataForMessages, dataForFriends} = useSelector<StateType, DialogsType>(state => state.dialogs)
    const dispatch = useDispatch()

    const sendMessageHandler = useCallback((text: string) => dispatch(sendMessage(text)), [dispatch])

    return <Dialogs dataForMessages={dataForMessages}
                    dataForFriends={dataForFriends}
                    sendMessage={sendMessageHandler}/>
})

export default compose<ComponentType>(withAuthRedirect)(DialogsContainer)