import React from 'react'
import {dataForMyPostsType} from '../../../../../types/profile-types'
import {Post} from './Post/Post'
import {v1} from 'uuid'

type PostsPropsType = {
    dataForMyPosts: dataForMyPostsType[]
}

export const Posts: React.FC<PostsPropsType> = React.memo(props => {
    const {dataForMyPosts} = props

    const mappedPosts = dataForMyPosts.map(item => <Post key={v1()}
                                                         text={item.text}
                                                         src={item.src}
                                                         alt={item.alt}
                                                         likes={item.likes}/>)

    return (
        <div>
            {mappedPosts}
        </div>
    )
})