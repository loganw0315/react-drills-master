import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [apiData, setApiData] = useState([])


  React.useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/1/").then((res) => {
      setApiData(res.data)
      console.log(res.data);
    })
  },[])

  return (
    <div className="App">
      <h2>Name: {apiData.name}</h2>
      {/* <h2>Species: {apiData.types}</h2> */}
      {/* <h2>Types: {[apiData.types]}</h2> */}
      <h2>Height: {apiData.height}</h2>
    </div>
  );
}

export default App;
