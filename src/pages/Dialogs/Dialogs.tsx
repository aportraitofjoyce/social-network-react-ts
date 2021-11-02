import React, {useEffect} from 'react'
import {Messages} from './Messages/Messages'
import {DialogsForm} from './DialogsForm/DialogsForm'
import {setMessages} from '../../redux/reducers/dialogs-reducer'
import {useDispatch} from 'react-redux'
import {webSocket} from '../../api/web-socket'
import {useAppSelector} from '../../hooks/hooks'
import {Redirect} from 'react-router-dom'
import {PATH} from '../../routes/routes'

const Dialogs: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)

    useEffect(() => {
        webSocket.addEventListener('message', (e) => {
            dispatch(setMessages(JSON.parse(e.data)))
        })
    }, [dispatch])

    if (!isAuth) return <Redirect to={PATH.LOGIN}/>

    return (
        <main>
            <Messages/>
            <DialogsForm/>
        </main>
    )
})

export default Dialogs