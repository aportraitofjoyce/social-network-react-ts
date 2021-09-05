import React from 'react'
import {Header} from './Header'
import {StateType} from '../../../types/common-types'
import {connect} from 'react-redux'
import {checkAuthAndGetProfile} from '../../../redux/actions/auth-actions'
import {AuthType} from '../../../types/auth-types'

export type HeaderPropsType = MSTPType & MDTPType

type MSTPType = {
    auth: AuthType
}

type MDTPType = {
    checkAuthAndGetProfile: () => void
}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.checkAuthAndGetProfile()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    auth: state.auth,
})

const mapDispatchToProps = {
    checkAuthAndGetProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)