import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <h1>Movie Card Library CRUD</h1>
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id/edit"
            render={ (routerProps) => <EditMovie { ...routerProps } /> }
          />
          <Route
            path="/movies/:id"
            render={ (routerProps) => <MovieDetails { ...routerProps } /> }
          />
          <Route exact path="/" component={ MovieList } />
          <Route component={ NotFound } />
        </Switch>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </Router>
    );
  }
}

export default App;
