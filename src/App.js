import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages';

function App() {
  return (

    <div>
      <BrowserRouter>
        <div>
          <h1>Movie Card Library CRUD</h1>
        </div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            path="/movies/new"
            render={ (props) => <NewMovie { ... props } /> }
            component={ NewMovie }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="" component={ NotFound } />

        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
