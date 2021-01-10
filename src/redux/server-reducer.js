import {readServerDataDAL} from "../api/axios"

const SET_SERVER_DATA = 'serverReducer/GET_SERVER_DATA'
const SET_PAGE = 'serverReducer/SET_PAGE'
const SET_COUNT = 'serverReducer/SET_COUNT'
const SET_PARAMS = 'serverReducer/SET_PARAMS'
const SET_NO_DATA = 'serverReducer/SET_NO_DATA'

const TABLE_RERENDER ='localReducer/TABLE_RERENDER'
const SET_LOCALS ='localReducer/SET_LOCALS'
const SET_VARIANT ='localReducer/SET_VARIANT'

const tabCountries = 10


let initialState = {
    sortedServerData: null,
    pageResults: 10,
    count: null,
    page: 1,
    params: 'all',
    noData: false,
    locals: [],
    tableRerender: 1,
    variant: 'search'
}

export const serverReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SERVER_DATA:
            return {
                ...state,
                sortedServerData: action.sortedServerData
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case SET_COUNT:
            return {
                ...state,
                count: action.count
            }
        case SET_PARAMS:
            return {
                ...state,
                params: action.params
            }
        case SET_NO_DATA:
            return {
                ...state,
                noData: action.noData
            }
        case TABLE_RERENDER:
            return {
                ...state,
                tableRerender: Math.random()
            }
        case SET_LOCALS:
            return {
                ...state,
                locals: action.locals
            }
        case SET_VARIANT:
            return {
                ...state,
                variant: action.variant
            }
        default:
            return state
    }
}

export const setServerData = (sortedServerData) => ({ type: SET_SERVER_DATA,  sortedServerData})
export const setPage = (page) => ({ type: SET_PAGE,  page})
export const setCount = (count) => ({ type: SET_COUNT,  count})
export const setNoData = (noData) => ({ type: SET_NO_DATA, noData})
export const getServerDataThunk = (params = 'all') => async (dispatch) => {

    let serverData = null

    try {
        serverData = await readServerDataDAL(params)
        dispatch(setNoData(false))
    } catch(err) {
        dispatch(setNoData(Math.random()))
        return
    }


    const sortedServerData = serverData.data

    dispatch(setServerData(sortedServerData))

    const count = Math.ceil(Object.keys(sortedServerData).length/tabCountries)

    dispatch(setCount(count))

}



export const tableRerenderAction = () => ({type: TABLE_RERENDER})
export const setLocals = (locals) => ({type: SET_LOCALS, locals})
export const setVariant = (variant) => ({type: SET_VARIANT, variant})
export const getLocalsThunk = () => async (dispatch) => {

    let locals = []

    for (let prop in localStorage) {
        if( localStorage.hasOwnProperty( prop ) ) {
            const awaitProp = await readServerDataDAL(`name/${prop}`)

            const dataProp = awaitProp.data

            let pushProp = null
            dataProp.forEach(el => pushProp = el)

            locals.push(pushProp)
        }
    }

    dispatch(setLocals(locals))
    return locals

}

export const setIzbrThunk = () => async(dispatch) => {


    let locals = []

    for (let prop in localStorage) {
        if( localStorage.hasOwnProperty( prop ) ) {
            const awaitProp = await readServerDataDAL(`name/${prop}`)

            const dataProp = awaitProp.data

            let pushProp = null
            dataProp.forEach(el => pushProp = el)

            locals.push(pushProp)
        }
    }



        dispatch(setServerData(locals))
        const count = Math.ceil(Object.keys(locals).length/10)
        dispatch (setCount(count))
        dispatch(setVariant("izbr"))
}


export const setSearchThunk = () => async(dispatch) => {

    let serverData = null

    try {
        serverData = await readServerDataDAL('all')
        dispatch(setNoData(false))
    } catch(err) {
        dispatch(setNoData(Math.random()))
        return
    }


    const sortedServerData = serverData.data
    dispatch(setServerData(sortedServerData))
    const count = Math.ceil(Object.keys(sortedServerData).length/tabCountries)
    dispatch(setCount(count))
    dispatch(setVariant("search"))
}

