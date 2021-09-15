import React from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'

type FormInputPropsType = {
    label: string
    name: string
    type: string
    placeholder: string
    id?: string
}

export const FormInput: React.FC<FormInputPropsType> = React.memo(({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <div className={s.formField}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} className={meta.error ? s.errorBorder : ''}/>
            {meta.touched && meta.error && <div className={s.errorMessage}>{meta.error}</div>}
        </div>
    )
})