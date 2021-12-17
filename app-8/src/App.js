import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [apiData, setApiData] = useState('')
  const [types,  setTypes] = useState('')

  
  React.useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/1/").then((res) => {
      setApiData(res.data)
      setTypes(res.data.types.map(e=>e.type.name))
      console.log(res.data.types[0].type.name);
    })
  },[])

console.log(types);
  return (
    <div className="App">
      <h2>Name: {apiData.name}</h2>
      <h2>Types: {types[0]}, {types[1]}</h2>
      <h2>Height: {apiData.height}</h2>
    </div>
  );
}

export default App;
