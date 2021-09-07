import React, {ComponentType, useEffect} from 'react'
import {connect} from 'react-redux'
import {Profile} from './Profile'
import {StateType} from '../../../types/common-types'
import {addPost, getUserProfile, updatePost} from '../../../redux/actions/profile-actions'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {dataForMyPostsType, UserProfileType} from '../../../types/profile-types'
import {compose} from 'redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'

export type ProfilePropsType = MSTPType & MDTPType & RouteComponentProps<PathParamsType>

type MSTPType = {
    dataForMyPosts: dataForMyPostsType[]
    textForNewPost: string
    userProfile: UserProfileType | null
}

type MDTPType = {
    addPost: () => void
    updatePost: (text: string) => void
    getUserProfile: (idFromURL: string) => void
}

type PathParamsType = {
    userId: string
}

const ProfileContainer: React.FC<ProfilePropsType> = (props) => {
    useEffect(() => props.getUserProfile(props.match.params.userId), [])
    return <Profile {...props}/>
}

const mapStateToProps = (state: StateType) => ({
    dataForMyPosts: state.profile.dataForMyPosts,
    textForNewPost: state.profile.newPost.text,
    userProfile: state.profile.userProfile,
})

const mapDispatchToProps = {
    addPost,
    updatePost,
    getUserProfile
}

export default compose<ComponentType>
(connect(mapStateToProps, mapDispatchToProps), withRouter)
(ProfileContainer)