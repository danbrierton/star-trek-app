import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './pages/Demo.js';
import { Router, Route } from 'react-router';
import Home from './pages/Home.js';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/demo">
          <Demo />
        </Route>
      </Router>

    </div>
  );
}

export default App;
