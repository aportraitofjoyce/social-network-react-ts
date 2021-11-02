import React from 'react'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import {FormInput} from '../../../components/UI/Form/FormInput/FormInput'
import {FormCheckbox} from '../../../components/UI/Form/FormCheckbox/FormCheckbox'
import {Button} from '@mui/material'

type LoginFormPropsType = {
    onSubmit: (email: string, password: string, rememberMe: boolean,
               setStatus: (status: string[]) => void, captcha: string) => void
    captchaURL: string
}

export const LoginForm: React.FC<LoginFormPropsType> = React.memo(props => {
    const {onSubmit, captchaURL} = props

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                captcha: ''
            }}

            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                /*captcha: Yup.string()
                    .required('Required'),*/
            })}

            onSubmit={(values, {resetForm, setStatus}) => {
                // resetForm()
                onSubmit(values.email, values.password, values.rememberMe, setStatus, values.captcha)
            }}>

            {({status}) => <Form className={'formikFormContainer'}>
                <FormInput label='Email' name='email' type={'email'}/>

                <FormInput label='Password' name='password' type='password'/>

                <FormCheckbox name='rememberMe' label={'Remember me'}/>

                <span style={{fontSize: 24, fontWeight: 'bold'}}>{status}</span>

                {captchaURL &&
				<div>
					<img src={captchaURL} alt={captchaURL}/>
					<FormInput label='Captcha' name='captcha' type='text'/>
				</div>}

                <Button type='submit' variant={'contained'}>Submit</Button>
            </Form>}
        </Formik>
    )
})