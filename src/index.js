import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router';
import Home from './pages/Home.js';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
      <Router history={history}>
        <Route strict path = "/">
          <Home />
        </Route>
      </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();