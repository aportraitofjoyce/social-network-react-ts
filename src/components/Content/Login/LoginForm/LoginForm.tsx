import React from 'react'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import {FormInput} from '../../../UI/Form/FormInput/FormInput'
import {FormCheckbox} from '../../../UI/Form/FormCheckbox/FormCheckbox'

type LoginFormPropsType = {
    onSubmit: (email: string, password: string, rememberMe: boolean, setStatus: any) => void
}

export const LoginForm: React.FC<LoginFormPropsType> = (props) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
            }}

            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}

            onSubmit={async (values, {setSubmitting, resetForm, setStatus}) => {
                await setSubmitting(true)
                // await resetForm()
                await props.onSubmit(values.email, values.password, values.rememberMe, setStatus)
            }}>

            {({isSubmitting, status}) => <Form className={'formikFormContainer'}>
                <FormInput
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Type your email...'/>

                <FormInput
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Type your password...'/>

                <FormCheckbox name='rememberMe'>Remember Me</FormCheckbox>

                <span style={{fontSize: 24, fontWeight: 'bold'}}>{status}</span>

                <button type='submit' disabled={isSubmitting}>Submit</button>
            </Form>}
        </Formik>
    )
}