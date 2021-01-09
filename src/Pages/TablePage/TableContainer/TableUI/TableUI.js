import React from 'react'
import {Spin, Table} from "antd";



const columns = [
    { title: 'Название страны', dataIndex: 'name' },
    { title: 'Флаг', dataIndex: 'flag' },

    {
        title: 'Избранное',
        dataIndex: '',
        key: 'x',
        render: () => <a href="#">Добавить</a>,
    },
]






function TableUI({sortedServerData}) {
    console.log('TableUI', sortedServerData)

    const data = sortedServerData ?
        [
            ...sortedServerData.map((country, index) => {
            return {
                key: index,
                name: country?.name,
                flag: country?.flag,
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
            }
        })
    ]
    : []




    return (
            sortedServerData ?
                <div>
                    <h4>Small size table</h4>
                    <Table columns={columns}
                           dataSource={data}
                           pagination={false}
                           expandable={{
                               expandedRowRender: record => <p style={{margin: 0}}>{record.description}</p>,
                               rowExpandable: record => record.name !== 'Not Expandable',
                           }}
                           size="small"/>
                </div>
                : <Spin/>
    )
}

export default TableUI