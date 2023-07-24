import {REDUCE,ADD} from "./actionTypes"

export const addAction = ()=>{
    return {type:ADD,payload:1};
}
export const reduceAction = ()=>{
    return {type:REDUCE,payload:1};
}