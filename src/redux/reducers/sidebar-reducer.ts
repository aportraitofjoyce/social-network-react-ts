import {ActionsType, SidebarType} from '../../types/types'
import {PATH} from '../../App'

const initialState: SidebarType = {
    dataForSidebar: [
        {name: 'Profile', link: PATH.PROFILE_CLEAR},
        {name: 'Dialogs', link: PATH.DIALOGS},
        {name: 'Users', link: PATH.USERS}
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsType): SidebarType => {
    return state
}
