import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFoud from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Route
        path="/"
        component={ MovieList }
      />
      <Route
        path="/movies/:id"
        component={ MovieDetails }
      />
      <Route
        path="/movies/new"
        component={ NewMovie }
      />
      <Route
        path="/movies/:id/edit"
        component={ EditMovie }
      />
      <Route
        path="*"
        component={ NotFoud }
      />
    </Router>
  );
}

export default App;
