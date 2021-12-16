import React, {useState} from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState(['fish', 'bear', 'bird', 'cow', 'dog'])
  
  return (
    <div className="App">
      {arr.map(e=><h2>{e}</h2>)}
    </div>
  );
}

export default App;
