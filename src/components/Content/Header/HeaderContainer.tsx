import React from 'react'
import axios from 'axios'
import {Header} from './Header'
import {AuthType, StateType} from '../../../types/types'
import {connect} from 'react-redux'
import {setAuthUserData, setAuthUserInfo} from '../../../redux/actions/auth-actions'
import {authAPI} from '../../../api/auth-api'
import {profileAPI} from '../../../api/profile-api'

export type HeaderPropsType = MSTPType & MDTPType

type MSTPType = {
    auth: AuthType
}

type MDTPType = {
    setAuthUserData: (id: number, login: string, email: string) => void
    setAuthUserInfo: (name: string, avatar: string) => void
}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios
            .all([authAPI.checkAuth(), profileAPI.getUserProfile('18964')])
            .then(axios.spread((...responses) => {
                const {id, login, email} = responses[0].data.data
                responses[0].data.resultCode === 0 && this.props.setAuthUserData(id, login, email)
                responses[0] && this.props.setAuthUserInfo(responses[1].data.fullName, responses[1].data.photos.small)
            }))
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
    setAuthUserData,
    setAuthUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)