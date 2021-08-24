import {connect} from 'react-redux'
import {Profile} from './Profile'
import {DispatchType, StateType} from '../../../types/types'
import {addPostAC, updatePostAC} from '../../../redux/actions/profileActions'

const mapStateToProps = (state: StateType) => ({
    dataForMyProfile: state.profile.dataForMyProfile,
    dataForMyPosts: state.profile.dataForMyPosts,
    textForNewPost: state.profile.newPost.text
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    addPost: () => dispatch(addPostAC()),
    updatePost: (text: string) => dispatch(updatePostAC(text))
})

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)