import React from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material'

type FormSelectPropsType = {
    label: string
    name: string
    id?: string
    options: OptionsForSelectType[]
}

export type OptionsForSelectType = {
    value: string
    name: string
}

export const FormSelect: React.FC<FormSelectPropsType> = React.memo(({label, options, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <div className={s.formField}>
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>{label}</InputLabel>

                <Select {...field} {...props}
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        label={label}>

                    {options.map(i => <MenuItem key={i.value} value={i.value}>{i.name}</MenuItem>)}
                </Select>

                {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
            </FormControl>


        </div>
    )
})