import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Users} from './Users'
import {Loader} from '../../components/UI/Loader/Loader'
import {UsersType} from '../../types/users-types'
import {AuthType} from '../../types/auth-types'
import {useHistory} from 'react-router-dom'
import * as queryString from 'querystring'
import {PATH} from '../../routes/routes'
import {RootState} from '../../redux/store'
import {changeCurrentPage, followUser, requestUsers} from '../../redux/reducers/users-reducer'

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
    } = useSelector<RootState, UsersType>(state => state.users)

    const {isAuth} = useSelector<RootState, AuthType>(state => state.auth)

    const followUserHandler = useCallback((id: number, followed: boolean) => {
        dispatch(followUser(id, followed))
    }, [dispatch])

    const changeCurrentPageHandler = useCallback((page: number) => {
        dispatch(changeCurrentPage(page, pageSize, search.term, search.followers))
    }, [dispatch, pageSize, search.term, search.followers])

    const searchUsersHandler = useCallback((term: string, followers: boolean | null) => {
        dispatch(requestUsers(1, pageSize, term, followers))
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