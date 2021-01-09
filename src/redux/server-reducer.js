import {readServerDataDAL} from "../api/axios"

const SET_SERVER_DATA = 'serverReducer/GET_SERVER_DATA'
const SET_PAGE = 'serverReducer/SET_PAGE'
const SET_COUNT = 'serverReducer/SET_COUNT'

const tabCountries = 25


let initialState = {
    sortedServerData: null,
    pageResults: 25,
    count: null,
    page: 1
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
        default:
            return state
    }
}

const setServerData = (sortedServerData) => ({ type: SET_SERVER_DATA,  sortedServerData})
export const setPage = (page) => ({ type: SET_PAGE,  page})
export const setCount = (count) => ({ type: SET_COUNT,  count})

export const getServerDataThunk = () => async (dispatch) => {

    const serverData = await readServerDataDAL()

    const sortedServerData = serverData.data

    dispatch(setServerData(sortedServerData))

    const count = Object.keys(sortedServerData).length/tabCountries
    console.log('count' , count)

    dispatch(setCount(count))

}


