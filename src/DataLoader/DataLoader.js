import React, {Component} from 'react'
import {connect} from "react-redux"
import {getServerDataThunk} from "../redux/server-reducer"

class DataLoader extends Component {

    componentDidMount() {
        const {getServerDataThunk} = this.props
        getServerDataThunk()
    }

    render() {

        return (
            <>

            </>
        )
    }
}


export default connect (null, {getServerDataThunk}) (DataLoader)