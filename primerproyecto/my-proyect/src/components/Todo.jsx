

import React, { useState } from "react";
import "./Todo.css"



export default function Todo(){
    const [toDo, setTodo] = useState("");

    const [todoList, setToDoList] =useState([
        "Unirse a los X-Men",
        "Enamorarse",
        "Matar a los malos",
        "Superar el corazón roto",

    ]);
    console.log(toDo);
    return(
        
            <div className="Input">
            <h2> Lobezno's To do List </h2>
            <ul>
                {todoList.map((item)=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <label htmlFor="Todo"> New </label>
            <input type="text"
            id="todo"
            value={toDo}
            onChange={(event)=> setTodo(event.target.value)} />
        <button onClick={()=> setToDoList([...todoList, toDo])}>Add</button>
        </div>
        
    )
}
