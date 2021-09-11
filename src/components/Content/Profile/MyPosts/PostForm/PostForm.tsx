import s from '../MyPosts.module.css'
import React from 'react'
import {SingleTextareaForm} from '../../../../UI/Form/SingleTextareaForm/SingleTextareaForm'

type PostControlPropsType = {
    onSubmit: (text: string) => void
}

export const PostsForm: React.FC<PostControlPropsType> = ({onSubmit}) => {
    return (
        <div className={s.control_wrapper}>
            <SingleTextareaForm onSubmit={onSubmit}/>
        </div>
    )
}