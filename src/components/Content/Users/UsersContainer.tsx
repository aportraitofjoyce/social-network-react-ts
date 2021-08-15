import {connect} from 'react-redux'
import {UsersCC, UsersFC} from './Users'
import {DispatchType, StateType, UserType} from '../../../types/types'
import {followAC, setUsersAC} from '../../../redux/actionCreators/usersAC'

const mapStateToProps = (state: StateType) => ({
    usersData: state.users.usersData
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    followed: (id: string) => {
        dispatch(followAC(id))
    },
    setUsers: (users: UserType[]) => {
        dispatch(setUsersAC(users))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCC)