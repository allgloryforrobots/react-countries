import React from 'react'
import {Layout, Menu} from "antd"
import {Link} from "react-router-dom";
const {Header} = Layout

function HeaderMenu() {
    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['tables']}>
                <Menu.Item key="tables">
                    <Link to="/">Таблицы</Link>
                </Menu.Item>

                <Menu.Item key="icons">
                    <Link to="/icons">Иконки</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default HeaderMenu;