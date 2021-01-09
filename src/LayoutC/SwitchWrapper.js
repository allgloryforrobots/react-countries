import React from 'react'
import {Route, Switch} from "react-router-dom"
import TablePage from "../Pages/TablePage/TablePage";
import IconsPage from "../Pages/IconsPage/IconsPage";

function SwitchWrapper() {
    return (
        <Switch>

            <Route path="/">
                <TablePage/>

            </Route>

            <Route path="/icons">
                <IconsPage/>

            </Route>


        </Switch>
    )
}

export default SwitchWrapper;