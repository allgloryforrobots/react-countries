import React from 'react'
import {Button, Spin, Table} from "antd"
import {connect} from "react-redux"

import {getLocalsThunk, setIzbrThunk, setServerData, tableRerenderAction} from "../../../../redux/server-reducer";


function TableUI({sortedServerData, page, pageResults, variant,
                     tableRerenderAction, setIzbrThunk}) {


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
            dataIndex: 'myList',
            key: 'myList',
            render: (text, record) => {
                let countryId = record.name
                let isInStorage = localStorage.getItem([countryId].toString())
                return (
                    <Button
                        onClick={() => {
                            if (isInStorage) {
                                localStorage.removeItem([countryId].toString())
                                if (variant === 'izbr') {
                                    setIzbrThunk()
                                }

                            } else {
                                localStorage.setItem([countryId].toString(), countryId)
                            }


                            tableRerenderAction()

                        }}
                        type="link">
                        {isInStorage ? 'Удалить' : 'Добавить'}
                    </Button>
                )
            }
        },
    ]


    const countriesPortion = sortedServerData?.slice(pageResults*(page-1), pageResults*page) || null

    const data = countriesPortion ?
        [
            ...countriesPortion.map((country, index) => {


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
        countriesPortion ?
                <div>
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

const mapStateToProps = (state) => {
    return {
        sortedServerData: state.serverReducer.sortedServerData,
        page: state.serverReducer.page,
        pageResults: state.serverReducer.pageResults,
        tableRerender: state.serverReducer.tableRerender,
        locals: state.serverReducer.locals,
        variant: state.serverReducer.variant,
    }
}

export default connect (mapStateToProps, {tableRerenderAction, getLocalsThunk, setServerData, setIzbrThunk}) (TableUI)