import React, {FC, memo, useEffect} from 'react'
import s from './Profile.module.css'
import {MyProfile} from './MyProfile/MyProfile'
import {getUserProfile, getUserStatus} from '../../redux/reducers/profile-reducer'
import {useAppSelector} from '../../hooks/hooks'
import {useDispatch} from 'react-redux'
import {Redirect, useParams} from 'react-router-dom'
import {PATH} from '../../routes/routes'

const Profile: FC = memo(() => {
    const dispatch = useDispatch()
    const {userProfile, userStatus} = useAppSelector(state => state.profile)
    const {id, isAuth} = useAppSelector(state => state.auth)
    const {userId} = useParams<{ userId: string }>()

    useEffect(() => {
        if (!isAuth) return

        const userID: number | null = Number(userId) || id

        dispatch(getUserProfile(userID))
        dispatch(getUserStatus(userID))
    }, [dispatch, userId, id])

    const isOwner = !userId || (id !== null && id === Number(userId))

    if (!isAuth) return <Redirect to={PATH.LOGIN}/>

    return (
        <main className={s.wrapper}>
            {userProfile && <MyProfile userProfile={userProfile}
			                           userStatus={userStatus}
			                           isOwner={isOwner}/>}
        </main>
    )
})

export default Profile