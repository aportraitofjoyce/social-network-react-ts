import React, {useMemo} from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {v1} from 'uuid'
import {PostsForm} from './PostForm/PostForm'
import {dataForMyPostsType} from '../../../../types/profile-types'

type MyPostsPropsType = {
    addPost: (text: string) => void
    dataForMyPosts: dataForMyPostsType[]
}

export const MyPosts: React.FC<MyPostsPropsType> = React.memo(props => {
    const {addPost, dataForMyPosts} = props

    const mappedPosts = useMemo(() => dataForMyPosts.map(item => <Post key={v1()}
                                                                       text={item.text}
                                                                       src={item.src}
                                                                       alt={item.alt}
                                                                       likes={item.likes}/>), [dataForMyPosts])
    return (
        <section className={s.wrapper}>
            <PostsForm onSubmit={addPost}/>
            {mappedPosts}

        </section>
    )
})