import React, {ComponentType} from 'react'
import {Login} from './Login'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {StateType} from '../../../types/common-types'
import {dataForMyPostsType, UserProfileType} from '../../../types/profile-types'

type LoginContainerPropsType = MSTPType & MDTPType

type MSTPType = {
    dataForMyPosts: dataForMyPostsType[]
    textForNewPost: string
    userProfile: UserProfileType | null
    userStatus: string
}

type MDTPType = {
    addPost: () => void
    updatePost: (text: string) => void
    getUserProfile: (idFromURL: string) => void
    getUserStatus: (idFromURL: string) => void
    updateUserStatus: (status: string) => void
    setUserStatus: (status: string) => void
}

const LoginContainer: React.FC<LoginContainerPropsType> = (props) => {
    return <Login {...props}/>
}

const mapStateToProps = (state: StateType) => {

}

const mapDispatchToProps = {}

export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps))(LoginContainer)