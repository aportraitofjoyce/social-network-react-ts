import React, {FC, memo} from 'react'
import {useField} from 'formik'
import s from '../Form.module.css'
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material'

type FormSelectProps = {
    label: string
    name: string
    id?: string
    options: OptionsForSelect[]
}

export type OptionsForSelect = {
    value: string
    name: string
}

export const FormSelect: FC<FormSelectProps> = memo(({label, options, ...props}) => {
    const [field, meta] = useField(props)
    const mappedOptions = options.map(i => <MenuItem key={i.value} value={i.value}>{i.name}</MenuItem>)

    return (
        <div className={s.formField}>
            <FormControl fullWidth>
                <InputLabel id={`${label}LabelName`}>{label}</InputLabel>

                <Select {...field} {...props}
                        labelId={`${label}LabelName`}
                        id={`${label}SelectForm`}
                        label={label}>
                    {mappedOptions}
                </Select>

                {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
            </FormControl>


        </div>
    )
})