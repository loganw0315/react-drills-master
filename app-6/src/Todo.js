import React from 'react';

function Todo(props){
    return(
        <>
        {props.todoList.map((e,i)=><h2 key={i}>{e}</h2>)}
        </>
    )
}

export default Todo