import {ActionsType, PATH} from '../../types/common-types'
import {SidebarType} from '../../types/sidebar-types'

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
