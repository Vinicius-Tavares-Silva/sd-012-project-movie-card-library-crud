import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieList, NewMovie, NotFound, MovieDetails } from './pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/:error" component={ NotFound } />
          <Route path="/movies/new" component={ NewMovie } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
