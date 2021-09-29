import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {PATH, StateType} from '../../../types/common-types'
import {
    requestUsers,
    changeCurrentPage,
    followUser,
} from '../../../redux/actions/users-actions'
import {Users} from './Users'
import {Loader} from '../../UI/Loader/Loader'
import {UsersType} from '../../../types/users-types'
import {AuthType} from '../../../types/auth-types'
import {useHistory} from 'react-router-dom'
import * as queryString from 'querystring'

type QueryParamsType = { term?: string; page?: string; friend?: string }

const UsersContainer: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const history = useHistory()

    const {
        usersData,
        pageSize,
        totalUsersCount,
        currentPage,
        isLoading,
        followLoader,
        search
    } = useSelector<StateType, UsersType>(state => state.users)

    const {isAuth} = useSelector<StateType, AuthType>(state => state.auth)

    const followUserHandler = useCallback((id: number, followed: boolean) => {
        dispatch(followUser(id, followed))
    }, [dispatch])

    const changeCurrentPageHandler = useCallback((page: number) => {
        dispatch(changeCurrentPage(page, pageSize, search.term, search.followers))
    }, [dispatch, pageSize, search.term, search.followers])


    // useCallback keeps the page #1 in memory and back user to page #1 after search. W/o useCallback need to replace currentPage with 1.
    const searchUsersHandler = useCallback((term: string, followers: boolean | null) => {
        dispatch(requestUsers(currentPage, pageSize, term, followers))
    }, [dispatch])


    // Read query params and set them to store.
    useEffect(() => {
        // Substr(1) needed because lib 'querystring' put ? as first symbol.
        const parsedURLParams = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualSearchParams = search

        if (parsedURLParams.page) actualPage = Number(parsedURLParams.page)

        if (parsedURLParams.term) actualSearchParams = {
            ...actualSearchParams,
            term: parsedURLParams.term
        }

        if (parsedURLParams.friend) actualSearchParams = {
            ...actualSearchParams,
            followers: parsedURLParams.friend === 'null' ? null : parsedURLParams.friend === 'true',
        }

        dispatch(requestUsers(actualPage, pageSize, actualSearchParams.term, actualSearchParams.followers))
    }, [dispatch])


    // Set search params to URL as query params.
    useEffect(() => {
        const queryURL: QueryParamsType = {}

        if (search.term) queryURL.term = search.term
        if (search.followers !== null) queryURL.friend = String(search.followers)
        if (currentPage) queryURL.page = String(currentPage)

        history.push({
            pathname: PATH.USERS,
            search: queryString.stringify(queryURL)
        })
    }, [history, search, currentPage])

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
                   isAuth={isAuth}
                   searchUsers={searchUsersHandler}
                   searchParams={search}/>
        </>
    )
})

export default UsersContainer