import React from 'react'
import * as Yup from 'yup'
import {Form, Formik} from 'formik'
import {FormTextarea} from '../FormTextarea/FormTextarea'

type SingleTextareaForm = {
    onSubmit: (text: string) => void
}

export const SingleTextareaForm: React.FC<SingleTextareaForm> = ({onSubmit}) => {
    return (
        <Formik
            initialValues={{textarea: ''}}

            validationSchema={Yup.object({
                textarea: Yup.string()
                    .required('Required'),
            })}

            onSubmit={async (values, {setSubmitting, resetForm}) => {
                await setSubmitting(true)
                await resetForm()
                await onSubmit(values.textarea)
            }}>

            {({isSubmitting}) => <Form>
                <FormTextarea name='textarea'
                              placeholder='Type your message...'/>
                <button type={'submit'} disabled={isSubmitting}>Send</button>
            </Form>}
        </Formik>
    )
}