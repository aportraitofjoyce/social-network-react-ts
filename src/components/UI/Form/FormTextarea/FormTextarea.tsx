import React from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'

type FormTextareaPropsType = {
    label?: string
    name: string
    placeholder: string
    id?: string
}

export const FormTextarea: React.FC<FormTextareaPropsType> = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div className={s.formField}>

            <label htmlFor={props.id || props.name}>{label}</label>

            <textarea {...field} {...props} className={meta.error ? s.errorBorder : ''}/>

            {meta.touched && meta.error && <div className={s.errorMessage}>{meta.error}</div>}
        </div>
    )
}