import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as routes from './pages/index';

import './App.css';

function App() {
  const { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } = routes;
  return (
    <BrowserRouter>
      <div>Header</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
