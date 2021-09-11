import s from '../MyPosts.module.css'
import React from 'react'
import {FormTextarea} from '../../../../UI/Form/FormTextarea/FormTextarea'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'

type PostControlPropsType = {
    onSubmit: (text: string) => void
}

export const PostsForm: React.FC<PostControlPropsType> = ({onSubmit}) => {
    return (
        <div className={s.control_wrapper}>
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
                                  placeholder='Type your message...' />
                    <button type={'submit'} disabled={isSubmitting}>Send</button>
                </Form>}
            </Formik>
        </div>
    )
}