import React from 'react'
import {connect} from 'react-redux'
import {StateType} from '../../../types/common-types'
import {getUsers, changeCurrentPage, followUser} from '../../../redux/actions/users-actions'
import {Users} from './Users'
import {Loader} from '../../UI/Loader/Loader'
import {UserType} from '../../../types/users-types'
import {withAuthRedirectHOC} from '../../../hoc/WithAuthRedirectHOC'

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
    getUsers: (pageSize: number, currentPage: number) => void
    changeCurrentPage: (pageSize: number, page: number) => void
    followUser: (id: string, followed: boolean) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPaginationPageClickHandler = (page: number) => {
        this.props.changeCurrentPage(page, this.props.pageSize)
    }

    render() {
        return (
            <div>
                {this.props.isLoading && <Loader/>}
                <Users usersData={this.props.usersData}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       onPaginationPageClickHandler={this.onPaginationPageClickHandler}
                       followLoader={this.props.followLoader}
                       followUser={this.props.followUser}/>
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
    followLoader: state.users.followLoader,
})

const mapDispatchToProps = {
    getUsers,
    changeCurrentPage,
    followUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectHOC(UsersContainer))