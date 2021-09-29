import React from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'
import {TextField} from '@mui/material'

type FormInputPropsType = {
    label: string
    name: string
    type?: 'text' | 'email' | 'password'
    id?: string
}

export const FormInput: React.FC<FormInputPropsType> = React.memo(({...props}) => {
    const [field, meta] = useField(props)

    return (
        <div className={s.formField}>
            <TextField {...field} {...props} variant='outlined' error={!!meta.error}/>
            {meta.touched && meta.error && <div className={s.errorMessage}>{meta.error}</div>}
        </div>
    )
})