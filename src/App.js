import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
// Link
// Esse post https://qastack.com.br/programming/32128978/react-router-no-not-found-route me ajudou a resolver a Route NotFound
