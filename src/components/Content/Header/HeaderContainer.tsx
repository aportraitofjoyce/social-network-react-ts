import React from 'react'
import {Header} from './Header'
import {StateType} from '../../../types/common-types'
import {connect} from 'react-redux'
import {logout} from '../../../redux/actions/auth-actions'
import {AuthType} from '../../../types/auth-types'

export type HeaderPropsType = MSTPType & MDTPType

type MSTPType = {
    auth: AuthType
}

type MDTPType = {
    logout: () => void
}

const HeaderContainer: React.FC<HeaderPropsType> = (props) => {
    return <Header {...props}/>
}

const mapStateToProps = (state: StateType) => ({
    auth: state.auth,
})

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)