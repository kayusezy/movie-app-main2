// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
