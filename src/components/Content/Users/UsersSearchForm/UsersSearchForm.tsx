import React from 'react'
import {Form, Formik} from 'formik'
import {FormInput} from '../../../UI/Form/FormInput/FormInput'
import {FormSelect} from '../../../UI/Form/FormSelect/FormSelect'
import {SearchParamsType} from '../../../../types/users-types'

type UsersSearchFormPropsType = {
    onSubmit: (term: string, followers: boolean | null) => void
    searchParams: SearchParamsType
}

// TODO: Form Submission
export const UsersSearchForm: React.FC<UsersSearchFormPropsType> = React.memo(props => {
    const {onSubmit, searchParams} = props

    const selectConverter = (value: string) => {
        switch (value) {
            case 'true':
                return true
            case 'false':
                return false
            default:
                return null
        }
    }

    return (
        <Formik
            enableReinitialize
            initialValues={{
                term: searchParams.term,
                followers: String(searchParams.followers),
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
                    <option value='null'>All</option>
                    <option value='true'>Followed</option>
                    <option value='false'>Unfollowed</option>
                </FormSelect>

                <button type='submit'>Search</button>
            </Form>}
        </Formik>
    )
})