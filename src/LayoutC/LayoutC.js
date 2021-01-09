import React from 'react'
import {Layout} from 'antd'
import SwitchWrapper from "./SwitchWrapper";
import HeaderMenu from "./HeaderMenu";


function LayoutC() {

    return (
        <Layout>
            <HeaderMenu/>

            <SwitchWrapper/>

        </Layout>
    )
}

export default LayoutC;