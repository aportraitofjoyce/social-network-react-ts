import React, {ComponentType, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Profile} from './Profile'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {ProfileType, UserProfileType} from '../../../types/profile-types'
import {compose} from 'redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {AuthType} from '../../../types/auth-types'
import {RootState} from '../../../redux/store'
import {
    getUserProfile,
    getUserStatus,
    updateUserAvatar,
    updateUserDescription,
    updateUserStatus
} from '../../../redux/reducers/profile-reducer'

type PathParamsType = {
    userId: string
}

const ProfileContainer: React.FC<RouteComponentProps<PathParamsType>> = React.memo(props => {
    const {match} = props

    const dispatch = useDispatch()
    const {userProfile, userStatus} = useSelector<RootState, ProfileType>(state => state.profile)
    const {id} = useSelector<RootState, AuthType>(state => state.auth)

    const updateUserStatusHandler = useCallback((status: string) => dispatch(updateUserStatus(status)), [dispatch])
    const updateUserAvatarHandler = useCallback((avatarFile: File) => dispatch(updateUserAvatar(avatarFile)), [dispatch])
    const updateUserDescriptionHandler = useCallback((userDescription: UserProfileType) => dispatch(updateUserDescription(userDescription)), [dispatch])

    useEffect(() => {
        const userID: number | null = Number(match.params.userId) || id

        dispatch(getUserProfile(userID))
        dispatch(getUserStatus(userID))
    }, [dispatch, match.params.userId, id])

    const isOwner = !match.params.userId || (id !== null && id === Number(match.params.userId))

    return <Profile userProfile={userProfile}
                    userStatus={userStatus}
                    updateUserStatus={updateUserStatusHandler}
                    isOwner={isOwner}
                    updateUserAvatar={updateUserAvatarHandler}
                    updateUserDescription={updateUserDescriptionHandler}/>
})

export default compose<ComponentType>(withAuthRedirect, withRouter)(ProfileContainer)