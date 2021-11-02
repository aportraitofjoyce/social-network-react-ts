import React, {FC, memo} from 'react'
import {SingleTextareaForm} from '../../../components/UI/Form/SingleTextareaForm/SingleTextareaForm'
import {webSocket} from '../../../api/web-socket'

export const DialogsForm: FC = memo(() => {
    const onSubmit = (message: string) => webSocket.send(message)

    return <SingleTextareaForm onSubmit={onSubmit}/>
})