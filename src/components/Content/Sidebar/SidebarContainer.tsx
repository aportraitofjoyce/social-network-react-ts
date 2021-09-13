import React from 'react'
import {useSelector} from 'react-redux'
import {Sidebar} from './Sidebar'
import {StateType} from '../../../types/common-types'
import {SidebarType} from '../../../types/sidebar-types'

export const SidebarContainer: React.FC = () => {
    const {dataForSidebar} = useSelector<StateType, SidebarType>(state => state.sidebar)

    return <Sidebar dataForSidebar={dataForSidebar}/>
}