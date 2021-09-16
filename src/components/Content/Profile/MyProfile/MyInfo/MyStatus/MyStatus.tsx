import React, {ChangeEvent, KeyboardEvent, useCallback, useEffect, useState} from 'react'

type MyStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
}

export const MyStatus: React.FC<MyStatusPropsType> = React.memo(props => {
    const {status, updateUserStatus, isOwner} = props

    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.status)

    useEffect(() => setTitle(status), [status])

    const onEditMode = useCallback(() => setEditMode(true), [])

    const offEditMode = useCallback(() => {
        updateUserStatus(title)
        setEditMode(false)
    }, [title, updateUserStatus])

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }, [])

    const onKeyPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') offEditMode()
    }, [offEditMode])

    return isOwner && editMode
        ? <input type='text'
                 onBlur={offEditMode}
                 onChange={onChangeHandler}
                 onKeyPress={onKeyPressHandler}
                 autoFocus
                 value={title}/>
        : <h4 onDoubleClick={onEditMode}>{status || 'Место для статуса'}</h4>
})