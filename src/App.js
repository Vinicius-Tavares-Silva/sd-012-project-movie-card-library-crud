import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotFound } from 'http-errors';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <Router>
      <Switch>
        <Route patch="/" exact component={ MovieList } />
        <Route patch="/movies/:id" exact component={ MovieDetails } />
        <Route patch="/movies/new" exact component={ NewMovie } />
        <Route patch="/movies/:id/edit" exact component={ EditMovie } />
        <Route patch="" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
