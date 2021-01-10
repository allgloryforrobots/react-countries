import React from 'react'
import {Layout, Menu} from "antd"
import {connect} from "react-redux";
import {setIzbrThunk, setSearchThunk, setVariantThunk} from "../redux/server-reducer";

const {Header} = Layout

function HeaderMenu({setIzbrThunk, setSearchThunk}) {


    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['search']}>
                <Menu.Item
                    onClick={() => setSearchThunk()}
                    key="search">
                   Поиск
                </Menu.Item>

                <Menu.Item
                    onClick={() => setIzbrThunk()}
                    key="izbr">
                   Избранное
                </Menu.Item>
            </Menu>
        </Header>
    )
}


export default connect (null, {setIzbrThunk, setSearchThunk}) (HeaderMenu)