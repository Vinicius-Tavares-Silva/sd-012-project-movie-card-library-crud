import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages';

function App() {
  return (

    <BrowserRouter>
      <div>
        <h1>Movie Card Library CRUD</h1>
      </div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="" component={ NotFound } />

      </Switch>
    </BrowserRouter>

  );
}

export default App;
