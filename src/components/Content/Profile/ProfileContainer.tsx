import {connect} from 'react-redux'
import {Profile} from './Profile'
import {DispatchType, StateType} from '../../../types/types'
import {addPostAC, updatePostAC} from '../../../redux/actionCreators/profileAC'

const mapStateToProps = (state: StateType) => ({
    dataForMyProfile: state.profile.dataForMyProfile,
    dataForMyPosts: state.profile.dataForMyPosts,
    textForNewPost: state.profile.newPost.text
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    addPost: () => {
        dispatch(addPostAC())
        dispatch(updatePostAC(''))
    },
    updatePost: (text: string) => {
        dispatch(updatePostAC(text))
    }
})

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)