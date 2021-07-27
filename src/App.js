import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => <MovieList { ...props } /> }
        />
        <Route
          exact
          path="/movies/new"
          render={ (props) => <NewMovie { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route><NotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
