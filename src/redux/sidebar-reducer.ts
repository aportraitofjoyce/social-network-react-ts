import {ActionsType} from "./redux-store";

const initialState = {
    dataForSidebar: [
        {name: 'My profile', link: '/profile'},
        {name: 'Messages', link: '/dialogs'},
    ]
}

export const sidebarReducer = (state: any = initialState, action: ActionsType): any => {
    return state
}
