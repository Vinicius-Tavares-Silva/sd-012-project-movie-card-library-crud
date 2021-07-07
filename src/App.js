import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <h1>Movie Card Library CRUD</h1>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
