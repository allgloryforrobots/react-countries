import React, {Component} from 'react'
import {connect} from "react-redux"
import {getLocalsThunk, getServerDataThunk} from "../redux/server-reducer"


class DataLoader extends Component {

    componentDidMount() {
        const {getServerDataThunk, getLocalsThunk} = this.props
        getServerDataThunk()
        getLocalsThunk()
    }

    render() {

        return (
            <>

            </>
        )
    }
}


export default connect (null, {getServerDataThunk, getLocalsThunk}) (DataLoader)