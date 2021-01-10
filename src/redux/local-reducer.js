import {readServerDataDAL} from "../api/axios";


const TABLE_RERENDER ='localReducer/TABLE_RERENDER'
const SET_LOCALS ='localReducer/SET_LOCALS'
const SET_VARIANT ='localReducer/SET_VARIANT'


let initialState = {
    locals: [],
    tableRerender: 1,
    variant: 'search'
}

export const localReducer = (state = initialState, action) => {
    switch (action.type) {
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

}