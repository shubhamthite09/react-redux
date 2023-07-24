import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodoByMidleware} from "../redux/Todo/action";

function Todo() {
  const dispatch = useDispatch();
  const [input,setInput] = useState("")
  const counter = useSelector((store)=>store.reducertodo.todo);
  const handelAdd = ()=>{
    const obj = {
      title:input,
      status:false,
    }
    dispatch(addTodoByMidleware(obj));
  };
  const handelChange =(e)=>{
    setInput(e.target.value);
  }
  return (
    <div>
        <input type='text' value={input} onChange={handelChange}></input>
        <button onClick={handelAdd}>Add Todo</button>
        {<div>{counter.map((ele)=><div key={ele.title}>
        <p>{ele.title}</p>
        <p>{ele.status}</p>
      </div>)}
    </div>}
    </div>
  )
}

export default Todo
