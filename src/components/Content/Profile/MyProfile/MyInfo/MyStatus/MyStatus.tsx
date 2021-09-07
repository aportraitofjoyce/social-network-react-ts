import React, {ChangeEvent, KeyboardEvent, useState} from 'react'

type MyStatusPropsType = {
    status: string
}

export const MyStatus: React.FC<MyStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.status)

    const onEditMode = () => setEditMode(true)
    const offEditMode = () => setEditMode(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
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
                     value={title}
            />

            : <h4 onDoubleClick={onEditMode}>
                {title}
            </h4>
    )
}