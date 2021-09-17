import React from 'react'
import s from '../../MyProfile.module.css'
import {UserProfileContactsType, UserProfileType} from '../../../../../../types/profile-types'
import {MyContacts} from './MyContacts/MyContacts'

type MyProfileDescriptionType = {
    userProfile: UserProfileType
    isOwner: boolean
    onEditMode: () => void
}

export const MyDescription: React.FC<MyProfileDescriptionType> = React.memo(props => {
    const {userProfile, isOwner, onEditMode} = props
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
                {Object.keys(userProfile.contacts).map(contact => <MyContacts key={contact}
                                                                        title={contact}
                                                                        value={userProfile.contacts[contact as keyof UserProfileContactsType]}/>)}
            </div>
            {isOwner && <button onClick={onEditMode}>Edit</button>}
        </div>
    )
})