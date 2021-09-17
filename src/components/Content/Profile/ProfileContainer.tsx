import React, {ComponentType, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Profile} from './Profile'
import {StateType} from '../../../types/common-types'
import {
    addPost,
    getUserProfile,
    getUserStatus, updateUserAvatar, updateUserDescription,
    updateUserStatus
} from '../../../redux/actions/profile-actions'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {ProfileType, UserProfileType} from '../../../types/profile-types'
import {compose} from 'redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {AuthType} from '../../../types/auth-types'

type PathParamsType = {
    userId: string
}

const ProfileContainer: React.FC<RouteComponentProps<PathParamsType>> = React.memo(props => {
    const {match} = props

    const dispatch = useDispatch()
    const {dataForMyPosts, userProfile, userStatus} = useSelector<StateType, ProfileType>(state => state.profile)
    const {id} = useSelector<StateType, AuthType>(state => state.auth)

    const addPostHandler = useCallback((text: string) => dispatch(addPost(text)), [dispatch])
    const updateUserStatusHandler = useCallback((status: string) => dispatch(updateUserStatus(status)), [dispatch])
    const updateUserAvatarHandler = useCallback((avatarFile: File) => dispatch(updateUserAvatar(avatarFile)), [dispatch])
    const updateUserDescriptionHandler = useCallback((userDescription: UserProfileType) => dispatch(updateUserDescription(userDescription)), [dispatch])

    useEffect(() => {
        let userID = Number(match.params.userId) || id
        dispatch(getUserProfile(userID))
        dispatch(getUserStatus(userID))
    }, [dispatch, match.params.userId, id])

    const isOwner = !match.params.userId || (id !== null && id === Number(match.params.userId))

    return <Profile dataForMyPosts={dataForMyPosts}
                    userProfile={userProfile}
                    userStatus={userStatus}
                    updateUserStatus={updateUserStatusHandler}
                    addPost={addPostHandler}
                    isOwner={isOwner}
                    updateUserAvatar={updateUserAvatarHandler}
                    updateUserDescription={updateUserDescriptionHandler}/>
})

export default compose<ComponentType>(withAuthRedirect, withRouter)(ProfileContainer)