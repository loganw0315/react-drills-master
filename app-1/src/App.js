import React, { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');

  const onChangeHandler = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={onChangeHandler}/>
      <h2>{userInput}</h2>
    </div>
  );
}

export default App;
