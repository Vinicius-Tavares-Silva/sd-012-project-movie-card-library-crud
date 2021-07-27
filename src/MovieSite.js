import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function MovieSite() {
  return (
    <div>
      <header className="header-site">
        <nav>
          <span className="link-site">
            <Link to="/">Raíz</Link>
          </span>
          <span className="link-site">
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </span>
          <span className="link-site">
            <Link to="/movies/:id">Details</Link>
          </span>
          <span className="link-site">
            <Link to="/movies/:id/edit">Edit</Link>
          </span>
        </nav>
      </header>
      <div>
        <Switch>
          <Route exact path="/" render={ (props) => <MovieList { ...props } /> } />
          <Route path="/movies/new" render={ (props) => <NewMovie { ...props } /> } />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    </div>
  );
}

export default MovieSite;
