import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react'

type MyStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const MyStatus: React.FC<MyStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.status)

    useEffect(() => setTitle(props.status), [props.status])

    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        props.updateUserStatus(title)
        setEditMode(false)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') offEditMode()
    }

    return (
        editMode
            ? <input type="text"
                     onBlur={offEditMode}
                     onChange={onChangeHandler}
                     onKeyPress={onKeyPressHandler}
                     autoFocus
                     value={title}/>

            : <h4 onDoubleClick={onEditMode}>
                {props.status || 'Место для статуса'}
            </h4>
    )
}