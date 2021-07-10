import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/movies/:id/edit" component={ EditMovie } />
            <Route path="/movies/new" component={ NewMovie } />
            <Route path="/movies/:id" component={ MovieDetails } />
            <Route exact path="/" component={ MovieList } />
            <Route exact path="/*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
