import {REDUCE,ADD} from "./actionTypes";
import {setData,getData} from "../../utils/localFunctions"

const initialState ={
    counter : getData("count") || 0,
}

export const reducers = (state=initialState,{type,payload})=>{
    switch(type){
        case ADD:
            setData("count",state.counter+payload);
            return {...state,counter:state.counter+payload};
        case REDUCE:
            setData("count",state.counter-payload);
            return {...state,counter:state.counter-payload};
        default:
            return state;
    }
}