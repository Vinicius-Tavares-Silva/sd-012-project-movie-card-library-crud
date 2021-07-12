import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EditMovie from './EditMovie';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';
import NewMovie from './NewMovie';
import NotFound from './NotFound';

class Index extends React.Component {
  render() {
    return (
      <main className="Index">
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Index;
export { default as EditMovie } from './EditMovie';
export { default as MovieDetails } from './MovieDetails';
export { default as MovieList } from './MovieList';
export { default as NewMovie } from './NewMovie';
export { default as NotFound } from './NotFound';
