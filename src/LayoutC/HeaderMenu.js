import React from 'react'
import {Layout, Menu} from "antd"
import {connect} from "react-redux";
import {setVariant} from "../redux/local-reducer";
import {getServerDataThunk, setCount, setServerData} from "../redux/server-reducer";

const {Header} = Layout

function HeaderMenu({setVariant, locals, getServerDataThunk, setServerData, setCount}) {


    const izbrHandler = (variant) => {
        setVariant(variant)
        if (variant === "izbr") {
            setServerData(locals)
            const count = Math.ceil(Object.keys(locals).length/10)
            setCount(count)
        } else {
            getServerDataThunk('all')
        }

    }

    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['search']}>
                <Menu.Item
                    onClick={() => izbrHandler("search")}
                    key="search">
                   Поиск
                </Menu.Item>

                <Menu.Item
                    onClick={() => izbrHandler("izbr")}
                    key="izbr">
                   Избранное
                </Menu.Item>
            </Menu>
        </Header>
    )
}


const mapStateToProps = (state) => {
    return {
        locals: state.localReducer.locals
    }
}

export default connect (mapStateToProps, {setVariant, getServerDataThunk, setServerData, setCount}) (HeaderMenu)