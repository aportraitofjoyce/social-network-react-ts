import React, {ComponentType, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Dialogs} from './Dialogs'
import {StateType} from '../../../types/common-types'
import {setMessages} from '../../../redux/actions/dialogs-actions'
import {DialogsType} from '../../../types/dialogs-types'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {webSocket} from '../../../api/web-socket'

const DialogsContainer: React.FC = React.memo(() => {
    const {messages} = useSelector<StateType, DialogsType>(state => state.dialogs)
    const dispatch = useDispatch()

    useEffect(() => {
        webSocket.addEventListener('message', (e) => {
            dispatch(setMessages(JSON.parse(e.data)))
        })

    }, [dispatch])

    const sendMessageHandler = (message: string) => webSocket.send(message)

    return <Dialogs messages={messages}
                    sendMessage={sendMessageHandler}/>
})

export default compose<ComponentType>(withAuthRedirect)(DialogsContainer)