import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from './Home';
import Details from './Details';
import Signup from './Signup';
import './App.css';

const image = 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F026%2F489%2Fcrying.jpg'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/details'>Details</Link>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/details'>
            <Details image={image}/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
