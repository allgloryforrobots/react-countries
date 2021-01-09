import React from 'react'
import './TablePage.css'
import {Layout, Tabs} from "antd"
const {Content} = Layout
const { TabPane } = Tabs


function TablePage() {
    function callback(key) {
        console.log(key)
    }


    return (

        <Content className="content">

            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="1" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>


        </Content>
    )
}

export default TablePage