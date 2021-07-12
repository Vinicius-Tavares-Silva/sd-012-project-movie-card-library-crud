import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route path="/" component={ MovieList } />
        </Switch>
        <Route path="" component={ NotFound } />
      </Router>
    </BrowserRouter>
  );
}

export default App;
