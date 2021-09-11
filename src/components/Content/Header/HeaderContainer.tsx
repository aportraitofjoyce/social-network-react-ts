import React, {useEffect} from 'react'
import {Header} from './Header'
import {StateType} from '../../../types/common-types'
import {connect} from 'react-redux'
import {checkAuthAndGetProfile, logout} from '../../../redux/actions/auth-actions'
import {AuthType} from '../../../types/auth-types'

export type HeaderPropsType = MSTPType & MDTPType

type MSTPType = {
    auth: AuthType
}

type MDTPType = {
    checkAuthAndGetProfile: () => void
    logout: () => void
}

const HeaderContainer: React.FC<HeaderPropsType> = (props) => {
    useEffect(() => props.checkAuthAndGetProfile(), [])
    return <Header {...props}/>
}

const mapStateToProps = (state: StateType) => ({
    auth: state.auth,
})

const mapDispatchToProps = {
    checkAuthAndGetProfile,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)