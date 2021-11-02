import {SidebarType} from '../../types/sidebar-types'
import {PATH} from '../../routes/routes'
import {ActionsType} from '../store'

const initialState: SidebarType = {
    dataForSidebar: [
        {name: 'Profile', link: PATH.PROFILE},
        {name: 'Dialogs', link: PATH.DIALOGS},
        {name: 'Users', link: PATH.USERS}
    ]
}

export const sidebarReducer = (state = initialState, action: ActionsType): SidebarType => {
    return state
}
