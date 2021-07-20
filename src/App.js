import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movie/:id" component={ MovieDetails } />
        <Route exact path="/movie/new" component={ NewMovie } />
        <Route exact path="/movie/:id/edit" component={ EditMovie } />
        <Route exact path="" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
