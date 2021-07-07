import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFound } />
        {/* notfound foi renderizado conforme a documentação: https://reactrouter.com/web/example/no-match */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
