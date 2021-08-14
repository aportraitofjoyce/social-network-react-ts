import {ActionsType, SidebarType} from '../../types/types'

const initialState: SidebarType = {
    dataForSidebar: [
        {name: 'Profile', link: '/profile'},
        {name: 'Dialogs', link: '/dialogs'},
        {name: 'Users', link: '/users'}
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsType): SidebarType => {
    return state
}
