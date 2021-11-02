import s from '../MyProfile.module.css'
import React, {FC, memo, useCallback, useState} from 'react'
import {MyStatus} from './MyStatus/MyStatus'
import {MyDescription} from './MyDescription/MyDescription'
import {MyDescriptionEditForm} from './MyDescriptionEditForm/MyDescriptionEditForm'
import {updateUserDescription, UserProfileType} from '../../../../redux/reducers/profile-reducer'
import {useDispatch} from 'react-redux'

type MyInfoProps = {
    userProfile: UserProfileType
    userStatus: string
    isOwner: boolean
}

export const MyInfo: FC<MyInfoProps> = memo(({userProfile, userStatus, isOwner}) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState<boolean>(false)

    const updateUserDescriptionHandler = useCallback((userDescription: UserProfileType) =>
        dispatch(updateUserDescription(userDescription)), [dispatch])

    const onEditMode = () => setEditMode(true)

    const offEditMode = async (userDescription: UserProfileType) => {
        await updateUserDescriptionHandler(userDescription)
        setEditMode(false)
    }

    return (
        <div className={s.infoContainer}>
            <h2>{userProfile.fullName}</h2>

            <MyStatus status={userStatus} isOwner={isOwner}/>

            {!editMode
                ? <MyDescription userProfile={userProfile}
                                 isOwner={isOwner}
                                 onEditMode={onEditMode}/>

                : <MyDescriptionEditForm onSubmit={offEditMode}
                                         userProfile={userProfile}/>}
        </div>
    )
})