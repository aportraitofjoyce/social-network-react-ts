import React from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'

type PropsType = {
    label: string
    name: string
    type: string
    placeholder: string
    id?: string
}

export const FormInput: React.FC<PropsType> = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div className={s.formField}>

            <label htmlFor={props.id || props.name}>{label}</label>

            <input {...field} {...props}/>

            {meta.touched && meta.error && <div className={s.errorMessage}>{meta.error}</div>}
        </div>
    )
}