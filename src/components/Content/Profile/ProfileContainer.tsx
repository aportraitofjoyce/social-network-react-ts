import React from 'react'
import {connect} from 'react-redux'
import {Profile} from './Profile'
import {dataForMyPostsType, dataForMyProfileType, StateType} from '../../../types/types'
import {addPost, setUserProfile, updatePost} from '../../../redux/actions/profile-actions'
import axios from 'axios'
import {RouteComponentProps, withRouter} from 'react-router-dom'

export type ProfilePropsType = MSTPType & MDTPType & RouteComponentProps<PathParamsType>

type MSTPType = {
    dataForMyProfile: dataForMyProfileType
    dataForMyPosts: dataForMyPostsType[]
    textForNewPost: string
    userProfile: any
}

type MDTPType = {
    addPost: () => void
    updatePost: (text: string) => void
    setUserProfile: (userProfile: dataForMyProfileType) => void
}

type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        const userID = this.props.match.params.userId ? this.props.match.params.userId : 18964

        axios
            .get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    dataForMyProfile: state.profile.dataForMyProfile,
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