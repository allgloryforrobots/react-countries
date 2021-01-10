import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import {serverReducer} from "./server-reducer";
import {localReducer} from "./local-reducer";




let rootReducer = combineReducers({
    serverReducer,
    localReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


export default store