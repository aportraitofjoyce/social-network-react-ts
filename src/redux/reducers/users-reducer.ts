import {v1} from 'uuid'
import {ActionsType, UsersType} from '../../types/types'

const initialState: UsersType = {
    userData: [
        {
            id: v1(),
            name: 'Ilya Sadovskiy',
            country: 'Belarus',
            city: 'Minsk',
            avatar: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            status: 'Working now'
        },
        {
            id: v1(),
            name: 'Maxim Lepeyev',
            country: 'Belarus',
            city: 'Minsk',
            avatar: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            status: 'Looking for girl'
        },
        {
            id: v1(),
            name: 'Andrei Tretyakov',
            country: 'Belarus',
            city: 'Minsk',
            avatar: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            status: 'LF DD 15+'
        },
        {
            id: v1(),
            name: 'Yura Kereichyk',
            country: 'Belarus',
            city: 'Minsk',
            avatar: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            status: 'It\'s a Guuuura'
        }
    ]
}

export const usersReducer = (state: UsersType = initialState, action: ActionsType) => {
    switch (action.type) {
        default:
            return state
    }
}