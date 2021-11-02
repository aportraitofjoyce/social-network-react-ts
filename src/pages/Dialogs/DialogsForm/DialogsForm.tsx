import React from 'react'
import {SingleTextareaForm} from '../../../components/UI/Form/SingleTextareaForm/SingleTextareaForm'


type DialogsControlPropsType = {
    onSubmit: (message: string) => void
}

export const DialogsForm: React.FC<DialogsControlPropsType> = React.memo(props => {
    const {onSubmit} = props
    return <SingleTextareaForm onSubmit={onSubmit}/>
})