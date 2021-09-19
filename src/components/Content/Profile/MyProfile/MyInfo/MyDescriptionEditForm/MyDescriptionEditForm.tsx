import React from 'react'
import {Form, Formik} from 'formik'
import {FormInput} from '../../../../../UI/Form/FormInput/FormInput'
import {FormCheckbox} from '../../../../../UI/Form/FormCheckbox/FormCheckbox'
import {FormTextarea} from '../../../../../UI/Form/FormTextarea/FormTextarea'
import {UserProfileType} from '../../../../../../types/profile-types'
import * as Yup from 'yup'

type MyDescriptionEditFormType = {
    onSubmit: (userDescription: any) => void
    userProfile: UserProfileType
}

export const MyDescriptionEditForm: React.FC<MyDescriptionEditFormType> = React.memo(props => {
    const {onSubmit, userProfile} = props

    const URLValidation = Yup.string()
        .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!')

    const contactsValidation = Object
        .keys(userProfile.contacts)
        .reduce((acc: any, value) => (acc[value] = URLValidation, acc), {})

    return <Formik
        initialValues={{
            fullName: userProfile.fullName,
            aboutMe: userProfile.aboutMe,
            lookingForAJob: userProfile.lookingForAJob,
            lookingForAJobDescription: userProfile.lookingForAJobDescription,
            contacts: userProfile.contacts
        }}

        validationSchema={Yup.object({
            fullName: Yup.string()
                .max(50, 'Must be 50 characters or less'),
            aboutMe: Yup.string()
                .max(300, 'Must be 300 characters or less'),
            lookingForAJobDescription: Yup.string()
                .max(300, 'Must be 300 characters or less'),
            contacts: Yup.object(contactsValidation)
        })}

        onSubmit={async (values, {setSubmitting}) => {
            await setSubmitting(true)
            await onSubmit(values)
        }}>

        {({isSubmitting}) => <Form className={'formikFormContainer'}>
            <h4>Main info</h4>

            <FormInput
                label='Full Name'
                name='fullName'
                type='text'
                placeholder='Type your full name...'/>

            <FormTextarea label={'About'}
                          name={'aboutMe'}
                          placeholder={'Say something about you...'}/>

            <FormCheckbox name='lookingForAJob'>Looking For A Job</FormCheckbox>


            <FormTextarea label={'Looking For A Job Description'}
                          name={'lookingForAJobDescription'}
                          placeholder={'lookingForAJobDescription'}/>

            <h4>Contacts</h4>
            {Object
                .keys(userProfile.contacts)
                .map(contact => <FormInput key={contact}
                                           label={`${contact}`}
                                           name={`contacts.${contact}`}
                                           type='text'
                                           placeholder={`${contact}`}/>)}

            <button type='submit' disabled={isSubmitting}>Save</button>
        </Form>}
    </Formik>
})