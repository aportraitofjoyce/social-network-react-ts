import {connect} from 'react-redux'
import {UsersCC} from './Users'
import {DispatchType, StateType, UserType} from '../../../types/types'
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from '../../../redux/actions/usersActions'

const mapStateToProps = (state: StateType) => ({
    usersData: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    followed: (id: string) => dispatch(followAC(id)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
    setTotalUsersCount: (total: number) => dispatch(setTotalUsersCountAC(total))
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCC)