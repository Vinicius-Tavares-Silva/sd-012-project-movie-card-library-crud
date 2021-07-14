import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          Movie Card Library CRUD
        </div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </BrowserRouter>
    );
  }
}

export default App;
