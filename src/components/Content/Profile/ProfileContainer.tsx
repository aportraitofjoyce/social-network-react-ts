import React, {ComponentType, useEffect} from 'react'
import {connect} from 'react-redux'
import {Profile} from './Profile'
import {StateType} from '../../../types/common-types'
import {
    addPost,
    getUserProfile,
    getUserStatus,
    setUserStatus,
    updateUserStatus
} from '../../../redux/actions/profile-actions'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {dataForMyPostsType, UserProfileType} from '../../../types/profile-types'
import {compose} from 'redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'

export type ProfilePropsType = MSTPType & MDTPType & RouteComponentProps<PathParamsType>

type MSTPType = {
    dataForMyPosts: dataForMyPostsType[]
    userProfile: UserProfileType | null
    userStatus: string
    authID: string
}

type MDTPType = {
    addPost: (text: string) => void
    getUserProfile: (idFromURL: string) => void
    getUserStatus: (idFromURL: string) => void
    updateUserStatus: (status: string) => void
    setUserStatus: (status: string) => void
}

type PathParamsType = {
    userId: string
}

const ProfileContainer: React.FC<ProfilePropsType> = (props) => {
    useEffect(() => {
        props.getUserProfile(props.match.params.userId || props.authID)
        props.getUserStatus(props.match.params.userId || props.authID)
    }, [])

    return <Profile {...props}/>
}


const mapStateToProps = (state: StateType) => ({
    dataForMyPosts: state.profile.dataForMyPosts,
    textForNewPost: state.profile.newPost.text,
    userProfile: state.profile.userProfile,
    userStatus: state.profile.userStatus,
    authID: state.auth.id
})

const mapDispatchToProps = {
    addPost,
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    setUserStatus
}

export default compose<ComponentType>
(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect, withRouter)
(ProfileContainer)