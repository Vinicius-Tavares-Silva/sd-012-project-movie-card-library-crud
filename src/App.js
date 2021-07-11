import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages';

function App() {
  return (

    <div>
      <div>
        <h1>Movie Card Library CRUD</h1>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route
            path="/movies/new"
            render={ (props) => <NewMovie { ... props } /> }
            component={ NewMovie }
          />
          <Route
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="*" component={ NotFound } />

        </Switch>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </BrowserRouter>
    </div>

  );
}

export default App;
