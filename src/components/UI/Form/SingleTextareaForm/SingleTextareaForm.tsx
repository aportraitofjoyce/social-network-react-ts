import React from 'react'
import * as Yup from 'yup'
import {Form, Formik} from 'formik'
import {FormTextarea} from '../FormTextarea/FormTextarea'
import {Button} from '@mui/material'

type SingleTextareaFormPropsType = {
    onSubmit: (message: string) => void
}

export const SingleTextareaForm: React.FC<SingleTextareaFormPropsType> = React.memo(props => {
    const {onSubmit} = props

    return (
        <Formik
            initialValues={{textarea: ''}}

            validationSchema={Yup.object({
                textarea: Yup.string()
                    .required('Required'),
            })}

            onSubmit={(values, {resetForm, setSubmitting}) => {
                resetForm()
                onSubmit(values.textarea)
            }}>

            {({isSubmitting}) => <Form>
                <FormTextarea name='textarea' label={'Type your message'}/>

                <Button type={'submit'}
                        variant={'contained'}
                        disabled={isSubmitting}>
                    Send
                </Button>
            </Form>}
        </Formik>
    )
})