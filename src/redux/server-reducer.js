import {readServerDataDAL} from "../api/axios";

const GET_SERVER_DATA = 'GET_SERVER_DATA'


let initialState = {
    sortedServerData: null,
}

export const serverReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVER_DATA:
            return {
                ...state,
                sortedServerData: action.sortedServerData
            }
        default:
            return state
    }
}

const setServerData = (sortedServerData) => ({ type: GET_SERVER_DATA,  sortedServerData})

export const getServerDataThunk = () => async (dispatch) => {

    const serverData = await readServerDataDAL()

    const sortedServerData = serverData.data

    dispatch(setServerData(sortedServerData))
}


