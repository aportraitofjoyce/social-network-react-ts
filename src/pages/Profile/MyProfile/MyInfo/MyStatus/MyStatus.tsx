import React, {ChangeEvent, FC, KeyboardEvent, memo, useCallback, useEffect, useState} from 'react'
import {TextField} from '@mui/material'
import {updateUserStatus} from '../../../../../redux/reducers/profile-reducer'
import {useDispatch} from 'react-redux'

type MyStatusProps = {
    status: string
    isOwner: boolean
}

export const MyStatus: FC<MyStatusProps> = memo(({status, isOwner}) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(status)

    const updateUserStatusHandler = useCallback((status: string) => dispatch(updateUserStatus(status)), [dispatch])

    const onEditMode = useCallback(() => setEditMode(true), [])

    const offEditMode = useCallback(() => {
        updateUserStatusHandler(title)
        setEditMode(false)
    }, [title, updateUserStatus])

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }, [])

    const onKeyPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') offEditMode()
    }, [offEditMode])

    useEffect(() => setTitle(status), [status])

    return (
        isOwner && editMode
        ? <TextField type='text'
                     onBlur={offEditMode}
                     onChange={onChangeHandler}
                     onKeyPress={onKeyPressHandler}
                     autoFocus
                     value={title}/>
        : <h4 onDoubleClick={onEditMode}>{status || 'Место для статуса'}</h4>
    )
})