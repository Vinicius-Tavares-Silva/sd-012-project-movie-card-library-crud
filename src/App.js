import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (

    <BrowserRouter>
      <h1>Movie Card Library CRUD</h1>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="" component={ NotFound } />
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
