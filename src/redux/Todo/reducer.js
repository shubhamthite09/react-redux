import {ADDTODO} from "./actionType";

const initialState ={
    todo:[],
}
export const reducertodo = (state=initialState,{type,payload}) =>{
    switch(type){
        case ADDTODO:
            return {...state,todo:[...state.todo,payload]}
        default:
            return state
    }
}