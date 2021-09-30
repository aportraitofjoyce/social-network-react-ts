import React from 'react'
import {PostsForm} from './PostForm/PostForm'
import {dataForMyPostsType} from '../../../../types/profile-types'
import {Posts} from './Posts/Posts'

type MyPostsPropsType = {
    addPost: (text: string) => void
    dataForMyPosts: dataForMyPostsType[]
}

export const MyPosts: React.FC<MyPostsPropsType> = React.memo(props => {
    const {addPost, dataForMyPosts} = props

    return (
        <section>
            <PostsForm onSubmit={addPost}/>
            <Posts dataForMyPosts={dataForMyPosts}/>
        </section>
    )
})