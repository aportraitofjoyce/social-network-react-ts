import React from 'react'
import {connect} from 'react-redux'
import {Profile} from './Profile'
import {StateType} from '../../../types/common-types'
import {addPost, setUserProfile, updatePost} from '../../../redux/actions/profile-actions'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {profileAPI} from '../../../api/profile-api'
import {dataForMyPostsType, UserProfileType} from '../../../types/profile-types'

export type ProfilePropsType = MSTPType & MDTPType & RouteComponentProps<PathParamsType>

type MSTPType = {
    dataForMyPosts: dataForMyPostsType[]
    textForNewPost: string
    userProfile: UserProfileType | null
}

type MDTPType = {
    addPost: () => void
    updatePost: (text: string) => void
    setUserProfile: (userProfile: UserProfileType) => void
}

type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        profileAPI.getUserProfile(this.props.match.params.userId)
            .then(response => this.props.setUserProfile(response.data))
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    dataForMyPosts: state.profile.dataForMyPosts,
    textForNewPost: state.profile.newPost.text,
    userProfile: state.profile.userProfile
})

const mapDispatchToProps = {
    addPost,
    updatePost,
    setUserProfile
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithRouter)