import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/" component={ MovieList } />
          <Route component={ NotFound } />
        </Switch>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
