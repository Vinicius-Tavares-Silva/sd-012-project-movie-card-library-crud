import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>Movie Card Library CRUD</h1>
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route exact path="/" component={ MovieList } />
          <Route path="/notfound" component={ NotFound } />
          <Redirect to="/notfound" />
        </Switch>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </BrowserRouter>

    );
  }
}

export default App;
