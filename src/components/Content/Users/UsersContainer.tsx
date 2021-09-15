import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../../types/common-types'
import {requestUsers, changeCurrentPage, followUser} from '../../../redux/actions/users-actions'
import {Users} from './Users'
import {Loader} from '../../UI/Loader/Loader'
import {UsersType} from '../../../types/users-types'
import {AuthType} from '../../../types/auth-types'

export const UsersContainer: React.FC = React.memo(() => {
    const dispatch = useDispatch()

    const {
        usersData,
        pageSize,
        totalUsersCount,
        currentPage,
        isLoading,
        followLoader
    } = useSelector<StateType, UsersType>(state => state.users)

    const {isAuth} = useSelector<StateType, AuthType>(state => state.auth)

    const followUserHandler = useCallback((id: string, followed: boolean) => {
        dispatch(followUser(id, followed))
    }, [dispatch])

    const changeCurrentPageHandler = useCallback((page: number) => {
        dispatch(changeCurrentPage(page, pageSize))
    }, [dispatch, pageSize])

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    }, [dispatch, currentPage, pageSize])

    return (
        <>
            {isLoading && <Loader/>}
            <Users usersData={usersData}
                   pageSize={pageSize}
                   totalUsersCount={totalUsersCount}
                   currentPage={currentPage}
                   changeCurrentPage={changeCurrentPageHandler}
                   followLoader={followLoader}
                   followUser={followUserHandler}
                   isAuth={isAuth}/>
        </>
    )
})