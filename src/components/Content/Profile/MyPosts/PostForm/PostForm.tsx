import React from 'react'
import {SingleTextareaForm} from '../../../../UI/Form/SingleTextareaForm/SingleTextareaForm'

type PostControlPropsType = {
    onSubmit: (text: string) => void
}

export const PostsForm: React.FC<PostControlPropsType> = React.memo(props => {
    const {onSubmit} = props

    return (
        <div>
            <SingleTextareaForm onSubmit={onSubmit}/>
        </div>
    )
})