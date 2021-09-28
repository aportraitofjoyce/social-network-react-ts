import React from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'

type FormSelectPropsType = {
    label: string
    name: string
    id?: string
}

export const FormSelect: React.FC<FormSelectPropsType> = React.memo(({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <div className={s.formField}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}/>
            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
        </div>
    )
})