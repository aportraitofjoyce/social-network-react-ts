import React from 'react'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import {FormInput} from '../../../UI/Form/FormInput/FormInput'
import {FormCheckbox} from '../../../UI/Form/FormCheckbox/FormCheckbox'

type LoginFormPropsType = {
    onSubmit: (email: string, password: string, rememberMe: boolean) => void
}

export const LoginForm: React.FC<LoginFormPropsType> = (props) => {
    const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

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
                rememberMe: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.'),
            })}

            onSubmit={async (values, {setSubmitting, resetForm}) => {
                await sleep(100)
                await setSubmitting(true)
                await resetForm()
                await props.onSubmit(values.email, values.password, values.rememberMe)
                alert(JSON.stringify(values, null, 2))
            }}>

            {({isSubmitting}) => <Form className={'formikFormContainer'}>
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

                <button type='submit' disabled={isSubmitting}>Submit</button>
            </Form>}
        </Formik>
    )
}