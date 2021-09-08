import React from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'

type FormCheckboxPropsType = {
    name: string
}

export const FormCheckbox: React.FC<FormCheckboxPropsType> = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'})
    return (
        <div className={s.formFieldCheckbox}>

            <label>
                <input type='checkbox' {...field} {...props}/>
                {children}
            </label>

            {meta.touched && meta.error && <div className={s.errorMessage}>{meta.error}</div>}
        </div>
    )
}