import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route
            path="/"
            exact
            render={
              (props) => <MovieList { ...props } />
            }
          />
          <Route
            path="/movies/new"
            exact
            render={
              (props) => <NewMovie { ...props } />
            }
          />
          <Route
            path="/movies/:id/edit"
            exact
            render={
              (props) => <EditMovie { ...props } />
            }
          />
          <Route
            path="/movies/:id"
            exact
            render={
              (props) => <MovieDetails { ...props } />
            }
          />
          <Route><NotFound /></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
