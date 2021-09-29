import React from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'
import {TextField} from '@mui/material'

type FormTextareaPropsType = {
    label?: string
    name: string
    placeholder?: string
    id?: string
}

export const FormTextarea: React.FC<FormTextareaPropsType> = React.memo(({...props}) => {
    const [field, meta] = useField(props)

    return (
        <div className={s.formField}>
            <TextField {...field} {...props} multiline maxRows={4} error={!!meta.error}/>
            {meta.touched && meta.error && <div className={s.errorMessage}>{meta.error}</div>}
        </div>
    )
})