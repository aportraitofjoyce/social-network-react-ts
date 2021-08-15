import {ActionsType, UsersType} from '../../types/types'
import {FOLLOW, SET_USERS} from '../actions/usersActions'

const initialState: UsersType = {
    usersData: []
}

export const usersReducer = (state: UsersType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData
                    .map((user) => user.id === action.id
                        ? {...user, followed: !user.followed}
                        : user)
            }

        case SET_USERS:
            return {...state, usersData: [...action.users, ...state.usersData]}

        default:
            return state
    }
}

/*

{
            id: v1(),
            name: 'Ilya Sadovskiy',
            location: {
                country: 'Belarus',
                city: 'Minsk'
            },
            avatar: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            status: 'Working now',
            follow: true
        },
        {
            id: v1(),
            name: 'Maxim Lepeyev',
            location: {
                country: 'Belarus',
                city: 'Minsk'
            },
            avatar: 'https://i1.sndcdn.com/avatars-000514869222-haig7y-t500x500.jpg',
            status: 'Looking for a girl',
            follow: false
        },
        {
            id: v1(),
            name: 'Andrei Tretyakov',
            location: {
                country: 'Ukraine',
                city: 'Kiev'
            },
            avatar: 'https://9tailedkitsune.com/wp-content/uploads/2021/04/zero-two_-cute.jpg',
            status: 'LF DD 15+',
            follow: false
        },
        {
            id: v1(),
            name: 'Yura Kereichyk',
            location: {
                country: 'Japan',
                city: 'Tokio'
            },
            avatar: 'https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s900-c-k-c0x00ffffff-no-rj',
            status: 'It\'s a Guuuura',
            follow: false
        }
* */