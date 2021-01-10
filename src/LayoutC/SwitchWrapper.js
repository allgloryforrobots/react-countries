import React from 'react'
import {Route, Switch} from "react-router-dom"
import TablePage from "../Pages/TablePage/TablePage";


function SwitchWrapper() {
    return (
        <Switch>

            <Route path="/">
                <TablePage/>

            </Route>



        </Switch>
    )
}

export default SwitchWrapper;