import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Link to="movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route exact path="/" component={ MovieList } />
        <Route><NotFound /></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
