import React, {ComponentType, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Dialogs} from './Dialogs'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {webSocket} from '../../api/web-socket'
import {RootState} from '../../redux/store'
import {DialogsType, setMessages} from '../../redux/reducers/dialogs-reducer'

const DialogsContainer: React.FC = React.memo(() => {
    const {messages} = useSelector<RootState, DialogsType>(state => state.dialogs)
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