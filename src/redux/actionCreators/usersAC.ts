import {FOLLOW, SET_USERS} from '../actions/usersActions'
import {UserType} from '../../types/types'

export const followAC = (id: string) => ({type: FOLLOW, id}) as const
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users}) as const