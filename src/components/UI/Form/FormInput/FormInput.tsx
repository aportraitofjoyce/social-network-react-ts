import React, {FC, memo} from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'
import {TextField} from '@mui/material'

type FormInputProps = {
    label: string
    name: string
    type?: 'text' | 'email' | 'password'
    id?: string
}

export const FormInput: FC<FormInputProps> = memo(({...props}) => {
    const [field, meta] = useField(props)

    return (
        <div className={s.formField}>
            <TextField {...field} {...props} variant='outlined' error={!!meta.error}/>
            {meta.touched && meta.error && <div className={s.errorMessage}>{meta.error}</div>}
        </div>
    )
})