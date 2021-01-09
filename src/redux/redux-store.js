import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import {serverReducer} from "./server-reducer";




let rootReducer = combineReducers({
    serverReducer: serverReducer,
})


const store = createStore(rootReducer, applyMiddleware(thunk))


export default store