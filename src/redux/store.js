import {legacy_createStore,combineReducers, applyMiddleware} from "redux";
import {reducers} from "./Counter/reducer"
import {reducertodo} from "./Todo/reducer"


const myMiddleware = (store) => (Dispatch) => (action) =>{
    if(typeof action === "function"){
        return action();
    }
}

const reducer = combineReducers({reducers,reducertodo})

export const store = legacy_createStore(reducer,applyMiddleware(myMiddleware))