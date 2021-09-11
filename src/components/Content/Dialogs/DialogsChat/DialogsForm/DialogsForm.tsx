import s from '../../Dialogs.module.css'
import React from 'react'
import {SingleTextareaForm} from '../../../../UI/Form/SingleTextareaForm/SingleTextareaForm'

type DialogsControlPropsType = {
    onSubmit: (text: string) => void
}

export const DialogsForm: React.FC<DialogsControlPropsType> = ({onSubmit}) => {
    return (
        <div className={s.controlContainer}>
            <SingleTextareaForm onSubmit={onSubmit}/>
        </div>
    )
}