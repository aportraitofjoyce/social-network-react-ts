import {ThunkType} from '../../types/common-types'
import {checkAuth} from './auth-actions'

export enum APP_ACTIONS_TYPE {
    SUCCESS_INITIALIZATION = 'SUCCESS_INITIALIZATION'
}

export type AppActionsType =
    | ReturnType<typeof successInitialization>

export const successInitialization = (status: boolean) => ({
    type: APP_ACTIONS_TYPE.SUCCESS_INITIALIZATION, payload: {status}
}) as const

// Thunk
export const initialization = (): ThunkType => async dispatch => {
    dispatch(successInitialization(false))
    await dispatch(checkAuth())
    dispatch(successInitialization(true))
}