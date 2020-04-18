import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import TestContainer from "./TestContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <Route path="/super" component={TestContainer}> Super </Route>
          </Router>
      </header>
    </div>
  );
}

export default App;
