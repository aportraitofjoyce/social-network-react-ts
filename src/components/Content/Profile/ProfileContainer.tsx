import React from 'react'
import {connect} from 'react-redux'
import {Profile} from './Profile'
import {dataForMyPostsType, dataForMyProfileType, StateType} from '../../../types/types'
import {addPost, setUserProfile, updatePost} from '../../../redux/actions/profileActions'
import axios from 'axios'

export type ProfilePropsType = {
    dataForMyProfile: dataForMyProfileType
    addPost: () => void
    updatePost: (text: string) => void
    textForNewPost: string
    dataForMyPosts: dataForMyPostsType[]
    setUserProfile: (userProfile: any) => void
    userProfile: any
}

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)