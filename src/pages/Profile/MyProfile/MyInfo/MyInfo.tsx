import s from '../MyProfile.module.css'
import React, {useState} from 'react'
import {MyStatus} from './MyStatus/MyStatus'
import {MyDescription} from './MyDescription/MyDescription'
import {MyDescriptionEditForm} from './MyDescriptionEditForm/MyDescriptionEditForm'
import {UserProfileType} from '../../../../types/profile-types'

type MyInfoPropsType = {
    userProfile: UserProfileType
    userStatus: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    updateUserDescription: (userDescription: UserProfileType) => void
}

export const MyInfo: React.FC<MyInfoPropsType> = React.memo(props => {
    const {userProfile, userStatus, updateUserStatus, isOwner, updateUserDescription} = props
    const [editMode, setEditMode] = useState<boolean>(false)

    const onEditMode = () => setEditMode(true)

    const offEditMode = async (userDescription: UserProfileType) => {
        await updateUserDescription(userDescription)
        setEditMode(false)
    }

    return (
        <div className={s.infoContainer}>
            <h2>{userProfile.fullName}</h2>

            <MyStatus status={userStatus}
                      updateUserStatus={updateUserStatus}
                      isOwner={isOwner}/>

            {!editMode
                ? <MyDescription userProfile={userProfile}
                                 isOwner={isOwner}
                                 onEditMode={onEditMode}/>

                : <MyDescriptionEditForm onSubmit={offEditMode}
                                         userProfile={userProfile}/>}
        </div>
    )
})