import { Table } from 'antd';
import React from "react";

const columns = [
    { title: 'Название страны', dataIndex: 'name' },
    { title: 'Флаг', dataIndex: 'flag' },

    {
        title: 'Избранное',
        dataIndex: '',
        key: 'x',
        render: () => <a>Добавить</a>,
    },
]

const data = [
    {
        key: 1,
        name: 'Россия',
        flag: 1,
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
]

const TableWrapper = () => {


    return (
        <div>
            <h4>Small size table</h4>
            <Table columns={columns}
                   dataSource={data}
                   pagination={false}
                   expandable={{
                       expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                       rowExpandable: record => record.name !== 'Not Expandable',
                   }}
                   size="small" />
        </div>

    )
}

export default TableWrapper


