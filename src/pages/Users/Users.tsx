import React, {FC, memo, useCallback, useEffect, useMemo} from 'react'
import s from './Users.module.css'
import {User} from './User/User'
import {UsersSearchForm} from './UsersSearchForm/UsersSearchForm'
import {PaginationControlled} from '../../components/UI/Pagination/PaginationControlled'
import {changeCurrentPage, followUser, requestUsers} from '../../redux/reducers/users-reducer'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useAppSelector} from '../../hooks/hooks'
import {Loader} from '../../components/UI/Loader/Loader'
import queryString from 'querystring'
import {PATH} from '../../routes/routes'

type QueryParamsType = { term?: string; page?: string; friend?: string }

const Users: FC = memo(() => {
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
    } = useAppSelector(state => state.users)
    const isAuth = useAppSelector(state => state.auth.isAuth)

    let pagesCount = useMemo(() => Math.ceil(totalUsersCount / pageSize), [totalUsersCount, pageSize])

    const searchUsersHandler = useCallback((term: string, followers: boolean | null) => {
        dispatch(requestUsers(1, pageSize, term, followers))
    }, [dispatch])

    const changeCurrentPageHandler = useCallback((page: number) => {
        dispatch(changeCurrentPage(page, pageSize, search.term, search.followers))
    }, [dispatch, pageSize, search.term, search.followers])

    useEffect(() => {
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
        <main className={s.wrapper}>
            {isLoading && <Loader/>}

            <UsersSearchForm onSubmit={searchUsersHandler}
                             searchParams={search}/>

            <PaginationControlled pagesCount={pagesCount}
                                  currentPage={currentPage}
                                  onClick={changeCurrentPageHandler}/>

            {usersData.map(user => <User key={user.name + user.id}
                                         user={user}
                                         followLoader={followLoader}
                                         isAuth={isAuth}/>)}
        </main>
    )
})

export default Users