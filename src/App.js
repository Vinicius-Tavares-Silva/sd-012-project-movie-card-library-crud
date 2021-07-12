import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>Movie Card Library CRUD</div>
        <div>
          <Route path="/" component={ MovieList } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="" component={ NotFound } />
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
