import React from 'react'

type MyInfoContactsPropsType = {
    title: string
    value: string
}
export const MyContacts: React.FC<MyInfoContactsPropsType> = React.memo(props => {
    const {title, value} = props

    return (
        <div>
            <span>{title}</span>
            <span>{value}</span>
        </div>
    )
})