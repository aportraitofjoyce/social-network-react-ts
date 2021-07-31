import {ActionsType, SidebarType} from "./redux-store";

const initialState: SidebarType = {
    dataForSidebar: [
        {name: 'My profile', link: '/profile'},
        {name: 'Messages', link: '/dialogs'},
    ]
}

export const sidebarReducer = (state: any = initialState, action: ActionsType): any => {
    return state
}
