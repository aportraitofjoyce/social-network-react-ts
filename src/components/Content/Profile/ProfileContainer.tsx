import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType} from "../../../redux/store";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";

const mapStateToProps = (state: StateType) => (
    {
        dataForMyProfile: state.profile.dataForMyProfile,
        dataForMyPosts: state.profile.dataForMyPosts,
        textForNewPost: state.profile.newPost.text
    }
)
const mapDispatchToProps = (dispatch: any) => (
    {
        addPost: () => {
            dispatch(addPostAC())
            dispatch(updatePostAC(''))
        },
        updatePost: (text: string) => {
            dispatch(updatePostAC(text))
        }
    }
)
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)