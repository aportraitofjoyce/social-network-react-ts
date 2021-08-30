import React from 'react'
import {connect} from 'react-redux'
import {StateType, UserType} from '../../../types/types'
import {
    follow,
    setCurrentPage,
    toggleLoader,
    setTotalUsersCount,
    setUsers, toggleFollowLoader
} from '../../../redux/actions/users-actions'
import {Users} from './Users'
import {Loader} from '../../UI/Loader/Loader'
import {usersAPI} from '../../../api/users-api'

type UsersContainerPropsType = MSTPType & MDTPType

type MSTPType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followLoader: string[]
}

type MDTPType = {
    follow: (id: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (total: number) => void
    toggleLoader: (status: boolean) => void
    toggleFollowLoader: (status: boolean, id: string) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleLoader(true)

        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(response => {
                this.props.toggleLoader(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    onPaginationPageClickHandler = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleLoader(true)

        usersAPI.getUsers(this.props.pageSize, page)
            .then(response => {
                this.props.toggleLoader(false)
                this.props.setUsers(response.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.isLoading && <Loader/>}
                <Users usersData={this.props.usersData}
                       follow={this.props.follow}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       onPaginationPageClickHandler={this.onPaginationPageClickHandler}
                       followLoader={this.props.followLoader}
                       toggleFollowLoader={this.props.toggleFollowLoader}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    usersData: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isLoading: state.users.isLoading,
    followLoader: state.users.followLoader
})

const mapDispatchToProps = {
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoader,
    toggleFollowLoader
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)