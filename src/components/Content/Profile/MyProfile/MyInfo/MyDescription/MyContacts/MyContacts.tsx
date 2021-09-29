import React from 'react'
import s from '../../../MyProfile.module.css'

type MyInfoContactsPropsType = {
    title: string
    value: string
}
export const MyContacts: React.FC<MyInfoContactsPropsType> = React.memo(props => {
    const {title, value} = props

    return (
        <div className={s.contactItem}>
            {value &&
			<>
				<span>{title}</span>
				<span><a href={`${value}`} target='_blank' rel='noreferrer'>{value}</a></span>
			</>}
        </div>
    )
})