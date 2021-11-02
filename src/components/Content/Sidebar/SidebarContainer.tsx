import React from 'react'
import {useSelector} from 'react-redux'
import {Sidebar} from './Sidebar'
import {SidebarType} from '../../../types/sidebar-types'
import {RootState} from '../../../redux/store'

export const SidebarContainer: React.FC = React.memo(() => {
    const {dataForSidebar} = useSelector<RootState, SidebarType>(state => state.sidebar)

    return <Sidebar dataForSidebar={dataForSidebar}/>
})