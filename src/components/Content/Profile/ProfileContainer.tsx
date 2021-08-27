import {connect} from 'react-redux'
import {Profile} from './Profile'
import {StateType} from '../../../types/types'
import {addPost, updatePost} from '../../../redux/actions/profileActions'

const mapStateToProps = (state: StateType) => ({
    dataForMyProfile: state.profile.dataForMyProfile,
    dataForMyPosts: state.profile.dataForMyPosts,
    textForNewPost: state.profile.newPost.text
})

const mapDispatchToProps = {
    addPost,
    updatePost
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)