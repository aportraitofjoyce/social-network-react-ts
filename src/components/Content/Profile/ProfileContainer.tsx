import React, {ComponentType, useEffect} from 'react'
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

type ProfileContainerPropsType = RouteComponentProps<PathParamsType>

type PathParamsType = {
    userId: any
}

const ProfileContainer: React.FC<ProfileContainerPropsType> = (props) => {
    const {match} = props
    const dispatch = useDispatch()
    const {dataForMyPosts, userProfile, userStatus} = useSelector<StateType, ProfileType>(state => state.profile)
    const {id} = useSelector<StateType, AuthType>(state => state.auth)

    const addPostHandler = (text: string) => dispatch(addPost(text))
    const updateUserStatusHandler = (status: string) => dispatch(updateUserStatus(status))

    useEffect(() => {
        dispatch(getUserProfile(match.params.userId || id))
        dispatch(getUserStatus(match.params.userId || id))
    }, [dispatch, match.params.userId, id])

    return <Profile dataForMyPosts={dataForMyPosts}
                    userProfile={userProfile}
                    userStatus={userStatus}
                    authID={id}
                    updateUserStatus={updateUserStatusHandler}
                    addPost={addPostHandler}/>
}

export default compose<ComponentType>(withAuthRedirect, withRouter)(ProfileContainer)