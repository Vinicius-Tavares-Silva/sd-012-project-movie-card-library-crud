import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ MovieList }
          />
          <Route
            exact
            path="/movies/new"
            render={ (props) => <NewMovie { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => (<MovieDetails { ...props } />) }
          />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route
            path=""
            component={ NotFound }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
