import React, {useState} from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState(['fish', 'bear', 'bird', 'cow', 'dog'])
  const [filter, setFilter] = useState('')
  
  const onChangeHandler = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="App">
     <input type="text" onChange={onChangeHandler}/>
     <>
     {arr.filter(elem=>elem.includes(filter)).map(e=><h2>{e}</h2>)}
     </>
     
    </div>
  );
}

export default App;
