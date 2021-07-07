import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
