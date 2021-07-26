import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <header>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
          <Route path="/movies/new" render={ () => <NewMovie /> } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route exact path="/" render={ () => <MovieList /> } />
          <Route path="*" render={ () => <NotFound /> } />
        </Switch>
      </BrowserRouter>
    </header>
  );
}

export default App;
