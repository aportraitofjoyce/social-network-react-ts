import {FC, lazy} from 'react'
import {Login} from '../pages/Login/Login'
import {Error404} from '../pages/ErrorPage/Error404'

const Profile = lazy(() => import('../pages/Profile/Profile'))
const Dialogs = lazy(() => import('../pages/Dialogs/Dialogs'))
const Users = lazy(() => import('../pages/Users/Users'))

export enum PATH {
    ROOT = '/',
    EMPTY = '',
    PROFILE = '/profile',
    PROFILE_WITH_ID = '/profile/:userId?',
    DIALOGS = '/dialogs',
    USERS = '/users',
    LOGIN = '/login',
    ERROR = '/404'
}

type Routes = {
    path: string,
    component: FC
    exact?: boolean
}

export const publicRoutes: Routes[] = [
    {path: PATH.ROOT, component: Profile, exact: true},
    {path: PATH.PROFILE_WITH_ID, component: Profile},
    {path: PATH.DIALOGS, component: Dialogs},
    {path: PATH.USERS, component: Users},
    {path: PATH.LOGIN, component: Login},
    {path: PATH.ERROR, component: Error404}
]