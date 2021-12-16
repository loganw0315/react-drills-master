import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <img src={props.image} alt="" />
    </div>
  );
}

export default App;
