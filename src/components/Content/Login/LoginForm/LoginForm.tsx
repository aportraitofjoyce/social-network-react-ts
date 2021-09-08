import React from 'react'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import {FormInput} from '../../../UI/Form/FormInput/FormInput'
import {FormCheckbox} from '../../../UI/Form/FormCheckbox/FormCheckbox'


export const LoginForm = () => {
    return <Formik
        initialValues={{
            login: '',
            password: '',
            email: '',
            rememberMe: false,
        }}

        validationSchema={Yup.object({
            login: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            rememberMe: Yup.boolean()
                .required('Required')
                .oneOf([true], 'You must accept the terms and conditions.'),
        })}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
            }, 400)
        }}
    >
        <Form className={'formikFormContainer'}>
            <FormInput
                label='First Name'
                name='login'
                type='text'
                placeholder='Type your login...'/>

            <FormInput
                label='Password'
                name='password'
                type='password'
                placeholder='Type your password...'/>

            <FormInput
                label='Email Address'
                name='email'
                type='email'
                placeholder='Type your email...'/>

            <FormCheckbox name='rememberMe'>
                Remember Me
            </FormCheckbox>

            <button type='submit'>Submit</button>
        </Form>
    </Formik>
}