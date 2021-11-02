import React, {FC, memo} from 'react'
import {PATH} from '../../routes/routes'
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material'
import {Link} from 'react-router-dom'

type SidebarType = {
    name: string
    link: string
}

export const Sidebar: FC = memo(() => {
    const dataForSidebar: SidebarType[] = [
        {name: 'Profile', link: PATH.PROFILE},
        {name: 'Dialogs', link: PATH.DIALOGS},
        {name: 'Users', link: PATH.USERS}
    ]

    return (
        <aside>
            <nav aria-label='mainSidebar'>
                <List style={{padding: 0}}>
                    {dataForSidebar.map(item =>
                        <ListItem disablePadding key={item.name} component={Link} to={item.link}
                                  style={{textDecoration: 'none', color: 'unset'}}>
                            <ListItemButton>
                                <ListItemText primary={item.name}/>
                            </ListItemButton>
                        </ListItem>)}
                </List>
            </nav>
        </aside>
    )
})