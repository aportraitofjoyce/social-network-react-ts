import React from 'react'
import {Form, Formik} from 'formik'
import {FormInput} from '../../../../../UI/Form/FormInput/FormInput'
import {FormCheckbox} from '../../../../../UI/Form/FormCheckbox/FormCheckbox'
import {FormTextarea} from '../../../../../UI/Form/FormTextarea/FormTextarea'
import {UserProfileType} from '../../../../../../types/profile-types'

type MyDescriptionEditFormType = {
    onSubmit: (userDescription: any) => void
    userProfile: UserProfileType
}

export const MyDescriptionEditForm: React.FC<MyDescriptionEditFormType> = React.memo(props => {
    const {onSubmit, userProfile} = props

    return <Formik
        initialValues={{
            fullName: userProfile.fullName,
            aboutMe: userProfile.aboutMe,
            lookingForAJob: userProfile.lookingForAJob,
            lookingForAJobDescription: userProfile.lookingForAJobDescription,
            contacts: userProfile.contacts
        }}

        onSubmit={async (values, {setSubmitting}) => {
            console.log(values)
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