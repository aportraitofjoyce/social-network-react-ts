import React from 'react'
import axios from 'axios'
import {Header} from './Header'
import {AuthType, StateType} from '../../../types/types'
import {connect} from 'react-redux'
import {setAuthUserData, setAuthUserInfo} from '../../../redux/actions/auth-actions'

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
        const requestOne = axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
        const requestTwo = axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + 18964)

        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]

            const {id, login, email} = responseOne.data.data
            responseOne.data.resultCode === 0 && this.props.setAuthUserData(id, login, email)

            responseOne && this.props.setAuthUserInfo(responseTwo.data.fullName, responseTwo.data.photos.small)
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