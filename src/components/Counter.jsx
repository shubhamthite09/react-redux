import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addAction,reduceAction} from "../redux/Counter/action";
function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((store)=>store.reducers.counter);
    function handeladd(){
        dispatch(addAction());
    }
    function handelreduce(){
        dispatch(reduceAction())
    }
return (
    <div>
    <div>Counter : {counter}</div>
    <button onClick={handeladd} >+</button>
    <button onClick={handelreduce} >-</button>
    </div>
)
}

export default Counter