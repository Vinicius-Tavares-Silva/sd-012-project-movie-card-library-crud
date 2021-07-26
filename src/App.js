import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Movie Card Library CRUD</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={ MovieList }
            />
            <Route
              path="/movies/:id/edit"
              render={ (props) => (
                <EditMovie { ...props } />
              ) }
            />
            <Route
              path="/movies/new"
              render={ () => (
                <NewMovie />
              ) }
            />
            <Route
              path="/movies/:id"
              render={ (props) => (
                <MovieDetails { ...props } />
              ) }
            />
            <Route
              path="*"
              component={ NotFound }
              /* render={ (props) => (
                <section>
                  <MovieList />
                  {(props.location.pathname === '/') ? <Redirect to="/" /> : <NotFound />}
                </section>) } */
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
