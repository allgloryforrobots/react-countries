
import React from "react";
import {connect} from "react-redux";

import TableUI from "./TableUI/TableUI";



class TableContainer extends React.Component {

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

export default connect (mapStateToProps, {}) (TableContainer)


