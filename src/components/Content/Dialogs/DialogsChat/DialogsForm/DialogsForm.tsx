import s from '../../Dialogs.module.css'
import React from 'react'
import * as Yup from 'yup'
import {Form, Formik} from 'formik'
import {FormTextarea} from '../../../../UI/Form/FormTextarea/FormTextarea'

type DialogsControlPropsType = {
    onSubmit: (text: string) => void
}

export const DialogsForm: React.FC<DialogsControlPropsType> = ({onSubmit}) => {
    return (
        <div className={s.controlContainer}>
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
        </div>
    )
}