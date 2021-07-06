import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Movie Card Library CRUD</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ MovieList } />
            <Route path="/movies/:id" component={ MovieDetails } />
            <Route path="/movies/new" component={ NewMovie } />
            <Route path="/movies/:id/edit" component={ EditMovie } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
