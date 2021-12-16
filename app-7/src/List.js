import React from 'react';
import Todo from "./Todo"

const List = props => {
    return(
        <>
        {props.tasks.map((e, i)=><Todo key={i} index={i} task={e}/>)}
        </>
    )

}

export default List