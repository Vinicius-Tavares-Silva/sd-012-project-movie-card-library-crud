import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import { Loading } from './components';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      {/* <Loading /> */}
      <div>Movie Card Library CRUD</div>
      <Route path="/" component={ MovieList } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route component={ NotFound } />
    </Router>
  );
}

export default App;
