import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ MovieList } />
      <Route path="/movies/:id" exact component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" exact component={ EditMovie } />
      <Route path="" component={ NotFound } />
    </BrowserRouter>
  );
}

export default Routes;
