import React from 'react'
import './TablePage.css'
import {Layout, Spin, Tabs} from "antd"
import TableContainer from "./TableContainer/TableContainer";
import {connect} from "react-redux";
import {setPage} from "../../redux/server-reducer";

const {Content} = Layout
const { TabPane } = Tabs


function TablePage({setPage, count, page}) {

    function callback(key) {
        console.log(key)
        setPage(key)
    }

    return (
        <Content className="content">

            <div className="tabs__wrapper">
                {
                    count ?
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            {
                                [...Array(count)].map((x, i) =>
                                    <TabPane tab={i} key={i}>
                                        <TableContainer/>
                                    </TabPane>
                                )
                            }
                        </Tabs>
                        : <Spin/>
                }



            </div>

        </Content>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.serverReducer.count,
        page: state.serverReducer.page,
    }
}

export default connect (mapStateToProps, {setPage}) (TablePage)