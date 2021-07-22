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
              path="/movies/:id/edit"
              render={ () => (
                <EditMovie />
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
              render={ () => (
                <MovieDetails />
              ) }
            />
            <Route
              path="/"
              render={ (props) => (
                <section>
                  <MovieList />
                  {(props.location.pathname === '/') ? <Redirect to="/" /> : <NotFound />}
                </section>) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
