import React, {Component} from 'react'
import {connect} from "react-redux"
import {getServerDataThunk} from "../redux/server-reducer"

class Test extends Component {

    componentDidMount() {
        const {getServerDataThunk} = this.props
        getServerDataThunk()
    }

    render() {
        const {sortedServerData} = this.props
        console.log('State: sortedServerData', sortedServerData)
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sortedServerData: state.serverReducer.sortedServerData
    }
}

export default connect (mapStateToProps, {getServerDataThunk}) (Test)