import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ MovieList } />
        <Route path="/movie/:id" component={ MovieDetails } />
        <Route path="/movie/new" component={ NewMovie } />
        <Route path="/movie/:id/edit" component={ EditMovie } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
