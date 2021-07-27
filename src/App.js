import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route exact path="/" component={ MovieList } />
        <Route exact path="" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;

// Recebi ajuda do Miguel Retroz para entender a lógica do Requisito 1. https://github.com/MiguelRetroz
