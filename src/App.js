import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={ (props) => <MovieList { ...props } /> } />
        <Route path="/movies/new" render={ (props) => <NewMovie { ...props } /> } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route><NotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
