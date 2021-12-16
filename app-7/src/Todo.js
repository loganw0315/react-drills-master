import React from 'react';

function Todo(props){
    
    return(
        <>
        <p key={`${props.index}`}>{props.task}</p>
        </>
    )
}

export default Todo