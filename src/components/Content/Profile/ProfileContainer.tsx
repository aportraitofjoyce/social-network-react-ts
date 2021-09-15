import React, {ComponentType, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Profile} from './Profile'
import {StateType} from '../../../types/common-types'
import {
    addPost,
    getUserProfile,
    getUserStatus,
    updateUserStatus
} from '../../../redux/actions/profile-actions'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {ProfileType} from '../../../types/profile-types'
import {compose} from 'redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {AuthType} from '../../../types/auth-types'

type PathParamsType = {
    userId: string
}

const ProfileContainer: React.FC<RouteComponentProps<PathParamsType>> = (props) => {
    console.log('ProfileContainer')
    const {match} = props

    const dispatch = useDispatch()
    const {dataForMyPosts, userProfile, userStatus} = useSelector<StateType, ProfileType>(state => state.profile)
    const {id} = useSelector<StateType, AuthType>(state => state.auth)

    const addPostHandler = useCallback((text: string) => dispatch(addPost(text)), [dispatch])
    const updateUserStatusHandler = useCallback((status: string) => dispatch(updateUserStatus(status)), [dispatch])

    useEffect(() => {
        const userID = Number(match.params.userId)
        dispatch(getUserProfile(id || userID))
        dispatch(getUserStatus(id || userID))
    }, [dispatch, match.params.userId, id])

    return <Profile dataForMyPosts={dataForMyPosts}
                    userProfile={userProfile}
                    userStatus={userStatus}
                    authID={id}
                    updateUserStatus={updateUserStatusHandler}
                    addPost={addPostHandler}/>
}

export default compose<ComponentType>(withAuthRedirect, withRouter)(ProfileContainer)