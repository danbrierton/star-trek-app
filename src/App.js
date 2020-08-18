import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router';
import Home from './pages/Home.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
