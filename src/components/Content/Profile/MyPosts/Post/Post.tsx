import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    src: string
    alt: string
    text: string
    likes: number
}

export const Post: React.FC<PostPropsType> = React.memo(props => {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar_container}>
                <img src={props.src} alt={props.alt}/>
            </div>

            <div className={s.content_container}>
                <div>{props.text}</div>
                <div>Likes: {props.likes}</div>
            </div>

        </div>
    )
})