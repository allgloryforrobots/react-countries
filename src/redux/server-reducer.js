import {readServerDataDAL} from "../api/axios"

const SET_SERVER_DATA = 'serverReducer/GET_SERVER_DATA'
const SET_PAGE = 'serverReducer/SET_PAGE'
const SET_COUNT = 'serverReducer/SET_COUNT'
const SET_PARAMS = 'serverReducer/SET_PARAMS'
const SET_NO_DATA = 'serverReducer/SET_NO_DATA'

const tabCountries = 10


let initialState = {
    sortedServerData: null,
    pageResults: 10,
    count: null,
    page: 1,
    params: 'all',
    noData: false,
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


