import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
