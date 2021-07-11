import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" render={ (componentProps) => <MovieDetails {...componentProps} /> } />
        <Route path="/movies/:id/edit" render={ (componentProps) => <EditMovie {...componentProps} /> } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
