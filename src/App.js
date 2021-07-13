import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, NotFound, EditMovie, NewMovie, MovieDetails } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="" component={ NotFound } />
      </div>
    </BrowserRouter>
  );
}

export default App;
