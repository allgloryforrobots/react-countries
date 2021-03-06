import React from 'react'
import './TablePage.css'
import {Alert, Layout, Spin, Tabs} from "antd"
import {connect} from "react-redux";
import {setPage} from "../../redux/server-reducer";
import Search from "./Search/Search";
import { message} from 'antd';
import TableUI from "./TableContainer/TableUI/TableUI";

const {Content} = Layout
const { TabPane } = Tabs


function TablePage({setPage, count, page, noData, variant}) {

    function callback(key) {
        console.log('key', key)
        setPage(key)
    }

    React.useEffect(() => {
        if (noData !== false) {
            message.info('Поиск не дал результатов!')
        }
    })

    return (
        <Content className="content">

            {
                (variant === 'izbr') ? null : <Search/>
            }



            <div className="tabs__wrapper">
                {
                    count ?
                        <Tabs
                            defaultActiveKey="1"
                            onChange={callback}>
                            {
                                [...Array(count)].map((x, i) =>
                                    <TabPane tab={i+1} key={i+1}>
                                        <TableUI/>
                                    </TabPane>
                                )
                            }
                        </Tabs>
                        : variant === "izbr" ? <Alert message="Добавьте страну!" type="info" /> : <Spin/>
                }



            </div>

        </Content>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.serverReducer.count,
        page: state.serverReducer.page,
        noData: state.serverReducer.noData,
        locals: state.serverReducer.locals,
        variant: state.serverReducer.variant,
    }
}

export default connect (mapStateToProps, {setPage}) (TablePage)