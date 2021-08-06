import {connect} from "react-redux";
import {StateType} from "../../../redux/store";
import {Sidebar} from "./Sidebar";

const mapStateToProps = (state: StateType) => (
    {
        dataForSidebar: state.sidebar.dataForSidebar
    }
)

export const SidebarContainer = connect(mapStateToProps)(Sidebar)