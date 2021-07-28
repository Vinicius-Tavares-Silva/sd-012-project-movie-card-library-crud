import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ <MovieList /> } />
        {// aqui vai route params}
        }
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route path="/movies/new" component={ <NewMovie /> } />
        {// aqui tbm vai route params}
        }
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
      </BrowserRouter>

    );
  }
}

export default App;
