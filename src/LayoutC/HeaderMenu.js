import React from 'react'
import {Layout, Menu} from "antd"
import {connect} from "react-redux";
import {setVariant} from "../redux/local-reducer";
const {Header} = Layout

function HeaderMenu({setVariant}) {

    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['search']}>
                <Menu.Item
                    onClick={() => setVariant("search")}
                    key="search">
                   Поиск
                </Menu.Item>

                <Menu.Item
                    onClick={() => setVariant("izbr")}
                    key="izbr">
                   Избранное
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default connect (null, {setVariant}) (HeaderMenu)