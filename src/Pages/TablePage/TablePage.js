import React from 'react'
import './TablePage.css'
import {Layout, Tabs} from "antd"
import TableWrapper from "./TableContainer/TableContainer";
const {Content} = Layout
const { TabPane } = Tabs


function TablePage() {
    function callback(key) {
        console.log(key)
    }


    return (

        <Content className="content">

            <div className="tabs__wrapper">

                <Tabs defaultActiveKey="1" onChange={callback}>

                    <TabPane tab="1" key="1">
                        <TableWrapper/>
                    </TabPane>
                    <TabPane tab="2" key="2">
                        <TableWrapper/>
                    </TabPane>

                </Tabs>

            </div>



        </Content>
    )
}

export default TablePage