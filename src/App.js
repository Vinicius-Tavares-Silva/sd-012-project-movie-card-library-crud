import React from 'react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Router exact path="/" Component={ MovieList } />
          <Router exact path="/movies/:id" Component={ MovieDetails } />
          <Router exact path="/movies/new" Component={ NewMovie } />
          <Router exact path="/movies/:id/edit" Component={ EditMovie } />
          <Router Component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
