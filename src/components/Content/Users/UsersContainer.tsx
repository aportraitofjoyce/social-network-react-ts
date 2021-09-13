import React, {ComponentType, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../../types/common-types'
import {getUsers, changeCurrentPage, followUser} from '../../../redux/actions/users-actions'
import {Users} from './Users'
import {Loader} from '../../UI/Loader/Loader'
import {UsersType} from '../../../types/users-types'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from 'redux'

const UsersContainer: React.FC = () => {
    const dispatch = useDispatch()
    const {
        usersData,
        pageSize,
        totalUsersCount,
        currentPage,
        isLoading,
        followLoader
    } = useSelector<StateType, UsersType>(state => state.users)

    const followUserHandler = (id: string, followed: boolean) => dispatch(followUser(id, followed))

    const changeCurrentPageHandler = (page: number) => {
        dispatch(changeCurrentPage(page, pageSize))
    }

    useEffect(() => {
        dispatch(getUsers(pageSize, currentPage))
    }, [dispatch, pageSize, currentPage])

    return (
        <div>
            {isLoading && <Loader/>}
            <Users usersData={usersData}
                   pageSize={pageSize}
                   totalUsersCount={totalUsersCount}
                   currentPage={currentPage}
                   changeCurrentPage={changeCurrentPageHandler}
                   followLoader={followLoader}
                   followUser={followUserHandler}/>
        </div>
    )
}

export default compose<ComponentType>(withAuthRedirect)(UsersContainer)