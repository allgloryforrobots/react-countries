import { Table } from 'antd';
import React from "react";
import {connect} from "react-redux";
import {getServerDataThunk} from "../../../redux/server-reducer";
import TableUI from "./TableUI/TableUI";



class TableContainer extends React.Component {
    componentDidMount() {
        const {getServerDataThunk} = this.props
        getServerDataThunk()
    }



    render() {
        const {sortedServerData} = this.props




        return (
            <TableUI sortedServerData={sortedServerData}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sortedServerData: state.serverReducer.sortedServerData
    }
}

export default connect (mapStateToProps, {getServerDataThunk}) (TableContainer)


