import {connect} from 'react-redux'
import {Sidebar} from './Sidebar'
import {StateType} from '../../../types/types'

const mapStateToProps = (state: StateType) => (
    {
        dataForSidebar: state.sidebar.dataForSidebar
    }
)

export const SidebarContainer = connect(mapStateToProps)(Sidebar)