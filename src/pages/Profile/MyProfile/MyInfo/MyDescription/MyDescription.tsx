import React, {FC, memo} from 'react'
import s from '../../MyProfile.module.css'
import {MyContacts} from './MyContacts/MyContacts'
import {Button} from '@mui/material'
import {UserProfileContactsType, UserProfileType} from '../../../../../redux/reducers/profile-reducer'

type MyProfileDescriptionProps = {
    userProfile: UserProfileType
    isOwner: boolean
    onEditMode: () => void
}

export const MyDescription: FC<MyProfileDescriptionProps> = memo(({userProfile, isOwner, onEditMode}) => {
    const mappedContacts = Object.keys(userProfile.contacts)
        .map(contact => <MyContacts key={contact}
                                    title={contact}
                                    value={userProfile.contacts[contact as keyof UserProfileContactsType]}/>)

    return (
        <div className={s.descriptionContainer}>
            <div className={s.descriptionItem}>
                <strong>About me:</strong>
                {userProfile.aboutMe || 'Empty'}
            </div>

            <div className={s.descriptionItem}>
                <strong>Looking for a job:</strong>
                {userProfile.lookingForAJob ? 'Yes' : 'No'}
            </div>

            <div className={s.descriptionItem}>
                <strong>Looking for a job description:</strong>
                {userProfile.lookingForAJobDescription || 'Empty'}
            </div>

            <div className={s.descriptionItem}>
                <strong>Contacts</strong>
                {mappedContacts}
            </div>

            {isOwner && <Button onClick={onEditMode} variant='contained'>Edit</Button>}
        </div>
    )
})