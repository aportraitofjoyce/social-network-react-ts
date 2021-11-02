import React, {FC, memo} from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'
import {Checkbox, FormControlLabel} from '@mui/material'

type FormCheckboxProps = {
    name: string
    label?: string
}

export const FormCheckbox: FC<FormCheckboxProps> = memo(({label, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'})

    return (
        <div className={s.formFieldCheckbox}>
            <FormControlLabel control={<Checkbox {...field} {...props}/>} label={label}/>
            {meta.touched && meta.error && <div className={s.errorMessage}>{meta.error}</div>}
        </div>
    )
})