import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieList, NewMovie, NotFound, MovieDetails } from './pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="/:error" component={ NotFound } />
          <Route exact path="/" component={ MovieList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
