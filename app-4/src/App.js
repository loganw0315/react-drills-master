import React, { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onChangeName = (e) => {
    setUserName(e.target.value);
  }

  const onChangePass = (e) => {
    setUserPassword(e.target.value);
  }

  const alertLogin = () => {
    alert(`Username: ${userName}, Password: ${userPassword}`);
  }


  return (
    <div className="App">
     <input type="text" onChange={onChangeName}/>
     <input type="text" onChange={onChangePass}/>
     <button onClick={alertLogin}>Login</button>
    </div>
  );
}

export default App;
