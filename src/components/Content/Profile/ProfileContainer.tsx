import React from 'react'
import {connect} from 'react-redux'
import {Profile} from './Profile'
import {PATH, StateType} from '../../../types/common-types'
import {addPost, getUserProfile, updatePost} from '../../../redux/actions/profile-actions'
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom'
import {dataForMyPostsType, UserProfileType} from '../../../types/profile-types'

export type ProfilePropsType = MSTPType & MDTPType & RouteComponentProps<PathParamsType>

type MSTPType = {
    dataForMyPosts: dataForMyPostsType[]
    textForNewPost: string
    userProfile: UserProfileType | null
    isAuth: boolean
}

type MDTPType = {
    addPost: () => void
    updatePost: (text: string) => void
    getUserProfile: (idFromURL: string) => void
}

type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={PATH.LOGIN}/>

        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    dataForMyPosts: state.profile.dataForMyPosts,
    textForNewPost: state.profile.newPost.text,
    userProfile: state.profile.userProfile,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    addPost,
    updatePost,
    getUserProfile
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithRouter)