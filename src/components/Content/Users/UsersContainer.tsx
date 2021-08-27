import {connect} from 'react-redux'
import {DispatchType, StateType, UserType} from '../../../types/types'
import {
    followAC,
    setCurrentPageAC,
    toggleLoaderAC,
    setTotalUsersCountAC,
    setUsersAC
} from '../../../redux/actions/usersActions'
import React from 'react'
import axios from 'axios'
import {Users} from './Users'
import {Loader} from '../../UI/Loader/Loader'

type UsersContainerPropsType = {
    usersData: UserType[]
    followed: (id: string) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (total: number) => void
    isLoading: boolean
    toggleLoader: (status: boolean) => void
}

export class UsersAPIContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleLoader(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleLoader(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPaginationPageClickHandler = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleLoader(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.toggleLoader(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.isLoading && <Loader/>}
                <Users usersData={this.props.usersData}
                       followed={this.props.followed}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       onPaginationPageClickHandler={this.onPaginationPageClickHandler}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    usersData: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isLoading: state.users.isLoading
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    followed: (id: string) => dispatch(followAC(id)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
    setTotalUsersCount: (total: number) => dispatch(setTotalUsersCountAC(total)),
    toggleLoader: (status: boolean) => dispatch(toggleLoaderAC(status))
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)