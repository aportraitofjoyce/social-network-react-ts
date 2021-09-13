import {ThunkType} from '../../types/common-types'
import {checkAuth} from './auth-actions'

export enum APP_ACTIONS_TYPE {
    SUCCESS_INITIALIZATION = 'SUCCESS_INITIALIZATION'
}

export const successInitialization = (status: boolean) => ({
    type: APP_ACTIONS_TYPE.SUCCESS_INITIALIZATION, payload: {status}
}) as const

export const initialization = () => async (dispatch: ThunkType) => {
    dispatch(successInitialization(false))
    await dispatch(checkAuth())
    dispatch(successInitialization(true))
}