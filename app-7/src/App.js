import React, {useState} from 'react';
import NewTask from './NewTask';
import List from './List'
import './App.css';

function App() {
  
  const [todoList, setTodoList] = useState([])

 
  const newListItem = (task) => {
    setTodoList(todoList.concat(task))
}
 

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask add={newListItem}/>
      <List tasks={todoList} />
    </div>
  );
}

export default App;
