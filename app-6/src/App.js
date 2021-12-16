import React, {useState} from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [userInput, setUserInput] = useState('')
  const [todoList, setTodoList] = useState([])

  const inputChange = (e) => {
    setUserInput(e.target.value)
  }

  const newListItem = (e) => {
    e.preventDefault();
    setTodoList(todoList.concat(userInput))
    setUserInput('');
  }


  return (
    <div className="App">
     <h1>My to-do list:</h1>
     <form>
        <input id="input" type="text" value={userInput} onChange={inputChange}/>
        <button onClick={newListItem}>Add</button>
     </form>
     <Todo todoList={todoList}/>
    </div>
  );
}

export default App;
