import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <header>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Route path="/" render={ () => <MovieList /> } />
        <Route path="/movies/:id" render={ () => <MovieDetails /> } />
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
        <Route render={ () => <NotFound /> } />
      </BrowserRouter>
    </header>
  );
}

export default App;
