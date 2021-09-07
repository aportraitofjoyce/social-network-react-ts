import React, {ComponentType, useEffect} from 'react'
import {connect} from 'react-redux'
import {StateType} from '../../../types/common-types'
import {getUsers, changeCurrentPage, followUser} from '../../../redux/actions/users-actions'
import {Users} from './Users'
import {Loader} from '../../UI/Loader/Loader'
import {UserType} from '../../../types/users-types'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from 'redux'

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

const UsersContainer: React.FC<UsersContainerPropsType> = (props) => {
    useEffect(() => props.getUsers(props.pageSize, props.currentPage), [])

    const onPaginationPageClickHandler = (page: number) => {
        props.changeCurrentPage(page, props.pageSize)
    }
    return (
        <div>
            {props.isLoading && <Loader/>}
            <Users usersData={props.usersData}
                   pageSize={props.pageSize}
                   totalUsersCount={props.totalUsersCount}
                   currentPage={props.currentPage}
                   onPaginationPageClickHandler={onPaginationPageClickHandler}
                   followLoader={props.followLoader}
                   followUser={props.followUser}/>
        </div>
    )
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

export default compose<ComponentType>
(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)
(UsersContainer)