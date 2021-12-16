import React from 'react';

function Todo(props){
    return(
        <>
        {props.todoList.map(e=><h2 key={e}>{e}</h2>)}
        </>
    )
}

export default Todo