import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route exact path="" component={ NotFound } />
      <Router>
        <div>Movie Card Library CRUD</div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
