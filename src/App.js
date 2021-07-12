import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <header className="header">Movie Card Library CRUD</header>
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => <MovieList { ...props } movies="" /> }
        />
        <Route path="/movies/new" render={ (props) => <NewMovie { ...props } /> } />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie className="carregando" { ...props } /> }
        />
        <Route
          path="/movies/:id"
          render={
            (props) => <MovieDetails className="carregando" { ...props } movie="" />
          }
        />
        <Route path="" render={ () => <NotFound /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
