import React, {FC, memo} from 'react'
import {Form, Formik} from 'formik'
import {FormInput} from '../../../components/UI/Form/FormInput/FormInput'
import {FormSelect, OptionsForSelect} from '../../../components/UI/Form/FormSelect/FormSelect'
import {Button} from '@mui/material'
import {SearchParamsType} from '../../../redux/reducers/users-reducer'

type UsersSearchFormProps = {
    onSubmit: (term: string, followers: boolean | null) => void
    searchParams: SearchParamsType
}

export const UsersSearchForm: FC<UsersSearchFormProps> = memo(({onSubmit, searchParams}) => {
    const optionsForSelect: OptionsForSelect[] = [
        {value: 'null', name: 'All'},
        {value: 'true', name: 'Followed'},
        {value: 'false', name: 'Unfollowed'}
    ]

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
                <FormInput label='Search by Name' name='term' type='text'/>

                <FormSelect label={'Followers'} name={'followers'} options={optionsForSelect}/>

                <Button type='submit' variant={'contained'}>Search</Button>
            </Form>}
        </Formik>
    )
})