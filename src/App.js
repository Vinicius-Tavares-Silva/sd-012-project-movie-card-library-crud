import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieList, NewMovie, NotFound, MovieDetails } from './pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="/:error" component={ NotFound } />
          <Route exact path="/" component={ MovieList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
