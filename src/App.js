import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (

    <BrowserRouter>
      <div>
        <h1>Movie Card Library CRUD</h1>
      </div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="" component={ NotFound } />

      </Switch>
    </BrowserRouter>

  );
}

export default App;
