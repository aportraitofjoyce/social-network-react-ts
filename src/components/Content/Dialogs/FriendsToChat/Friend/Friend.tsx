import {NavLink} from 'react-router-dom'
import s from '../../Dialogs.module.css'
import React from 'react'
import {PATH} from '../../../../../types/common-types'

type FriendPropsType = {
    name: string
}

export const Friend: React.FC<FriendPropsType> = React.memo(props => {
    const {name} = props

    return (
        <NavLink to={PATH.DIALOGS}
                 className={s.friend}
                 activeClassName={s.active}>
            {name}
        </NavLink>
    )
})