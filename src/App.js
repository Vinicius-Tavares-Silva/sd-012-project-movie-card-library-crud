import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={ MovieList }
          />
          <Route
            path="/movies/:id"
            exact
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            path="/movies/new"
            exact
            component={ NewMovie }
          />
          <Route
            path="/movies/:id/edit"
            exact
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route
            component={ NotFound }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
