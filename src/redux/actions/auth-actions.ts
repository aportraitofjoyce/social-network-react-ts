import {AUTH_ACTIONS_TYPE} from '../../types/auth-types'
import axios from 'axios'
import {authAPI} from '../../api/auth-api'
import {profileAPI} from '../../api/profile-api'
import {ThunkType} from '../../types/common-types'

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_USER_DATA,
    payload: {id, login, email}
}) as const

export const setAuthUserInfo = (name: string, avatar: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_USER_INFO,
    payload: {name, avatar}
}) as const

export const checkAuthAndGetProfile = () => {
    return (dispatch: ThunkType) => {
        /*axios
            .all([authAPI.checkAuth(), profileAPI.getUserProfile()])

            .then(axios.spread((...responses) => {
                const {id, login, email} = responses[0].data.data
                responses[0].data.resultCode === 0 && dispatch(setAuthUserData(id, login, email))
                responses[0] && dispatch(setAuthUserInfo(responses[1].data.fullName, responses[1].data.photos.small))
            }))*/

        authAPI.checkAuth()
            .then(response => {
                const {id, login, email} = response.data.data
                response.data.resultCode === 0 && dispatch(setAuthUserData(id, login, email))
            })
            /*.then(() => profileAPI.getUserProfile()
                .then(response => dispatch(setAuthUserInfo(response.data.fullName, response.data.photos.small)))
            )*/
    }
}