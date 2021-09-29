import React from 'react'
import {dataForSidebarType} from '../../../types/sidebar-types'
import {Link} from 'react-router-dom'
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material'

type SidebarPropsType = {
    dataForSidebar: dataForSidebarType[]
}

// TODO: Need to fix active Link
export const Sidebar: React.FC<SidebarPropsType> = React.memo(props => {
    const {dataForSidebar} = props

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