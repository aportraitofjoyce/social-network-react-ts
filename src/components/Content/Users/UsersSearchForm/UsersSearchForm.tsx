import React from 'react'
import {Form, Formik} from 'formik'
import {FormInput} from '../../../UI/Form/FormInput/FormInput'
import {FormSelect} from '../../../UI/Form/FormSelect/FormSelect'

type UsersSearchFormPropsType = {
    onSubmit: (term: string, followers: boolean | null) => void
}

// TODO: Form Submission
export const UsersSearchForm: React.FC<UsersSearchFormPropsType> = React.memo(props => {
    const {onSubmit} = props

    const selectConverter = (value: string) => {
        switch (value) {
            case 'followed':
                return true
            case 'unfollowed':
                return false
            default:
                return null
        }
    }

    return (
        <Formik
            initialValues={{
                term: '',
                followers: '',
            }}

            onSubmit={(values) => {
                onSubmit(values.term, selectConverter(values.followers))
            }}>

            {() => <Form className={'formikFormContainer'}>
                <FormInput
                    label='Search by Name'
                    name='term'
                    type='text'
                    placeholder='Type users name...'/>

                <FormSelect label={'Followers'}
                            name={'followers'}>
                    <option value=''>All</option>
                    <option value='followed'>Followed</option>
                    <option value='unfollowed'>Unfollowed</option>
                </FormSelect>

                <button type='submit'>Search</button>
            </Form>}
        </Formik>
    )
})