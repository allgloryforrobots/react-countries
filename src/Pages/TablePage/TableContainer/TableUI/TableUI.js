import React from 'react'
import {Spin, Table} from "antd";



const columns = [
    { title: 'Название страны', dataIndex: 'name', key: 'name' },
    {
        title: 'Флаг',
        dataIndex: 'flag',
        key: 'flag',
        render: (text, record) => {
            return (
                <img src={record.flag}
                     style={{width: 50}}
                     alt=""/>
            )
        },
    },


    {
        title: 'Избранное',
        dataIndex: '',
        key: 'x',
        render: () => <a href="#">Добавить</a>,
    },
]



function TableUI({sortedServerData}) {



    const data = sortedServerData ?
        [
            ...sortedServerData.map((country, index) => {


            return {
                key: index,
                name: country?.name,
                flag: country?.flag,
                ...country,
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
                               expandedRowRender: record => {

                                   return (
                                       <ul style={{margin: 0, }} key={Math.random() + 'ul'}>

                                           {
                                               Object.entries(record)
                                                   .filter(el =>
                                                       el[0] !== 'key'
                                                       && el[0] !==  'regionalBlocs'
                                                       && el[0] !==  'flag')
                                                   .map(el => {
                                                   return <li
                                                       style={{
                                                           listStyleType: 'none'
                                                       }}
                                                       key={Math.random() + 'li'}
                                                   >
                                                       <strong>
                                                           {
                                                               el[0]
                                                           }
                                                       </strong>
                                                       :&nbsp;
                                                       <span>
                                                           {
                                                               JSON.stringify(el[1], null, 2)
                                                                   .replace(/]|[[]/g, '')
                                                                   .replace(/}/g, '')
                                                                   .replace(/{/g, '')
                                                                   .replace(/"/g, '')
                                                               || 'Нет данных'
                                                           }
                                                       </span>
                                                   </li>
                                               })
                                               }

                                       </ul>
                                   )
                               },
                               rowExpandable: record => record.name !== 'Not Expandable',
                           }}
                           size="small"/>
                </div>
                : <Spin/>
    )
}

export default TableUI