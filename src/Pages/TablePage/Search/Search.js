import React from 'react'
import {Button, Input, Select} from 'antd'
import {connect} from "react-redux";
import {getServerDataThunk, setPage} from "../../../redux/server-reducer"
import { useMediaQuery } from 'react-responsive'
const { Option } = Select




function Search({getServerDataThunk, setPage}) {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

    let [value, setValue] = React.useState('')
    let [select, setSelect] = React.useState('name/')

    const valueHandler = e => setValue(e.target.value.toLowerCase().trim())
    const selectHandler = value => setSelect(value)

    const onServerGo = async (select, value) => {
        let params = select + value
        if (select === 'all') {
            params = 'all'
        }
        await getServerDataThunk(params)
        setPage(1)

    }

    const selectAfter = (
        <Select defaultValue="name/"
                onChange = {value => selectHandler(value)}
                className="select-after">
            <Option value="name/">По названию</Option>
            <Option value="capital/">По столице</Option>
            <Option value="region/">По региону</Option>
            <Option value="all">Вывести все</Option>
        </Select>
    )


    return (
        <div  style={{
            margin: '0 auto',
            maxWidth: 800,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row'
        }}>
            <Input addonAfter={selectAfter}
                   onChange={e => valueHandler(e)}
                   style={{
                       margin: 3,
                       maxWidth: 500
                   }}

                   value={value} />
            <Button
                style={{
                    width: 100,
                    margin: 3
                }}
                onClick={() => onServerGo(select, value)}>Поиск</Button>
        </div>
    )
}


export default connect (null, {getServerDataThunk, setPage}) (Search)